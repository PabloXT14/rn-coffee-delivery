import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import { Navbar, BackButton } from '@/components/shared/navbar'
import { CartIndicator } from '@/components/shared/cart-indicator'
import { Loading } from '@/components/shared/loading'
import { Content } from '@/components/screens/product/content'

import { colors } from '@/styles/colors'

import { getCoffeeById } from '@/http/get-coffee-by-id'

import type { Coffee } from '@/@types/coffee'
import { Footer } from '@/components/screens/product/footer'

export default function Product() {
  const { id } = useLocalSearchParams()

  const [coffee, setCoffee] = useState<Coffee | null>(null)

  console.log('Product ID:', id)

  useEffect(() => {
    const fetchCoffee = async () => {
      const { coffee } = await getCoffeeById(id as string)
      setCoffee(coffee || null)
    }

    fetchCoffee()
  }, [id])

  if (!coffee) {
    return (
      <View style={styles.container}>
        <Loading size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Navbar>
        <BackButton />
        <CartIndicator />
      </Navbar>

      <Content coffee={coffee} />

      <Footer coffee={coffee} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
  },
})
