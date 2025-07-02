import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { router } from 'expo-router'

import type { Coffee } from '@/@types/coffee'

import { getCoffeesByQuery } from '@/http/get-coffees-by-query'

import { CatalogCard } from '@/components/shared/catalog-card'
import { ListEmpty } from '@/components/shared/list-empty'

import { styles } from './styles'

type SearchCoffeeListProps = {
  query: string
}

export function SearchCoffeeList({ query }: SearchCoffeeListProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  const fetchCoffees = async () => {
    const { coffees } = await getCoffeesByQuery(query)

    setCoffees(coffees)
  }

  const handleNavigation = (id: string) => {
    router.navigate(`/product/${id}`)
  }

  useEffect(() => {
    fetchCoffees()
  }, [query])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {coffees.length === 0 && <ListEmpty message="Nenhum item encontrado" />}

        {coffees.map(coffee => (
          <CatalogCard
            key={coffee.id}
            coffee={coffee}
            onPress={() => handleNavigation(coffee.id)}
          />
        ))}
      </View>
    </View>
  )
}
