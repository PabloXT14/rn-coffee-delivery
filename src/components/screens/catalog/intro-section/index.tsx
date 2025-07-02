import { useState } from 'react'
import { Image, Text, View } from 'react-native'

import { CartIndicator } from '@/components/shared/cart-indicator'
import { Location, Navbar } from '@/components/shared/navbar'
import { Input, InputField, InputIcon } from '@/components/shared/input'

import bgIntroSection from '@/assets/images/bg-intro-section.png'

import { styles } from './styles'

type IntroSectionProps = {
  search: string
  setSearch: (value: string) => void
}

export function IntroSection({ search, setSearch }: IntroSectionProps) {
  return (
    <View style={styles.container}>
      <Navbar>
        <Location />

        <CartIndicator />
      </Navbar>

      <View style={styles.content}>
        <Image
          source={bgIntroSection}
          alt="coffee beans"
          style={styles.image}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Encontre o café perfeito para qualquer hora do dia
          </Text>

          <Input>
            <InputIcon variant={search ? 'filled' : 'default'} />
            <InputField
              placeholder="Pesquisar"
              value={search}
              onChangeText={setSearch}
            />
          </Input>
        </View>
      </View>
    </View>
  )
}
