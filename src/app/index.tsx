import { View, StyleSheet, FlatList } from 'react-native'
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
import { CatalogCard } from '@/components/shared/catalog-card'

import { COFFEES } from '@/data/coffees'

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
      <FlatList
        data={COFFEES}
        renderItem={({ item }) => <CatalogCard coffee={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.itemsContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    padding: 16,
    gap: 16,
  },
  itemsContainer: {
    gap: 32,
    paddingTop: 32,
    paddingBottom: 32,
  },
})
