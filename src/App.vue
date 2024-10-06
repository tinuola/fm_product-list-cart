<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useProductStore } from '@/stores/ProductStore'
import ProductCard from './components/ProductCard.vue'

const productStore = useProductStore()
const products = productStore.products
const dialogRef = ref<HTMLDialogElement | null>(null)

onMounted(() => {
  dialogRef.value = document.querySelector('dialog')
})

// METHODS
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
              :sku="product.sku"
              :selected="product.selected"
            />
            <!-- Emit version -->
            <!-- @add-to-cart="addToCartHandler(product.sku)" -->
          </ul>
        </section>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<style scoped></style>
