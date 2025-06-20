import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'
import { fontSize } from '@/styles/font-size'
import { fontFamily } from '@/styles/font-family'

export const styles = StyleSheet.create({
  container: {
    padding: 32,
    paddingTop: 42,
    backgroundColor: colors.gray[100],
    gap: 20,
  },
  selection: {
    gap: 8,
  },
  selectionTitle: {
    color: colors.gray[600],
    fontSize: fontSize.sm,
    fontFamily: fontFamily.roboto.regular,
    lineHeight: 20,
  },
  options: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray[300],
    padding: 8,
    gap: 16,
    borderRadius: 6,
  },
})
