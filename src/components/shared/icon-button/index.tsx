import { type ReactNode, useState } from 'react'
import {
  ActivityIndicator,
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
  isLoading?: boolean
}

export function IconButton({
  type = 'primary',
  style,
  icon: Icon,
  children,
  isLoading = false,
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
      {isLoading ? (
        <ActivityIndicator size="small" color={iconColor} />
      ) : (
        <>
          <Icon size={20} weight="bold" color={iconColor} />
          {children}
        </>
      )}
    </Pressable>
  )
}
