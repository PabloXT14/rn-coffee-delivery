import { View, StyleSheet, ScrollView, StatusBar } from 'react-native'
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
import { IntroSection } from '@/components/screens/catalog/intro-section'
import { CarouselSection } from '@/components/screens/catalog/carousel-section'
import { CoffeeList } from '@/components/screens/catalog/coffee-list'

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
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.gray[900]}
        />

        <View style={styles.container}>
          <Loading size="large" />
        </View>
      </>
    )
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.gray[900]} />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <IntroSection />
        <CarouselSection />
        <CoffeeList />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
})
