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
import { InputNumber } from '@/components/shared/input-number'

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  const [baloo2Loaded] = useBaloo2({
    Baloo2_700Bold,
  })

  const fontsLoaded = robotoLoaded && baloo2Loaded

  const [inputValue, setInputValue] = useState(1)

  function handleDecrement() {
    if (inputValue > 1) {
      setInputValue(inputValue - 1)
    }

    return
  }

  function handleIncrement() {
    setInputValue(inputValue + 1)
  }

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Loading size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <InputNumber
        value={inputValue}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
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
    maxWidth: 100,
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
})
