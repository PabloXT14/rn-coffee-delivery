import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 32,
    paddingTop: 28,
    paddingBottom: 40,
    boxShadow: '0px -2px 16px rgba(0, 0, 0, 0.08)',
    gap: 20,
  },
  info: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    color: colors.gray[800],
    fontSize: fontSize.md,
    fontFamily: fontFamily.roboto.regular,
    lineHeight: 20,
  },
  price: {
    color: colors.gray[800],
    fontSize: fontSize.xl,
    fontFamily: fontFamily.baloo2.bold,
    lineHeight: 26,
  },
})
