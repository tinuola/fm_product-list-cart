<script setup>
// import { useProductStore } from '@/stores/ProductStore'

const { category, image, name, price, selected } = defineProps({
  image: {
    type: Object,
    default: () => {}
  },
  name: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  selected: {
    type: Boolean,
    default: false
  }
})
/*
  image: Image
  name: string
  category: string
  price: number
  sku: string
  inventory: null
  quantity: number
  selected?: boolean
  totalItemPrice?: number
*/
</script>

<template>
  <!-- <li class="product-item-card" :key="name" :class="{ selected: selected }"> -->
  <li class="product-item-card">
    <div class="product-card-image-wrapper">
      <picture>
        <source media="(min-width: 1200px)" :srcset="image.desktop" />
        <source media="(min-width: 551px)" :srcset="image.tablet" />
        <source media="(min-width: 320px)" :srcset="image.mobile" />
        <img :src="image.desktop" :alt="name" width="502" height="480" />
      </picture>
    </div>
    <!-- Buttons -->
    <div class="product-card-btns-group">
      <!-- Default add-to-cart button -->
    </div>
    <div class="product-card-content u-flex">
      <p class="product-category">{{ category }}</p>
      <p class="product-name">{{ name }}</p>
      <p class="product-price u-font-medium">${{ price.toFixed(2) }}</p>
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
