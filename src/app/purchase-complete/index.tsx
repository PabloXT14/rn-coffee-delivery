import { StatusBar, StyleSheet, View } from 'react-native'

import { Content } from '@/components/screens/purchase-complete/content'

import { colors } from '@/styles/colors'

export default function PurchaseComplete() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.gray[100]} />

      <View style={styles.container}>
        <Content />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
})
