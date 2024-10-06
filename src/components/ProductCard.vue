<script setup>
import ButtonPrimary from './ButtonPrimary.vue'
import { useProductStore } from '@/stores/ProductStore'

const { category, image, name, price, quantity, selected, sku } = defineProps({
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
  quantity: {
    type: Number,
    default: 0
  },
  selected: {
    type: Boolean,
    default: false
  },
  sku: {
    type: String,
    default: ''
  }
})

const productStore = useProductStore()

// defineEmits(['addToCart'])
</script>

<template>
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
      <!-- Select quantity -->
      <div v-if="quantity" class="btn btn--sm btn__quantity u-font-medium u-flex">
        <ButtonPrimary class="btn__decrease-qty" @click="productStore.decreaseProductCount(sku)"
          ><img src="/images/icon-decrement-quantity.svg" alt="Decrease quantity by 1"
        /></ButtonPrimary>
        <span class="product-card__selected-qty">{{ quantity }}</span>
        <ButtonPrimary class="btn__increase-qty" @click="productStore.increaseProductCount(sku)"
          ><img src="/images/icon-increment-quantity.svg" alt="Increase quantity by 1"
        /></ButtonPrimary>
      </div>

      <!-- Add to cart -->
      <ButtonPrimary
        v-else
        title="Add to Cart"
        class="btn btn--sm btn__add-to-cart u-flex"
        @click="productStore.addProductToCart(sku)"
        ><img src="/images/icon-add-to-cart.svg" alt=""
      /></ButtonPrimary>
      <!-- Emit version -->
      <!-- @click="$emit('addToCart', sku)" -->
    </div>
    <div class="product-card-content u-flex">
      <p class="product-category">{{ category }}</p>
      <p class="product-name">{{ name }}</p>
      <p class="product-price u-font-medium">${{ price.toFixed(2) }}</p>
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
