import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[200],
    borderWidth: 1,
    borderColor: colors.gray[300],
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
    padding: 16,
    paddingLeft: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 6,
  },
  image: {
    width: 96,
    height: 96,
    objectFit: 'cover',
    marginTop: -64,
  },
  content: {
    flex: 1,
    gap: 8,
  },
  info: {
    gap: 4,
  },
  name: {
    color: colors.gray[800],
    fontSize: fontSize.md,
    fontFamily: fontFamily.baloo2.bold,
    lineHeight: 22,
  },
  description: {
    color: colors.gray[600],
    fontSize: fontSize.xs,
    fontFamily: fontFamily.roboto.regular,
    lineHeight: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    color: colors.yellow[600],
    fontSize: fontSize.xl,
    fontFamily: fontFamily.baloo2.bold,
    lineHeight: 26, // 130% de 20
  },
  currency: {
    color: colors.yellow[600],
    fontSize: fontSize.xxs,
    fontFamily: fontFamily.roboto.regular,
    lineHeight: 13,
  },
})
