<script setup>
const { image, name, price, quantity, selected, sku, totalItemPrice } = defineProps({
  image: {
    type: Object,
    default: () => {}
  },
  name: {
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
  },
  totalItemPrice: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div>
    <li>
      <!-- Left Slot -->
      <slot name="image"></slot>
      <div class="checkout-item u-flex">
        <div class="checkout-item-body">
          <p class="u-font-medium">{{ name }}</p>
          <div class="checkout-item-data u-flex u-font-medium">
            <span class="checkout-item-qty"
              ><span>{{ quantity }}</span
              >x</span
            >
            <span class="checkout-item-price"
              ><span>@&nbsp;</span> <span>$</span>{{ price.toFixed(2) }}</span
            >
            <span class="checkout-item-total-price"
              ><span>$</span>{{ totalItemPrice.toFixed(2) }}</span
            >
          </div>
        </div>
        <!-- Right Slot -->
        <slot name="icon"></slot>
        <!-- <div class="checkout-item-cancel-icon" @click="productStore.removeProductFromCart(sku)">
          <img src="assets/images/icon-remove-item.svg" alt="Remove item from cart" />
        </div> -->
      </div>
    </li>
  </div>
</template>

<style lang="scss" scoped></style>
