import { router } from 'expo-router'
import { Text, View } from 'react-native'

import { Button, ButtonText } from '@/components/shared/button'

import Scooter from '@/assets/illustration/scooter.svg'

import { styles } from './styles'

export function Content() {
  function handleGoToHome() {
    router.replace('/')
  }

  return (
    <View style={styles.container}>
      <Scooter style={styles.illustration} />

      <View style={styles.info}>
        <Text style={styles.title}>Uhu! Pedido confirmado</Text>
        <Text style={styles.subtitle}>
          Agora é só aguardar que logo o café chegará até você!
        </Text>
      </View>

      <Button style={{ width: 270 }} onPress={handleGoToHome}>
        <ButtonText>Ir para Home</ButtonText>
      </Button>
    </View>
  )
}
