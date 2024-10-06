<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useProductStore } from '@/stores/ProductStore'

// COMPONENTS
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import FooterPrimary from '@/components/FooterPrimary.vue'
import ModalBox from '@/components/ModalBox.vue'
import OrderBox from '@/components/OrderBox.vue'
import ProductCard from '@/components/ProductCard.vue'
import SelectedProductList from '@/components/SelectedProductList.vue'

// DATA
const productStore = useProductStore()
const products = productStore.products
const dialogRef = ref<HTMLDialogElement | null>(null)

// METHODS
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
            />
          </ul>
        </section>

        <!-- Checkout Box -->
        <!-- <section class="checkout-panel" :class="{ sticky: productStore.totalOrderCount }"> -->
        <OrderBox
          v-if="productStore.totalOrderCount"
          :class="{ sticky: productStore.totalOrderCount }"
        >
          <template #header
            ><h3 class="order-box-title">
              Your Cart (<span class="checkout__total-qty">{{ productStore.totalOrderCount }}</span
              >)
            </h3></template
          >

          <template #body>
            <SelectedProductList />
          </template>

          <template #footer>
            <div class="checkout-eco-msg">
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
            ><h3 class="order-box-title">
              Your Cart (<span class="checkout__total-qty">{{ productStore.totalOrderCount }}</span
              >)
            </h3></template
          >
          <template #body>
            <div class="order-box-empty">
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
        <!-- </section> -->
      </div>

      <!-- Confirmation Modal -->
      <ModalBox ref="dialog-ref" @new-order="startNewOrder" />
    </main>

    <FooterPrimary />
  </div>
</template>

<style scoped></style>
