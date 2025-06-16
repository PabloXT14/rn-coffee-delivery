import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: colors.gray[900],
  },
  content: {
    position: 'relative',
    paddingTop: 20,
    paddingHorizontal: 32,
    paddingBottom: 140,
  },
  image: {
    position: 'absolute',
    right: 5,
    top: 142,
  },
  titleContainer: {
    gap: 16,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.xl,
    fontFamily: fontFamily.baloo2.bold,
    lineHeight: 26,
  },
})
