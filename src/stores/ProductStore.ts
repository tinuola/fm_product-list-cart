import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types'
import data from '@/data'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>(data)

  const totalOrderCount = ref(0)

  const totalOrderPrice = computed(() => {
    const calcTotalOrderPrice = products.value.reduce((a, b) => {
      return a + (b.totalItemPrice ?? 0)
    }, 0)

    return calcTotalOrderPrice.toFixed(2)
  })

  // METHODS
  function addProductToCart(sku: string) {
    const index = findSkuIndex(sku)

    products.value[index].selected = true
    products.value[index].quantity = 1
    totalOrderCount.value++
  }

  function increaseProductCount(sku: string) {
    const index = findSkuIndex(sku)

    products.value[index].quantity++
    recalculatePrice(index)
    totalOrderCount.value++
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

    totalOrderCount.value -= products.value[index].quantity

    products.value[index].selected = false

    products.value[index].quantity = 0
  }

  function findSkuIndex(sku: string) {
    return products.value.findIndex((obj) => obj.sku === sku)
  }

  return {
    products,
    totalOrderCount,
    totalOrderPrice,
    addProductToCart,
    increaseProductCount,
    decreaseProductCount,
    removeProductFromCart
  }
})
