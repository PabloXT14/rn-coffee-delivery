import { FlatList, View } from 'react-native'

import { CartCard } from '@/components/shared/cart-card'
import { ListEmpty } from '@/components/shared/list-empty'

import { useCartStore } from '@/store/use-cart-store'

import { styles } from './styles'

export function CartItems() {
  const items = useCartStore(state => state.items)

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => `${item.name}-${item.size}`}
        renderItem={({ item }) => <CartCard data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={<ListEmpty message="Nenhum item no carrinho" />}
      />
    </View>
  )
}
