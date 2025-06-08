import { useState } from 'react'
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
import { Tag } from '@/components/shared/tag'

const ITEMS = ['Tag 1', 'Tag 2', 'Tag 3']

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  const [baloo2Loaded] = useBaloo2({
    Baloo2_700Bold,
  })

  const fontsLoaded = robotoLoaded && baloo2Loaded

  const [selectedItem, setSelectedItem] = useState(ITEMS[0])

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Loading size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        {ITEMS.map(item => (
          <Tag
            key={item}
            label={item}
            isSelected={item === selectedItem}
            onPress={() => setSelectedItem(item)}
          />
        ))}
      </View>
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
    maxWidth: 100,
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
})
