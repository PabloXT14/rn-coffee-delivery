import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { fontSize } from '@/styles/font-size'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: colors.gray[100],
    borderBottomWidth: 1,
    borderColor: colors.gray[300],
  },
  image: {
    width: 64,
    height: 64,
    objectFit: 'contain',
  },
  info: {
    flex: 1,
    gap: 8,
  },
  about: {
    flexGrow: 1,
    flexDirection: 'row',
    gap: 8,
  },
  titleContainer: {
    flex: 1,
    gap: 2,
  },
  name: {
    color: colors.gray[900],
    fontSize: fontSize.md,
    fontFamily: fontFamily.roboto.regular,
    lineHeight: 20,
  },
  size: {
    color: colors.gray[600],
    fontSize: fontSize.sm,
    fontFamily: fontFamily.roboto.regular,
    lineHeight: 18,
  },
  price: {
    color: colors.gray[900],
    fontSize: fontSize.md,
    fontFamily: fontFamily.baloo2.bold,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  counter: {
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 6,
  },
})
