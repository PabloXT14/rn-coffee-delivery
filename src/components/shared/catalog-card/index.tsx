import { Image, Text, TouchableOpacity, View } from 'react-native'

import type { Coffee } from '@/@types/coffee'

import { styles } from './styles'

type CatalogCardProps = {
  coffee: Coffee
}

export function CatalogCard({ coffee }: CatalogCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
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
          <Text style={styles.price}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
              .format(coffee.price / 100)
              .replace('R$', '')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
