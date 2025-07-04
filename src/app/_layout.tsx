import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '@/styles/colors'

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray[900] }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="product/[id]" />
        {/* <Stack.Screen name="not-found" /> */}
      </Stack>
    </SafeAreaView>
  )
}
