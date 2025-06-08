import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    paddingHorizontal: 12,
    backgroundColor: colors.gray[800],
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  field: {
    flex: 1,
    color: colors.gray[300],
    fontSize: fontSize.sm,
    fontFamily: fontFamily.roboto.regular,
  },
  placeholder: {
    color: colors.gray[600],
    fontSize: fontSize.sm,
    fontFamily: fontFamily.roboto.regular,
  },
  iconDefault: {
    color: colors.gray[600],
  },
  iconActive: {
    color: colors.yellow[500],
  },
  iconFilled: {
    color: colors.yellow[600],
  },
})
