import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import {
  useFonts as useRoboto,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import {
  useFonts as useBaloo2,
  Baloo2_700Bold,
} from '@expo-google-fonts/baloo-2'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'

import { Button, ButtonText } from '@/components/shared/button'

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  const [baloo2Loaded] = useBaloo2({
    Baloo2_700Bold,
  })

  const fontsLoaded = robotoLoaded && baloo2Loaded

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading fonts...</Text>
        <ActivityIndicator size="large" color={colors.gray[100]} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Button style={{ marginBottom: 20 }}>
        <ButtonText>Label</ButtonText>
      </Button>

      <Button type="purple">
        <ButtonText>Label</ButtonText>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: fontSize.xl,
    fontFamily: fontFamily.roboto.bold,
    color: colors.gray[100],
  },
  loading: {
    fontSize: fontSize.xl,
    fontFamily: fontFamily.baloo2.bold,
    color: colors.gray[100],
    marginBottom: 20,
  },
})
