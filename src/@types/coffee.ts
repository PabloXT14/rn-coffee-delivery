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
  image: ImageSourcePropType
  name: string
  price: number
  size: string
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
  onDelete: () => void
}
