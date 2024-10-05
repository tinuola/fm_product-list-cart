<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useProductStore } from '@/stores/ProductStore'
import ProductCard from './components/ProductCard.vue'

const productStore = useProductStore()
const products = productStore.products
// const totalOrderCount = ref(0)
const dialogRef = ref<HTMLDialogElement | null>(null)

onMounted(() => {
  dialogRef.value = document.querySelector('dialog')
})

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

useHead({
  title: 'Product List with Card - Frontend Mentor Challenge',
  meta: [
    {
      name: 'description',
      content: 'Solution to the Product List with Cart challenge on Frontend Mentor.'
    },
    {
      name: 'author',
      content: 'TechTinu'
    },
    {
      name: 'theme-color',
      content: '#c73a0f'
    }
  ]
})
</script>

<template>
  <div class="site-wrapper">
    <header>
      <a href="#main" class="skip">Skip to main content</a>
      <h1 class="sr-only">Product List Cart - A Frontend Mentor Project</h1>
    </header>

    <main id="main">
      <div class="app-view u-flex">
        <section class="product-grid">
          <h2 class="product-grid-title">Desserts</h2>
          <ul class="product-items-list">
            <ProductCard
              v-for="product in products"
              :key="product.name"
              :class="{ selected: product.selected }"
              :image="product.image"
              :name="product.name"
              :category="product.category"
              :price="product.price"
              :quantity="product.quantity"
              :selected="product.selected"
            />
          </ul>
        </section>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<style scoped></style>
