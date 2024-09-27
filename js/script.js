console.log('Hello!')

const dialog = document.querySelector('dialog')

const confirmBtn = document.querySelector('#confirm-order-btn')

const newOrderBtn = document.querySelector('#new-order-btn')

confirmBtn.addEventListener('click', () => {
  dialog.showModal()
})

newOrderBtn.addEventListener('click', () => {
  dialog.close()
})
