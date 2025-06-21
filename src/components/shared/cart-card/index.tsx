import { Image, Text, View } from 'react-native'
import { Trash } from 'phosphor-react-native'

import { InputNumber } from '../input-number'
import { IconButton } from '../icon-button'

import type { CartItem } from '@/@types/coffee'

import { styles } from './styles'

type CartCardProps = {
  data: CartItem
}

export function CartCard({ data }: CartCardProps) {
  const formattedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(data.price / 100)

  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.image} />

      <View style={styles.info}>
        <View style={styles.about}>
          <View style={styles.titleContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {data.name}
            </Text>
            <Text style={styles.size}>{data.size}</Text>
          </View>

          <Text style={styles.price}>{formattedPrice}</Text>
        </View>

        <View style={styles.actions}>
          <View style={styles.counter}>
            <InputNumber
              value={data.quantity}
              onIncrement={data.onIncrement}
              onDecrement={data.onDecrement}
            />
          </View>

          <IconButton icon={Trash} type="remove" onPress={data.onDelete} />
        </View>
      </View>
    </View>
  )
}
