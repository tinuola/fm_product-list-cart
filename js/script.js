import data from '../data/data.js'

const { computed, onMounted, ref } = Vue

const App = {
  setup() {
    const products = ref(data)
    const totalOrderCount = ref(0)
    const dialogRef = ref(null)

    onMounted(() => {
      dialogRef.value = document.querySelector('dialog')
    })

    // COMPUTED
    const parsedProducts = computed(() => {
      const selectedProducts = products.value.filter(
        (obj) => obj.selected === true
      )

      const selectedProductsTotalPrices = selectedProducts.map((obj) => {
        const totalItemPrice = obj.quantity * obj.price
        return { ...obj, totalItemPrice }
      })

      return selectedProductsTotalPrices
    })

    const totalOrderPrice = computed(() => {
      const calcTotalOrderPrice = parsedProducts.value.reduce((a, b) => {
        return a + b.totalItemPrice
      }, 0)

      return calcTotalOrderPrice.toFixed(2)
    })

    // METHODS
    function addProductToCart(index) {
      products.value[index].selected = true
      products.value[index].quantity = 1

      totalOrderCount.value++
    }

    function increaseItemCount(idx) {
      products.value[idx].quantity++

      products.value[idx].totalItemPrice =
        products.value[idx].quantity * products.value[idx].price

      totalOrderCount.value++
    }

    function decreaseItemCount(idx) {
      products.value[idx].quantity--

      products.value[idx].totalItemPrice =
        products.value[idx].quantity * products.value[idx].price

      totalOrderCount.value--

      if (products.value[idx].quantity === 0) {
        products.value[idx].selected = false
      }
    }

    function removeFromCart(idx, itemId) {
      const skuIndex = products.value.findIndex(
        (prodObj) => prodObj.sku === itemId
      )

      totalOrderCount.value -= parsedProducts.value[idx].quantity

      products.value[skuIndex].selected = false

      products.value[skuIndex].quantity = 0
    }

    function confirmOrder() {
      dialogRef.value.showModal()
    }

    function startNewOrder() {
      products.value.forEach((obj) => {
        obj.selected = false
        obj.quantity = 0
      })

      totalOrderCount.value = 0

      dialogRef.value.close()
    }

    return {
      addProductToCart,
      confirmOrder,
      decreaseItemCount,
      increaseItemCount,
      parsedProducts,
      products,
      removeFromCart,
      startNewOrder,
      totalOrderCount,
      totalOrderPrice,
    }
  },
}

Vue.createApp(App).mount('#app')
