import { View, StyleSheet } from 'react-native'
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

import { Loading } from '@/components/shared/loading'
import {
  BackButton,
  Location,
  Navbar,
  NavbarTitle,
} from '@/components/shared/navbar'
import { CartIndicator } from '@/components/shared/cart-indicator'

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
        <Loading size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Navbar>
          <Location />

          <CartIndicator itemsCount={0} />
        </Navbar>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  intro: {
    backgroundColor: colors.gray[900],
  },
})
