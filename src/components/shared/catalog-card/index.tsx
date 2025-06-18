import {
  Image,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from 'react-native'

import type { Coffee } from '@/@types/coffee'

import { styles } from './styles'

type CatalogCardProps = TouchableOpacityProps & {
  coffee: Coffee
}

export function CatalogCard({ coffee, ...props }: CatalogCardProps) {
  const formattedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(coffee.price / 100)
    .replace('R$', '')

  return (
    <TouchableOpacity style={styles.container} {...props}>
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
    </TouchableOpacity>
  )
}
