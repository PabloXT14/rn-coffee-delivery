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

export function HighlightCard({ coffee, ...props }: HighlightCardProps) {
  const formattedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(coffee.price / 100)
    .replace('R$', '')

  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Image source={coffee.image} alt="coffee" style={styles.image} />

      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>{coffee.tags[0]}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{coffee.name}</Text>
        <Text style={styles.description}>{coffee.description}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.currency}>R$</Text>
        <Text style={styles.price}>{formattedPrice}</Text>
      </View>
    </TouchableOpacity>
  )
}
