import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { colors } from '@/styles/colors'

type LoadingProps = {
  size?: 'small' | 'large'
}

export function Loading({ size = 'small' }: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={colors.gray[100]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
