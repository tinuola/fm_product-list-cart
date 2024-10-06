<script setup>
const { name, price, quantity, totalItemPrice } = defineProps({
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
  <div>
    <li>
      <slot name="slotLeft"></slot>

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

        <slot name="slotRight"></slot>
      </div>
    </li>
  </div>
</template>

<style lang="scss" scoped></style>
