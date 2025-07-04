import { useState } from 'react'
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
import { SearchCoffeeList } from '@/components/screens/catalog/search-coffee-list'

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  const [baloo2Loaded] = useBaloo2({
    Baloo2_700Bold,
  })

  const fontsLoaded = robotoLoaded && baloo2Loaded

  const [search, setSearch] = useState('')

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.gray[900]}
        />
        <Loading size="large" />
      </View>
    )
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.gray[900]} />

      <IntroSection search={search} setSearch={setSearch} />

      {search ? (
        <SearchCoffeeList query={search} />
      ) : (
        <>
          <CarouselSection />
          <CoffeeList />
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
})
