import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: colors.gray[800],
    fontFamily: fontFamily.roboto.regular,
    fontSize: fontSize.sm,
    lineHeight: 18, // 130% de 14
    textAlign: 'center',
  },
})
