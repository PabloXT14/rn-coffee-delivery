import { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { router } from 'expo-router'
import Animated, { SlideInDown } from 'react-native-reanimated'

import { Tag } from '@/components/shared/tag'
import { CatalogCard } from '@/components/shared/catalog-card'

import { getCoffeeSections } from '@/http/get-coffee-sections'
import { COFFEES } from '@/data/coffees'

import { styles } from './styles'

const FILTERS = [
  { id: '1', name: 'Tradicionais' },
  { id: '2', name: 'Especiais' },
  { id: '3', name: 'Doces' },
  // { id: '4', name: 'Gelados' },
  // { id: '5', name: 'Alcoólicos' },
  // { id: '6', name: 'Com leite' },
  // { id: '7', name: 'Descafeinado' },
  // { id: '8', name: 'Com adição de açúcar' },
]

const COFFEE_SECTIONS = getCoffeeSections(COFFEES)

export function CoffeeList() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)

  const handleNavigation = (id: string) => {
    router.push(`/product/${id}`)
  }

  const handleFilterSelect = (filter: string) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null)
      return
    }

    setSelectedFilter(filter)
  }

  const filteredSections = selectedFilter
    ? COFFEE_SECTIONS.filter(section => {
        const hasFilter = section.title
          .toLowerCase()
          .includes(selectedFilter.toLowerCase())

        if (hasFilter) {
          return section
        }
      })
    : COFFEE_SECTIONS

  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.delay(1000)
        .duration(800)
        .stiffness(50)
        .damping(15)
        .mass(1)}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Nossos cafés</Text>

        <FlatList
          data={FILTERS}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Tag
              label={item.name}
              isSelected={selectedFilter === item.name}
              onPress={() => handleFilterSelect(item.name)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filter}
        />
      </View>

      <View style={styles.list}>
        {filteredSections.map((section, index) => (
          <View key={section.title} style={styles.sectionList}>
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {section.data.map(coffee => (
              <CatalogCard
                key={coffee.id}
                index={index}
                coffee={coffee}
                onPress={() => handleNavigation(coffee.id)}
              />
            ))}
          </View>
        ))}
      </View>
    </Animated.View>
  )
}
