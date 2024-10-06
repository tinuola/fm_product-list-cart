<script setup>
import SelectedProduct from '@/components/SelectedProduct.vue'
import { useProductStore } from '@/stores/ProductStore'

const productStore = useProductStore()

const { isConfirmed } = defineProps({
  isConfirmed: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="order-box-active u-flex">
    <ul class="selected-product-list u-flex">
      <SelectedProduct
        v-for="product in productStore.selectedProducts"
        :key="product.name"
        :name="product.name"
        :price="product.price"
        :quantity="product.quantity"
        :total-item-price="product.totalItemPrice"
        :is-confirmed="isConfirmed"
      >
        <!-- <template v-if="isConfirmed" #slotLeft>
          <div class="confirmed-item-image-wrapper">
            <img :src="product.image.thumbnail" alt="" />
          </div>
        </template> -->

        <template v-if="isConfirmed" #slotRight>
          <span class="checkout-item-total-price"
            ><span>$</span>{{ product.totalItemPrice.toFixed(2) }}</span
          >
        </template>
        <template v-else #slotRight>
          <div
            class="selected-product-cancel-icon"
            @click="productStore.removeProductFromCart(product.sku)"
          >
            <img src="/images/icon-remove-item.svg" alt="Remove item from cart" /></div
        ></template>
      </SelectedProduct>
    </ul>
    <div class="final-calc-content u-flex">
      <p class="u-font-medium">Order Total</p>
      <h4 class="final-calc-amount"><span>$</span>{{ productStore.totalOrderPrice }}</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
