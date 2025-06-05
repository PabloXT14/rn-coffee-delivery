import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    color: colors.yellow[600],
  },
  full: {
    color: colors.purple[500],
  },
  counter: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: colors.purple[500],
    width: 20,
    height: 20,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    color: colors.white,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.roboto.regular,
  },
})
