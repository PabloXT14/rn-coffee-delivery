import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    maxWidth: 168,
    width: '100%',
    backgroundColor: colors.gray[200],
    borderWidth: 1,
    borderColor: colors.gray[300],
    boxShadow: '0px 1.6px 6.4px rgba(0, 0, 0, 0.05)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
    paddingHorizontal: 12,
    paddingTop: 72,
    paddingBottom: 16,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 6,
  },
  image: {
    position: 'absolute',
    top: -10,
    width: 64,
    height: 64,
    objectFit: 'cover',
  },
  tagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: colors.purple[100],
    borderRadius: 80,
  },
  tagText: {
    color: colors.purple[500],
    fontSize: 8,
    fontFamily: fontFamily.roboto.bold,
    textTransform: 'uppercase',
  },
  info: {
    alignItems: 'center',
    gap: 4,
  },
  name: {
    color: colors.gray[800],
    fontSize: fontSize.sm,
    fontFamily: fontFamily.baloo2.bold,
  },
  description: {
    color: colors.gray[600],
    fontSize: fontSize.xxs,
    fontFamily: fontFamily.roboto.regular,
    lineHeight: 13,
    textAlign: 'center',
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
