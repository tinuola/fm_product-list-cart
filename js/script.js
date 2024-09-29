import products from '../data/data.js'

const { computed, ref } = Vue

const App = {
  setup() {
    const productRefs = ref(products)

    const totalOrderCount = ref(0)

    const selectedItemIndex = ref()

    // COMPUTED
    const parsedProducts = computed(() => {
      const prods = productRefs.value.filter((obj) => obj.selected === true)

      const calc = prods.map((obj) => {
        const totalItemPrice = obj.quantity * obj.price
        return { ...obj, totalItemPrice }
      })

      return calc
    })

    const totalOrderPrice = computed(() => {
      const calc = parsedProducts.value.reduce((a, b) => {
        return a + b.totalItemPrice
      }, 0)

      return calc.toFixed(2)
    })

    // METHODS
    function addProductToCart(index, skuNum) {
      productRefs.value[index].selected = true
      productRefs.value[index].quantity = 1

      totalOrderCount.value++
    }

    function increaseItemCount(idx, skuNum) {
      productRefs.value[idx].quantity++

      productRefs.value[idx].totalItemPrice =
        productRefs.value[idx].quantity * productRefs.value[idx].price

      totalOrderCount.value++
    }

    function decreaseItemCount(idx, skuNum) {
      productRefs.value[idx].quantity--

      productRefs.value[idx].totalItemPrice =
        productRefs.value[idx].quantity * productRefs.value[idx].price

      totalOrderCount.value--

      if (productRefs.value[idx].quantity === 0) {
        productRefs.value[idx].selected = false
      }
    }

    function removeFromCart(idx, itemId) {
      const skuIndex = productRefs.value.findIndex(
        (prodObj) => prodObj.sku === itemId
      )

      totalOrderCount.value -= parsedProducts.value[idx].quantity

      productRefs.value[skuIndex].selected = false

      productRefs.value[skuIndex].quantity = 0
    }

    return {
      addProductToCart,
      decreaseItemCount,
      increaseItemCount,
      parsedProducts,
      products,
      productRefs,
      removeFromCart,
      selectedItemIndex,
      totalOrderCount,
      totalOrderPrice,
    }
  },
}

Vue.createApp(App).mount('#app')
