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
      // Track selected products
      const selectedProducts = products.value.filter(
        (obj) => obj.selected === true
      )

      // Create key to track/calculate total price of a selected product as its quantity changes
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

    function increaseProductCount(idx) {
      products.value[idx].quantity++
      recalculatePrice(idx)
      totalOrderCount.value++
    }

    function decreaseProductCount(idx) {
      products.value[idx].quantity--
      recalculatePrice(idx)
      totalOrderCount.value--

      // Trigger removal of 'selected' class
      if (products.value[idx].quantity === 0) {
        products.value[idx].selected = false
      }
    }

    function recalculatePrice(idx) {
      return (products.value[idx].totalItemPrice =
        products.value[idx].quantity * products.value[idx].price)
    }

    function removeProductFromCart(idx, itemId) {
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
      // Reset app data
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
      decreaseProductCount,
      increaseProductCount,
      parsedProducts,
      products,
      removeProductFromCart,
      startNewOrder,
      totalOrderCount,
      totalOrderPrice,
    }
  },
}

Vue.createApp(App).mount('#app')
