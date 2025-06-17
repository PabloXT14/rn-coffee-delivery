import { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

import { styles } from './styles'
import { Tag } from '@/components/shared/tag'

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

export function CoffeeList() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)

  const handleFilterSelect = (filterId: string) => {
    setSelectedFilter(filterId)
  }

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Nossos cafés</Text>

        <FlatList
          data={FILTERS}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Tag
              label={item.name}
              isSelected={selectedFilter === item.id}
              onPress={() => handleFilterSelect(item.id)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filter}
        />
      </View>
    </View>
  )
}
