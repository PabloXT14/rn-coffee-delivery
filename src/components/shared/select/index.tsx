import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

import { styles } from './styles'

type SelectProps = TouchableOpacityProps & {
  label: string
  isSelected: boolean
}

export function Select({ label, isSelected, style, ...props }: SelectProps) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected, style]}
      {...props}
    >
      <Text style={[styles.label, isSelected && styles.selectedLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
