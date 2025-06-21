import { Text, View } from 'react-native'

import { Button, ButtonText } from '@/components/shared/button'

import { styles } from './styles'

export function Order() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoText}>Valor total</Text>
        <Text style={styles.price}>R$ 29,70</Text>
      </View>

      <Button type="yellow">
        <ButtonText>Confirmar pedido</ButtonText>
      </Button>
    </View>
  )
}
