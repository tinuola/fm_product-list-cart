<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore'

const productStore = useProductStore()

// METHODS
// function addProductToCart(index) {
//   products.value[index].selected = true
//   products.value[index].quantity = 1
//   totalOrderCount.value++
// }

// function increaseProductCount(idx) {
//   products.value[idx].quantity++
//   recalculatePrice(idx)
//   totalOrderCount.value++
// }

// function decreaseProductCount(idx) {
//   products.value[idx].quantity--
//   recalculatePrice(idx)
//   totalOrderCount.value--

//   // Trigger removal of 'selected' class
//   if (products.value[idx].quantity === 0) {
//     products.value[idx].selected = false
//   }
// }

// function recalculatePrice(idx) {
//   return (products.value[idx].totalItemPrice =
//     products.value[idx].quantity * products.value[idx].price)
// }

// function removeProductFromCart(idx, itemId) {
//   const skuIndex = products.value.findIndex(
//     (prodObj) => prodObj.sku === itemId
//   )

//   totalOrderCount.value -= parsedProducts.value[idx].quantity

//   products.value[skuIndex].selected = false

//   products.value[skuIndex].quantity = 0
// }

// function confirmOrder() {
//   dialogRef.value.showModal()
// }

// function startNewOrder() {
//   // Reset app data
//   products.value.forEach((obj) => {
//     obj.selected = false
//     obj.quantity = 0
//   })

//   totalOrderCount.value = 0

//   dialogRef.value.close()
// }
</script>

<template>
  <div>
    <h1>Product List with Cart App</h1>
    <pre>{{ productStore.products }}</pre>
  </div>
</template>

<style scoped></style>
