import products from '../data/data.js'

const { computed, ref } = Vue

const App = {
  setup() {
    const productRefs = ref(products)

    const totalOrderCount = ref(0)

    const selectedItemIndex = ref()

    const parsedProductsRef = ref()

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
      // console.log(calc)
      return calc.toFixed(2)
    })

    // METHODS
    function addProductToCart(index, skuNum) {
      // if (productAlreadyInCart(skuNum) >= 0) {
      //   console.log('Already in cart!')
      //   return
      // }

      productRefs.value[index].selected = true
      productRefs.value[index].quantity = 1

      totalOrderCount.value++
    }

    function productAlreadyInCart(id) {
      if (parsedProducts.value.length) {
        const skuExists = parsedProducts.value.findIndex(
          (prodObj) => prodObj.sku === id
        )
        return skuExists
      }
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
      // const id = productAlreadyInCart(itemId)
      console.log('remove', itemId, idx)
      // productRefs.value[idx].selected = false
      // productRefs.value[idx].quantity = 0
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
