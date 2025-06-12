import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Minus, Plus } from 'phosphor-react-native'

import { styles } from './styles'

type InputNumberProps = {
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

export function InputNumber({
  value,
  onIncrement,
  onDecrement,
}: InputNumberProps) {
  const [pressedDecrement, setPressedDecrement] = useState(false)
  const [pressedIncrement, setPressedIncrement] = useState(false)

  return (
    <View style={styles.container}>
      <Pressable
        onPressIn={() => setPressedDecrement(true)}
        onPressOut={() => setPressedDecrement(false)}
        onPress={onDecrement}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Minus
          size={20}
          weight="bold"
          color={
            pressedDecrement ? styles.iconPressed.color : styles.icon.color
          }
        />
      </Pressable>

      <Text style={styles.text}>{value}</Text>

      <Pressable
        onPressIn={() => setPressedIncrement(true)}
        onPressOut={() => setPressedIncrement(false)}
        onPress={onIncrement}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Plus
          size={20}
          weight="bold"
          color={
            pressedIncrement ? styles.iconPressed.color : styles.icon.color
          }
        />
      </Pressable>
    </View>
  )
}
