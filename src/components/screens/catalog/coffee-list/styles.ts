import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {},
  header: {
    gap: 12,
    paddingVertical: 16,
  },
  title: {
    paddingLeft: 32,
    color: colors.gray[700],
    fontSize: fontSize.md,
    fontFamily: fontFamily.baloo2.bold,
    lineHeight: 20, // 130%
  },
  filter: {
    gap: 8,
    paddingHorizontal: 32,
  },
})
