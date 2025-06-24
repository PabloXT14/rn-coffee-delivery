import { Text, View } from 'react-native'
import { router } from 'expo-router'

import { Button, ButtonText } from '@/components/shared/button'

import { styles } from './styles'

export function Order() {
  const handleGoToPurchaseComplete = () => {
    router.navigate('/purchase-complete')
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoText}>Valor total</Text>
        <Text style={styles.price}>R$ 29,70</Text>
      </View>

      <Button type="yellow" onPress={handleGoToPurchaseComplete}>
        <ButtonText>Confirmar pedido</ButtonText>
      </Button>
    </View>
  )
}
