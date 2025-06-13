import { colors } from '@/styles/colors'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.gray[900]} />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  )
}
