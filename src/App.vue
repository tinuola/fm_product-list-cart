<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useProductStore } from '@/stores/ProductStore'

// Components
import OrderBox from '@/components/OrderBox.vue'
import ProductCard from '@/components/ProductCard.vue'
import SelectedProductList from '@/components/SelectedProductList.vue'

// Data
const productStore = useProductStore()

const products = productStore.products

const dialogRef = ref<HTMLDialogElement | null>(null)

// Methods
function confirmOrder() {
  dialogRef.value?.showModal()
}

function startNewOrder() {
  // Reset app data
  productStore.products.forEach((obj) => {
    obj.selected = false
    obj.quantity = 0
  })

  productStore.totalOrderCount = 0

  dialogRef.value?.close()
}

onMounted(() => {
  dialogRef.value = document.querySelector('dialog')
})

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

        <!-- Checkout Box -->
        <section class="checkout-panel" :class="{ sticky: productStore.totalOrderCount }">
          <OrderBox v-if="productStore.totalOrderCount">
            <template #header
              ><h3 class="checkout-panel-title">
                Your Cart (<span class="checkout__total-qty">{{
                  productStore.totalOrderCount
                }}</span
                >)
              </h3></template
            >
            <template #body>
              <!-- <div class="checkout-panel-active u-flex"> -->
              <SelectedProductList />
              <!-- </div> -->
            </template>
            <template #footer>
              <div class="checkout--submessage">
                <p>
                  This is a
                  <span class="u-font-medium">carbon-neutral</span> delivery
                </p>
              </div>
              <ButtonPrimary
                class="btn btn--lg btn__checkout u-font-medium"
                id="confirm-order-btn"
                @click="confirmOrder"
              >
                Confirm Order
              </ButtonPrimary>
            </template>
          </OrderBox>

          <!-- Display if no item is selected -->
          <OrderBox v-else>
            <template #header
              ><h3 class="checkout-panel-title">
                Your Cart (<span class="checkout__total-qty">{{
                  productStore.totalOrderCount
                }}</span
                >)
              </h3></template
            >
            <template #body>
              <div class="checkout-panel-empty">
                <div class="checkout-panel-empty-image-wrapper">
                  <img
                    src="/images/illustration-empty-cart.svg"
                    alt="Cake with a slice removed"
                    width="128"
                    height="128"
                  />
                </div>
                <p>Your added items will appear here.</p>
              </div>
            </template>
          </OrderBox>
        </section>
      </div>

      <!-- Confirmation Modal -->
      <dialog class="confirmation-modal" ref="dialog-ref">
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
              @click="startNewOrder"
            >
              Start New Order
            </ButtonPrimary>
          </template>
        </OrderBox>
      </dialog>
    </main>

    <footer></footer>
  </div>
</template>

<style scoped></style>
