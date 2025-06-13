import {
  Text,
  type TextProps,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
  type ViewProps,
} from 'react-native'
import { ArrowLeft, MapPin } from 'phosphor-react-native'

import { colors } from '@/styles/colors'

import { styles } from './styles'

type NavbarProps = ViewProps

function Navbar({ style, ...props }: NavbarProps) {
  return <View style={[styles.container, style]} {...props} />
}

function Location() {
  return (
    <View style={styles.locationContainer}>
      <MapPin size={20} weight="fill" color={colors.purple[500]} />
      <Text style={styles.locationText}>Porto Alegre, RS</Text>
    </View>
  )
}

type BackButtonProps = TouchableOpacityProps & {
  variant?: 'light' | 'dark'
}

function BackButton({ variant = 'light', ...props }: BackButtonProps) {
  return (
    <TouchableOpacity style={styles.backButton} {...props}>
      <ArrowLeft
        size={24}
        color={variant === 'light' ? colors.white : colors.gray[900]}
      />
    </TouchableOpacity>
  )
}

type NavbarTitleProps = TextProps & {
  title: string
}

function NavbarTitle({ title, style, ...props }: NavbarTitleProps) {
  return (
    <Text style={[styles.title, style]} {...props}>
      {title}
    </Text>
  )
}

export { Navbar, Location, BackButton, NavbarTitle }
