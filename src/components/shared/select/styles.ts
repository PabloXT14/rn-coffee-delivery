import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: colors.gray[300],
  },
  selected: {
    borderColor: colors.purple[500],
    backgroundColor: 'transparent',
  },
  label: {
    color: colors.gray[700],
    fontSize: fontSize.sm,
    fontFamily: fontFamily.roboto.regular,
    lineHeight: 20,
  },
  selectedLabel: {
    color: colors.purple[500],
    fontFamily: fontFamily.roboto.bold,
  },
})
