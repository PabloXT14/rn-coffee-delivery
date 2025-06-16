import {
  Image,
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from 'react-native'

import type { Coffee } from '@/@types/coffee'

import { styles } from './styles'

type HighlightCardProps = TouchableOpacityProps & {
  coffee: Coffee
}

export function HighlightCard({ coffee, style, ...props }: HighlightCardProps) {
  const formattedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(coffee.price / 100)
    .replace('R$', '')

  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Image source={coffee.image} alt="coffee" style={styles.image} />

      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>{coffee.tags[0]}</Text>
      </View>

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
    </TouchableOpacity>
  )
}
