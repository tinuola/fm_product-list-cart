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
  function addProductToCart(sku: string) {
    const index = findSkuIndex(sku)

    products.value[index].selected = true
    products.value[index].quantity = 1
    totalOrderCount.value++
    // console.log(totalOrderCount.value)
  }

  function increaseProductCount(sku: string) {
    const index = findSkuIndex(sku)

    products.value[index].quantity++
    recalculatePrice(index)
    totalOrderCount.value++
    // console.log(totalOrderCount.value)
  }

  function decreaseProductCount(sku: string) {
    const index = findSkuIndex(sku)

    products.value[index].quantity--
    recalculatePrice(index)
    totalOrderCount.value--

    // Trigger removal of 'selected' class
    if (products.value[index].quantity === 0) {
      products.value[index].selected = false
    }
  }

  function recalculatePrice(idx: number) {
    return (products.value[idx].totalItemPrice =
      products.value[idx].quantity * products.value[idx].price)
  }

  function removeProductFromCart(sku: string) {
    const index = findSkuIndex(sku)

    totalOrderCount.value -= parsedProducts.value[index].quantity

    products.value[index].selected = false

    products.value[index].quantity = 0
  }

  function findSkuIndex(sku: string) {
    return products.value.findIndex((obj) => obj.sku === sku)
  }

  return {
    products,
    parsedProducts,
    totalOrderCount,
    totalOrderPrice,
    addProductToCart,
    increaseProductCount,
    decreaseProductCount,
    removeProductFromCart
  }
})
