import {
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from 'react-native'
import { ShoppingCart } from 'phosphor-react-native'

import { styles } from './styles'

type CartIndicatorProps = TouchableOpacityProps & {
  itemsCount: number
}

export function CartIndicator({ itemsCount, ...props }: CartIndicatorProps) {
  const iconColor = itemsCount > 0 ? styles.full.color : styles.empty.color
  const quantityText = itemsCount > 9 ? '9+' : itemsCount

  return (
    <TouchableOpacity {...props} style={styles.container}>
      <ShoppingCart size={24} weight="fill" color={iconColor} />
      {itemsCount > 0 && (
        <View style={styles.counter}>
          <Text style={styles.counterText}>{quantityText}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
