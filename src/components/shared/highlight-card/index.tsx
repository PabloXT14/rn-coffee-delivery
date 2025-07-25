import { useEffect } from 'react'
import {
  Dimensions,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from 'react-native'
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  withSpring,
} from 'react-native-reanimated'

import type { Coffee } from '@/@types/coffee'

import { styles } from './styles'

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity)

type HighlightCardProps = TouchableOpacityProps & {
  index: number
  coffee: Coffee
  isFocused?: boolean
}

const SCREEN_WIDTH = Dimensions.get('screen').width
const INITIAL_DELAY = 500

export function HighlightCard({
  index,
  coffee,
  isFocused = false,
  style,
  ...props
}: HighlightCardProps) {
  const isCardFocused = useSharedValue(0)
  const translateX = useSharedValue(SCREEN_WIDTH) // começa fora da tela

  const cardEntryStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      paddingHorizontal: interpolate(isCardFocused.value, [0, 1], [12, 16]),
      paddingTop: interpolate(isCardFocused.value, [0, 1], [72, 96]),
      paddingBottom: interpolate(isCardFocused.value, [0, 1], [16, 20]),
      borderTopLeftRadius: interpolate(isCardFocused.value, [0, 1], [4, 6]),
      borderTopRightRadius: interpolate(isCardFocused.value, [0, 1], [28, 36]),
      borderBottomLeftRadius: interpolate(
        isCardFocused.value,
        [0, 1],
        [28, 36]
      ),
      borderBottomRightRadius: interpolate(isCardFocused.value, [0, 1], [4, 6]),
      maxWidth: interpolate(isCardFocused.value, [0, 1], [166, 208]),
      gap: interpolate(isCardFocused.value, [0, 1], [12, 14]),
    }
  })

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(isCardFocused.value, [0, 1], [64, 115]),
      height: interpolate(isCardFocused.value, [0, 1], [64, 115]),
      top: interpolate(isCardFocused.value, [0, 1], [-10, -25]),
    }
  })

  const tagContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      paddingHorizontal: interpolate(isCardFocused.value, [0, 1], [6, 8]),
      paddingVertical: interpolate(isCardFocused.value, [0, 1], [3, 4]),
      borderRadius: interpolate(isCardFocused.value, [0, 1], [80, 100]),
    }
  })

  const tagTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(isCardFocused.value, [0, 1], [8, 10]),
      lineHeight: interpolate(isCardFocused.value, [0, 1], [12, 14]),
    }
  })

  const nameAnimatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(isCardFocused.value, [0, 1], [14, 20]),
      lineHeight: interpolate(isCardFocused.value, [0, 1], [20, 26]),
    }
  })

  const descriptionAnimatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(isCardFocused.value, [0, 1], [10, 12]),
      lineHeight: interpolate(isCardFocused.value, [0, 1], [13, 16]),
    }
  })

  const currencyAnimatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(isCardFocused.value, [0, 1], [10, 14]),
      lineHeight: interpolate(isCardFocused.value, [0, 1], [13, 18]),
    }
  })

  const priceAnimatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(isCardFocused.value, [0, 1], [20, 24]),
      lineHeight: interpolate(isCardFocused.value, [0, 1], [26, 32]),
    }
  })

  /* ======================================================= */

  const formattedPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(coffee.price / 100)
    .replace('R$', '')

  useEffect(() => {
    const delay = INITIAL_DELAY + index * 150

    const timeout = setTimeout(() => {
      translateX.value = withSpring(0, {
        damping: 15,
        mass: 1,
        stiffness: 50,
      })
    }, delay)

    return () => clearTimeout(timeout)
  }, [])

  // Update scale when focused
  useEffect(() => {
    isCardFocused.value = withTiming(isFocused ? 1 : 0, {
      duration: 200,
      easing: Easing.linear,
    })
  }, [isFocused])

  return (
    <TouchableOpacityAnimated
      // entering={SlideInRight.delay(INITIAL_DELAY + index * 150)
      //   .duration(800)
      //   .stiffness(50)
      //   .damping(15)
      //   .mass(1)}
      style={[styles.container, cardEntryStyle, containerAnimatedStyle, style]}
      activeOpacity={1}
      {...props}
    >
      <Animated.Image
        source={coffee.image}
        alt="coffee"
        style={[styles.image, imageAnimatedStyle]}
      />

      <Animated.View style={[styles.tagContainer, tagContainerAnimatedStyle]}>
        <Animated.Text style={[styles.tagText, tagTextAnimatedStyle]}>
          {coffee.tags[0]}
        </Animated.Text>
      </Animated.View>

      <View style={styles.info}>
        <Animated.Text
          style={[styles.name, nameAnimatedStyle]}
          numberOfLines={1}
        >
          {coffee.name}
        </Animated.Text>

        <Animated.Text
          style={[styles.description, descriptionAnimatedStyle]}
          numberOfLines={2}
        >
          {coffee.description}
        </Animated.Text>
      </View>

      <View style={styles.priceContainer}>
        <Animated.Text style={[styles.currency, currencyAnimatedStyle]}>
          R$
        </Animated.Text>
        <Animated.Text style={[styles.price, priceAnimatedStyle]}>
          {formattedPrice}
        </Animated.Text>
      </View>
    </TouchableOpacityAnimated>
  )
}
