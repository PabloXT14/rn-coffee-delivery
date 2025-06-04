import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  primary: {
    backgroundColor: 'transparent',
  },
  primaryFocused: {
    backgroundColor: colors.gray[300],
  },
  primaryIcon: {
    color: colors.purple[500],
  },
  primaryFocusedIcon: {
    color: colors.purple[600],
  },
  remove: {
    backgroundColor: colors.gray[400],
  },
  removeFocused: {
    backgroundColor: colors.gray[300],
  },
  removeIcon: {
    color: colors.purple[600],
  },
  removeFocusedIcon: {
    color: colors.purple[500],
  },
})
