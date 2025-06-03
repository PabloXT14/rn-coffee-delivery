import {
  Pressable,
  Text,
  type TextProps,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native'

import { styles } from './styles'

type ButtonProps = PressableProps & {
  type?: 'yellow' | 'purple'
  style?: StyleProp<ViewStyle>
}

function Button({ type = 'yellow', style, ...props }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[type],
        pressed && styles[`${type}Focused`],
        style,
      ]}
      {...props}
    />
  )
}

type ButtonTextProps = TextProps

function ButtonText({ style, ...props }: ButtonTextProps) {
  return <Text style={[styles.text, style]} {...props} />
}

export { Button, ButtonText }
