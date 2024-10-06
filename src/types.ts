export type Product = {
  image: Image
  name: string
  category: string
  price: number
  sku: string
  inventory: null
  quantity: number
  selected?: boolean
  totalItemPrice?: number
}

export type Image = {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}
