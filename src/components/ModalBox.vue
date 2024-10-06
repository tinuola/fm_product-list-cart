<script setup>
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import OrderBox from '@/components/OrderBox.vue'
import SelectedProductList from '@/components/SelectedProductList.vue'

defineEmits(['newOrder'])
</script>

<template>
  <dialog class="confirmation-modal">
    <OrderBox>
      <template #header>
        <div class="confirmation-icon-wrapper">
          <img src="/images/icon-order-confirmed.svg" alt="Order confirmed icon" />
        </div>
        <h3>Order Confirmed</h3>
        <p>We hope you enjoy your food!</p>
      </template>

      <template #body>
        <SelectedProductList :is-confirmed="true" />
      </template>

      <template #footer>
        <ButtonPrimary
          class="btn btn--lg btn__new-order u-font-medium"
          id="confirm-order-btn"
          @click="$emit('newOrder')"
        >
          Start New Order
        </ButtonPrimary>
      </template>
    </OrderBox>
  </dialog>
</template>

<style lang="scss" scoped></style>
