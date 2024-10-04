import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types'
import data from '@/data'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>(data)

  const totalOrderCount = ref(0)

  const parsedProducts = computed(() => {
    // Track selected products
    const selectedProducts = products.value.filter((obj) => obj.selected === true)

    // Create key to track/calculate total price of a selected product as its quantity changes
    const selectedProductsTotalPrices = selectedProducts.map((obj) => {
      const totalItemPrice = obj.quantity * obj.price
      return { ...obj, totalItemPrice }
    })

    return selectedProductsTotalPrices
  })

  const totalOrderPrice = computed(() => {
    const calcTotalOrderPrice = parsedProducts.value.reduce((a, b) => {
      return a + b.totalItemPrice
    }, 0)

    return calcTotalOrderPrice.toFixed(2)
  })

  // METHODS
  function addProductToCart(index: number) {
    products.value[index].selected = true
    products.value[index].quantity = 1
    totalOrderCount.value++
  }

  function increaseProductCount(idx: number) {
    products.value[idx].quantity++
    recalculatePrice(idx)
    totalOrderCount.value++
  }

  function decreaseProductCount(idx: number) {
    products.value[idx].quantity--
    recalculatePrice(idx)
    totalOrderCount.value--

    // Trigger removal of 'selected' class
    if (products.value[idx].quantity === 0) {
      products.value[idx].selected = false
    }
  }

  function recalculatePrice(idx: number) {
    return (products.value[idx].totalItemPrice =
      products.value[idx].quantity * products.value[idx].price)
  }

  function removeProductFromCart(idx: number, itemId: string) {
    const skuIndex = products.value.findIndex((prodObj) => prodObj.sku === itemId)

    totalOrderCount.value -= parsedProducts.value[idx].quantity

    products.value[skuIndex].selected = false

    products.value[skuIndex].quantity = 0
  }

  return {
    products,
    totalOrderPrice,
    addProductToCart,
    increaseProductCount,
    decreaseProductCount,
    removeProductFromCart
  }
})
