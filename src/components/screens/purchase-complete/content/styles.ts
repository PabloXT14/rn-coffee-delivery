import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: 270,
    marginBottom: 40,
  },
  info: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 64,
  },
  title: {
    color: colors.yellow[600],
    fontFamily: fontFamily.baloo2.bold,
    fontSize: fontSize['2xl'],
    lineHeight: 32, // 130% de 24
    width: 290,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.gray[800],
    fontFamily: fontFamily.roboto.regular,
    fontSize: fontSize.sm,
    lineHeight: 18, // 130% de 14
    width: 260,
    textAlign: 'center',
  },
})
