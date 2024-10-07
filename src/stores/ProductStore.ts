import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types'
import data from '@/data'

export const useProductStore = defineStore('products', () => {
  // DATA
  const products = ref<Product[]>(data)

  const selectedProducts = ref<Product[]>([])

  const totalOrderCount = ref(0)

  // COMPUTED
  const totalOrderPrice = computed(() => {
    const calcTotalOrderPrice = selectedProducts.value.reduce((a, b) => {
      return a + (b.totalItemPrice ?? 0)
    }, 0)

    return calcTotalOrderPrice.toFixed(2)
  })

  // METHODS
  function addProductToCart(sku: string) {
    const productIdx = findSkuIndex(products.value, sku)

    selectedProducts.value.push(products.value[productIdx])

    const selectedIdx = findSkuIndex(selectedProducts.value, sku)

    selectedProducts.value[selectedIdx].selected = true

    selectedProducts.value[selectedIdx].quantity = 1

    selectedProducts.value[selectedIdx].totalItemPrice =
      selectedProducts.value[selectedIdx].quantity * selectedProducts.value[selectedIdx].price

    totalOrderCount.value++
  }

  function increaseProductCount(sku: string) {
    const index = findSkuIndex(selectedProducts.value, sku)

    selectedProducts.value[index].quantity++
    recalculatePrice(index)
    totalOrderCount.value++
  }

  function decreaseProductCount(sku: string) {
    const index = findSkuIndex(selectedProducts.value, sku)

    selectedProducts.value[index].quantity--
    recalculatePrice(index)

    totalOrderCount.value--

    // Undo 'selected' class and remove from cart
    if (selectedProducts.value[index].quantity === 0) {
      selectedProducts.value[index].selected = false
      removeProductFromCart(sku)
    }
  }

  function removeProductFromCart(sku: string) {
    const index = findSkuIndex(selectedProducts.value, sku)

    totalOrderCount.value -= selectedProducts.value[index].quantity

    selectedProducts.value[index].quantity = 0

    selectedProducts.value[index].selected = false

    selectedProducts.value.splice(index, 1)
  }

  function resetStore() {
    selectedProducts.value.forEach((obj) => {
      obj.selected = false
      obj.totalItemPrice = 0
      obj.quantity = 0
    })

    selectedProducts.value = []

    totalOrderCount.value = 0
  }

  // HELPERS
  function findSkuIndex(arr: Product[], sku: string) {
    return arr.findIndex((obj) => obj.sku === sku)
  }

  function recalculatePrice(idx: number) {
    return (selectedProducts.value[idx].totalItemPrice =
      selectedProducts.value[idx].quantity * selectedProducts.value[idx].price)
  }

  return {
    addProductToCart,
    decreaseProductCount,
    increaseProductCount,
    products,
    removeProductFromCart,
    resetStore,
    selectedProducts,
    totalOrderCount,
    totalOrderPrice
  }
})
