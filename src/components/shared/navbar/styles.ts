import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'
import { fontSize } from '@/styles/font-size'
import { fontFamily } from '@/styles/font-family'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    paddingHorizontal: 32,
    paddingVertical: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    color: colors.gray[100],
    fontSize: fontSize.sm,
    fontFamily: fontFamily.roboto.regular,
    lineHeight: 20,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    left: '50%',
    color: colors.gray[800],
    fontSize: fontSize.md,
    fontFamily: fontFamily.baloo2.bold,
    lineHeight: 20,
  },
})
