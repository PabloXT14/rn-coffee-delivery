import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

import { styles } from './styles'

type TagProps = TouchableOpacityProps & {
  label: string
  isSelected: boolean
}

export function Tag({ label, isSelected, style, ...props }: TagProps) {
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
