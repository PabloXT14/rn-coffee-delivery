import type { ImageSourcePropType } from 'react-native'

export type Coffee = {
  id: string
  name: string
  description: string
  price: number
  image: ImageSourcePropType
  tags: string[]
}

export type CartItem = {
  id: string
  name: string
  size: string
  price: number
  quantity: number
  image: ImageSourcePropType
}
