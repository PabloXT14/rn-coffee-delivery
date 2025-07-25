import { StyleSheet, View, StatusBar } from 'react-native'

import { BackButton, Navbar, NavbarTitle } from '@/components/shared/navbar'
import { CartItems } from '@/components/screens/cart/cart-items'
import { Order } from '@/components/screens/cart/order'

import { colors } from '@/styles/colors'

export default function Cart() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.gray[100]} />

      <Navbar style={{ borderBottomWidth: 1, borderColor: colors.gray[300] }}>
        <BackButton variant="dark" />
        <NavbarTitle title="Carrinho" />
      </Navbar>

      <CartItems />

      <Order />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
})
