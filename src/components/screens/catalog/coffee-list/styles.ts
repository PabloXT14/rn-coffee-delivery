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
  list: {
    paddingTop: 16,
    paddingHorizontal: 32,
    paddingBottom: 64,
    gap: 48,
  },
  sectionList: {
    gap: 32,
  },
  sectionTitle: {
    color: colors.gray[600],
    fontSize: fontSize.sm,
    fontFamily: fontFamily.baloo2.bold,
    lineHeight: 20, // 130%
    textTransform: 'capitalize',
  },
})
