import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    color: colors.gray[900],
    fontSize: fontSize.md,
    fontFamily: fontFamily.roboto.regular,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    gap: 8,
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  buttonPressed: {
    backgroundColor: colors.gray[300],
  },
  icon: {
    color: colors.purple[500],
  },
  iconPressed: {
    color: colors.purple[600],
  },
})
