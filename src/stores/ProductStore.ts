import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import data from '@/data/data'

export const useProductStore = defineStore('products', () => {
  const products = ref(data)

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

  return { products, totalOrderPrice }
})
