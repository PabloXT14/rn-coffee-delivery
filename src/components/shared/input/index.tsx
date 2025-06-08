import {
  TextInput,
  type TextInputProps,
  View,
  type ViewProps,
} from 'react-native'
import { type Icon, MagnifyingGlass } from 'phosphor-react-native'

import { styles } from './styles'

type InputProps = ViewProps

function Input({ ...props }: InputProps) {
  return <View style={styles.container} {...props} />
}

type InputFieldProps = TextInputProps

function InputField({ ...props }: InputFieldProps) {
  return (
    <TextInput
      style={styles.field}
      placeholderTextColor={styles.placeholder.color}
      cursorColor={styles.placeholder.color}
      {...props}
    />
  )
}

type InputIconProps = ViewProps & {
  variant?: 'default' | 'active' | 'filled'
  icon?: Icon
}

function InputIcon({
  variant = 'default',
  icon: Icon = MagnifyingGlass,
  ...props
}: InputIconProps) {
  const iconColors = {
    default: styles.iconDefault.color,
    active: styles.iconActive.color,
    filled: styles.iconFilled.color,
  }

  return (
    <View {...props}>
      <Icon size={20} color={iconColors[variant]} />
    </View>
  )
}

export { Input, InputField, InputIcon }
