import products from '../data/data.js'

const { computed, ref, reactive, toRefs } = Vue

const App = {
  props: {},

  setup() {
    const state = reactive({
      products,
      productRefs: [],
    })

    const productRefs = ref([])

    const selectedItemsList = ref([])

    const totalCount = ref(0)

    const totalOrderPrice = computed(() => {
      if (!selectedItemsList.value) {
        return 0
      }

      const calc = selectedItemsList.value.reduce((a, b) => {
        return a + b.totalItemPrice
      }, 0)

      return calc.toFixed(2)
    })

    // Methods
    function addToCart(el) {
      totalCount.value++

      const { name, price, image } = products[el]
      const { thumbnail } = image

      const selectedItem = {
        name,
        price,
        thumbnail,
        selected: true,
        quantity: 1,
        totalItemPrice: price,
      }

      selectedItemsList.value.push(selectedItem)
    }

    function calculateTotal() {}

    return {
      ...toRefs(state),
      addToCart,
      calculateTotal,
      productRefs,
      selectedItemsList,
      totalCount,
      totalOrderPrice,
    }
  },
}

Vue.createApp(App).mount('#app')
