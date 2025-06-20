import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
  info: {
    width: '100%',
    gap: 20,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 2,
  },
  description: {
    color: colors.gray[500],
    fontSize: fontSize.md,
    fontFamily: fontFamily.roboto.regular,
  },
  title: {
    flex: 1,
    alignItems: 'flex-start',
    gap: 12,
  },
  name: {
    color: colors.white,
    fontSize: fontSize['2xl'],
    fontFamily: fontFamily.baloo2.bold,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currency: {
    color: colors.yellow[600],
    fontSize: fontSize.sm,
    fontFamily: fontFamily.roboto.regular,
    lineHeight: 18,
  },
  price: {
    color: colors.yellow[600],
    fontSize: fontSize['5xl'],
    fontFamily: fontFamily.baloo2.bold,
    lineHeight: 47,
  },
  illustration: {
    position: 'relative',
    alignItems: 'center',
    zIndex: 1,
    width: 295,
    height: 'auto',
    marginHorizontal: 'auto',
    marginTop: 140,
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  smoke: {
    zIndex: 2,
    position: 'absolute',
    maxWidth: 80,
    marginTop: -128,
  },
})
