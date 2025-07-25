import {
  Image,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from 'react-native'
import Animated, { Easing, FadeInDown } from 'react-native-reanimated'

import type { Coffee } from '@/@types/coffee'

import { styles } from './styles'

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity)

type CatalogCardProps = TouchableOpacityProps & {
  coffee: Coffee
  index?: number
}

export function CatalogCard({ coffee, index = 0, ...props }: CatalogCardProps) {
  const formattedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(coffee.price / 100)
    .replace('R$', '')

  return (
    <TouchableOpacityAnimated
      entering={FadeInDown.delay(index * 100)
        .duration(500)
        .easing(Easing.ease)}
      style={styles.container}
      {...props}
    >
      <Image source={coffee.image} alt="coffee" style={styles.image} />

      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>
            {coffee.name}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {coffee.description}
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.price}>{formattedPrice}</Text>
        </View>
      </View>
    </TouchableOpacityAnimated>
  )
}
