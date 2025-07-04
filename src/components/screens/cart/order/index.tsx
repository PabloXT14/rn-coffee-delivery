import { Text, View } from 'react-native'
import { router } from 'expo-router'

import { Button, ButtonText } from '@/components/shared/button'

import { useCartStore } from '@/store/use-cart-store'

import { styles } from './styles'

export function Order() {
  const items = useCartStore(state => state.items)
  const cleanCart = useCartStore(state => state.clearCart)

  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const totalPriceFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice / 100)

  const handleGoToPurchaseComplete = () => {
    if (items.length === 0) {
      return
    }

    router.navigate('/purchase-complete')
    cleanCart()
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoText}>Valor total</Text>
        <Text style={styles.price}>{totalPriceFormatted}</Text>
      </View>

      <Button type="yellow" onPress={handleGoToPurchaseComplete}>
        <ButtonText>Confirmar pedido</ButtonText>
      </Button>
    </View>
  )
}
