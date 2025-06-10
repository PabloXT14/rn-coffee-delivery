import type { ImageSourcePropType } from 'react-native'

export type Coffee = {
  id: string
  name: string
  description: string
  price: number
  image: ImageSourcePropType
  tags: string[]
}
