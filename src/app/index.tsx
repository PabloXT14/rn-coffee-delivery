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
import { Alarm } from 'phosphor-react-native'

import { colors } from '@/styles/colors'

import { Loading } from '@/components/shared/loading'
import { Input, InputField, InputIcon } from '@/components/shared/input'

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  const [baloo2Loaded] = useBaloo2({
    Baloo2_700Bold,
  })

  const fontsLoaded = robotoLoaded && baloo2Loaded

  const [inputValue, setInputValue] = useState('')

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Loading size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Input>
        <InputIcon variant={inputValue ? 'filled' : 'default'} />
        <InputField placeholder="Pesquisar" onChangeText={setInputValue} />
      </Input>
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
