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
import { HighlightCard } from '@/components/shared/highlight-card'

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
        horizontal
        data={COFFEES}
        renderItem={({ item }) => <HighlightCard coffee={item} />}
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
  itemsContainer: {
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 32,
  },
})
