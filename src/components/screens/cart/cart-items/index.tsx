import { FlatList, View } from 'react-native'

import type { CartItem } from '@/@types/coffee'

import { styles } from './styles'
import { CartCard } from '@/components/shared/cart-card'

const CART_ITEMS: CartItem[] = [
  // Example items, replace with actual data
  {
    image: require('@/assets/images/coffees/irlandes.png'),
    name: 'Irlandês',
    price: 1980,
    size: '227ml',
    quantity: 2,
    onIncrement: () => {},
    onDecrement: () => {},
    onDelete: () => {},
  },
  {
    image: require('@/assets/images/coffees/capuccino.png'),
    name: 'Capuccino',
    price: 990,
    size: '227ml',
    quantity: 1,
    onIncrement: () => {},
    onDecrement: () => {},
    onDelete: () => {},
  },
  // Add more items as needed
]

export function CartItems() {
  return (
    <View style={styles.container}>
      <FlatList
        data={CART_ITEMS}
        keyExtractor={item => `${item.name}-${item.size}`}
        renderItem={({ item }) => <CartCard data={item} />}
      />
    </View>
  )
}
