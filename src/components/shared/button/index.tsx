import {
  Pressable,
  Text,
  type TextProps,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
  ActivityIndicator,
} from 'react-native'

import { styles } from './styles'

type ButtonProps = PressableProps & {
  type?: 'yellow' | 'purple'
  style?: StyleProp<ViewStyle>
  isLoading?: boolean
}

function Button({
  type = 'yellow',
  style,
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[type],
        pressed && styles[`${type}Focused`],
        style,
      ]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={styles.text.color} />
      ) : (
        children
      )}
    </Pressable>
  )
}

type ButtonTextProps = TextProps

function ButtonText({ style, ...props }: ButtonTextProps) {
  return <Text style={[styles.text, style]} {...props} />
}

export { Button, ButtonText }
