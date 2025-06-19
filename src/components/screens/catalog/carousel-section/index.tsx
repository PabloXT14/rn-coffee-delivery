import { FlatList, View } from 'react-native'
import { router } from 'expo-router'

import { COFFEES } from '@/data/coffees'

import { HighlightCard } from '@/components/shared/highlight-card'

import { styles } from './styles'

const HIGHLIGHT_COFFEES = [
  COFFEES[0],
  COFFEES[Math.round(COFFEES.length / 2 - 1)],
  COFFEES[COFFEES.length - 1],
]

export function CarouselSection() {
  const handleNavigation = (id: string) => {
    router.push(`/product/${id}`)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={HIGHLIGHT_COFFEES}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <HighlightCard
            coffee={item}
            onPress={() => handleNavigation(item.id)}
            style={{
              transform: [{ scale: index === 0 ? 1.2 : 1 }],
              marginRight: index === 0 ? 24 : 0,
              marginLeft: index === 0 ? 24 : 0,
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </View>
  )
}
