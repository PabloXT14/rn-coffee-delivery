import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'visible',
    width: '100%',
    backgroundColor: colors.gray[200],
    borderWidth: 1,
    borderColor: colors.gray[300],
    boxShadow: '0px 1.6px 6.4px rgba(0, 0, 0, 0.05)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    position: 'absolute',
    zIndex: 10,
  },
  tagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple[100],
  },
  tagText: {
    color: colors.purple[500],
    fontFamily: fontFamily.roboto.bold,
    textTransform: 'uppercase',
  },
  info: {
    alignItems: 'center',
    gap: 4,
  },
  name: {
    color: colors.gray[800],
    fontFamily: fontFamily.baloo2.bold,
  },
  description: {
    color: colors.gray[600],
    fontFamily: fontFamily.roboto.regular,
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currency: {
    color: colors.yellow[600],
    fontFamily: fontFamily.roboto.regular,
  },
  price: {
    color: colors.yellow[600],
    fontFamily: fontFamily.baloo2.bold,
  },
})
