<script setup>
const { isConfirmed, name, price, quantity, totalItemPrice } = defineProps({
  isConfirmed: {
    type: Boolean,
    default: false
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
  totalItemPrice: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <li>
    <slot name="slotLeft"></slot>

    <div class="selected-product u-flex">
      <div class="selected-product-body">
        <p class="u-font-medium">{{ name }}</p>
        <div class="selected-product-data u-flex u-font-medium">
          <span class="selected-product-qty"
            ><span>{{ quantity }}</span
            >x</span
          >
          <span class="selected-product-price"
            ><span>@</span> <span>$</span>{{ price.toFixed(2) }}</span
          >
          <span v-if="!isConfirmed" class="selected-product-total-price"
            ><span>$</span>{{ totalItemPrice.toFixed(2) }}</span
          >
        </div>
      </div>

      <slot name="slotRight"></slot>
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
