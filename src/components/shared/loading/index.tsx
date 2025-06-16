import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { colors } from '@/styles/colors'

type LoadingProps = {
  size?: 'small' | 'large'
  variant?: 'dark' | 'light'
}

export function Loading({ size = 'small', variant = 'dark' }: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={size}
        color={variant === 'dark' ? colors.gray[900] : colors.gray[100]}
      />
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
