import { type ReactNode, useState } from 'react'
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native'
import type { Icon } from 'phosphor-react-native'

import { styles } from './styles'

type IconButtonProps = PressableProps & {
  type?: 'primary' | 'remove'
  style?: StyleProp<ViewStyle>
  icon: Icon
  children?: ReactNode
}

export function IconButton({
  type = 'primary',
  style,
  icon: Icon,
  children,
  ...props
}: IconButtonProps) {
  const [isFocused, setIsFocused] = useState(false)

  const iconColor = isFocused
    ? styles[`${type}FocusedIcon`].color
    : styles[`${type}Icon`].color

  return (
    <Pressable
      onPressIn={() => setIsFocused(true)}
      onPressOut={() => setIsFocused(false)}
      style={[
        styles.container,
        styles[type],
        isFocused && styles[`${type}Focused`],
        style,
      ]}
      {...props}
    >
      <Icon size={20} weight="bold" color={iconColor} />
      {children}
    </Pressable>
  )
}
