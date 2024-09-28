import products from '../data/data.js'

const { reactive, toRefs } = Vue

const App = {
  setup() {
    const state = reactive({
      products,
    })

    return {
      ...toRefs(state),
    }
  },
}

Vue.createApp(App).mount('#app')
