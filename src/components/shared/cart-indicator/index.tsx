import {
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from 'react-native'
import { router } from 'expo-router'
import { ShoppingCart } from 'phosphor-react-native'

import { useCartStore } from '@/store/use-cart-store'

import { styles } from './styles'

type CartIndicatorProps = TouchableOpacityProps

export function CartIndicator({ style, ...props }: CartIndicatorProps) {
  const itemsCount = useCartStore(state => state.items.length)

  const iconColor = itemsCount > 0 ? styles.full.color : styles.empty.color
  const quantityText = itemsCount > 9 ? '9+' : itemsCount

  const handleGoToCart = () => {
    router.navigate('/cart')
  }

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handleGoToCart}
      {...props}
    >
      <ShoppingCart size={24} weight="fill" color={iconColor} />
      {itemsCount > 0 && (
        <View style={styles.counter}>
          <Text style={styles.counterText}>{quantityText}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
