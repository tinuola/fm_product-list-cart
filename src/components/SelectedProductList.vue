<script setup>
import SelectedProduct from '@/components/SelectedProduct.vue'
import { useProductStore } from '@/stores/ProductStore'

const productStore = useProductStore()
</script>

<template>
  <ul class="checkout-items-list u-flex">
    <SelectedProduct
      v-for="product in productStore.parsedProducts"
      :key="product.name"
      :name="product.name"
      :price="product.price"
      :quantity="product.quantity"
      :sku="product.sku"
      :selected="product.selected"
      :total-item-price="product.totalItemPrice"
    >
      <template #icon>
        <div
          class="checkout-item-cancel-icon"
          @click="productStore.removeProductFromCart(product.sku)"
        >
          <img src="/images/icon-remove-item.svg" alt="Remove item from cart" /></div
      ></template>
    </SelectedProduct>
  </ul>
</template>

<style lang="scss" scoped></style>
