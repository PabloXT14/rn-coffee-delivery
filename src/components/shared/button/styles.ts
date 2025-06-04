import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 46,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.roboto.bold,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  yellow: {
    backgroundColor: colors.yellow[600],
  },
  yellowFocused: {
    backgroundColor: colors.yellow[500],
  },
  purple: {
    backgroundColor: colors.purple[600],
  },
  purpleFocused: {
    backgroundColor: colors.purple[500],
  },
})
