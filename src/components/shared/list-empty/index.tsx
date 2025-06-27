import { Text, View, type ViewProps } from 'react-native'

import { styles } from './styles'

type ListEmptyProps = ViewProps & {
  message: string
}

export function ListEmpty({ message, style, ...props }: ListEmptyProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}
