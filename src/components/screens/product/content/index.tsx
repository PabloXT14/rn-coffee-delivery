import { Image, Text, View } from 'react-native'

import type { Coffee } from '@/@types/coffee'

import { Tag } from '@/components/shared/tag'

import coffeeIllustration from '@/assets/illustration/coffee-illustration.png'
import SmokeImg from '@/assets/illustration/smoke/smoke-03.svg'

import { colors } from '@/styles/colors'

import { styles } from './styles'

type ContentProps = {
  coffee: Coffee
}

export function Content({ coffee }: ContentProps) {
  const formattedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(coffee.price / 100)
    .replace('R$', '')

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.main}>
          <View style={styles.title}>
            <Tag
              label={coffee.tags[0]}
              isSelected
              style={{
                backgroundColor: colors.gray[800],
                borderColor: colors.gray[800],
              }}
            />

            <Text style={styles.name}>{coffee.name}</Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.currency}>R$</Text>
            <Text style={styles.price}>{formattedPrice}</Text>
          </View>
        </View>

        <Text style={styles.description}>{coffee.description}</Text>
      </View>

      <View style={styles.illustration}>
        <SmokeImg style={styles.smoke} />

        <Image
          source={coffeeIllustration}
          alt="coffee-illustration"
          style={styles.image}
        />
      </View>
    </View>
  )
}
