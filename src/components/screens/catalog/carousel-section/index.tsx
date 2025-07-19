import { useRef, useState } from 'react'
import { FlatList, type ViewToken } from 'react-native'
import { router } from 'expo-router'
import Animated, { SlideInRight } from 'react-native-reanimated'

import { COFFEES } from '@/data/coffees'

import { HighlightCard } from '@/components/shared/highlight-card'

import { styles } from './styles'

const HIGHLIGHT_COFFEES = [
  COFFEES[0],
  COFFEES[Math.round(COFFEES.length / 2 - 1)],
  COFFEES[COFFEES.length - 1],
]

export function CarouselSection() {
  const [focusedItemId, setFocusedItemId] = useState<string | null>(null)

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 70, // define quanto do item deve estar visível para ser considerado "visível"
  }

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setFocusedItemId(viewableItems[0].item.id) // você pode usar lógica diferente para definir o item central
      }
    }
  ).current

  const handleNavigation = (id: string) => {
    router.push(`/product/${id}`)
  }

  return (
    <Animated.View
      style={styles.container}
      entering={SlideInRight.delay(100)
        .duration(800)
        .stiffness(50)
        .damping(15)
        .mass(1)}
    >
      <FlatList
        data={HIGHLIGHT_COFFEES}
        keyExtractor={item => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => {
          const isFocused = item.id === focusedItemId

          return (
            <HighlightCard
              coffee={item}
              onPress={() => handleNavigation(item.id)}
              isFocused={isFocused}
            />
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          overflow: 'visible', // permite que os cartões se sobreponham
        }}
        contentContainerStyle={styles.content}
      />
    </Animated.View>
  )
}
