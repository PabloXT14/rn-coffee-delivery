import { useState } from 'react'
import { Text, View } from 'react-native'

import { Select } from '@/components/shared/select'
import { InputNumber } from '@/components/shared/input-number'
import { Button, ButtonText } from '@/components/shared/button'

import { styles } from './styles'

const OPTIONS = [
  { id: '1', label: '114ml' },
  { id: '2', label: '140ml' },
  { id: '3', label: '227ml' },
]

export function Footer() {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0])
  const [amount, setAmount] = useState(1)

  const handleSelectOption = (id: string) => {
    const option = OPTIONS.find(option => option.id === id)

    if (option) {
      setSelectedOption(option)
    }
  }

  const handleIncrementAmount = () => {
    setAmount(prevState => prevState + 1)
  }

  const handleDecrementAmount = () => {
    if (amount > 1) {
      setAmount(prevState => prevState - 1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.selection}>
        <Text style={styles.selectionTitle}>Selecione o tamanho:</Text>

        <View style={styles.options}>
          {OPTIONS.map(option => (
            <Select
              key={option.id}
              label={option.label}
              isSelected={selectedOption.id === option.id}
              onPress={() => handleSelectOption(option.id)}
              style={{ flex: 1 }}
            />
          ))}
        </View>
      </View>

      <View style={styles.addToCart}>
        <InputNumber
          value={amount}
          onIncrement={handleIncrementAmount}
          onDecrement={handleDecrementAmount}
        />

        <Button type="purple" style={{ flex: 1 }}>
          <ButtonText>Adicionar</ButtonText>
        </Button>
      </View>
    </View>
  )
}
