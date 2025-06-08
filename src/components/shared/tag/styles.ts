import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
    gap: 8,
    borderWidth: 1,
    borderColor: colors.purple[500],
    backgroundColor: 'transparent',
  },
  selected: {
    backgroundColor: colors.purple[500],
  },
  label: {
    color: colors.purple[600],
    fontSize: fontSize.xxs,
    fontFamily: fontFamily.roboto.bold,
    lineHeight: 13,
    textTransform: 'uppercase',
  },
  selectedLabel: {
    color: colors.white,
  },
})
