import { StyleSheet, Text, View } from 'react-native'

import { colors } from '@/styles/colors'

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[300],
  },
})
