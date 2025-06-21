import {
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from 'react-native'
import { router } from 'expo-router'
import { ShoppingCart } from 'phosphor-react-native'

import { styles } from './styles'

type CartIndicatorProps = TouchableOpacityProps & {
  itemsCount: number
}

export function CartIndicator({
  itemsCount,
  style,
  ...props
}: CartIndicatorProps) {
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
