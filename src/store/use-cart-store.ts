import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

import type { CartItem } from '@/@types/coffee'

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, size: string) => void
  updateQuantity: (id: string, size: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: item =>
        set(state => {
          const existingItem = get().items.find(
            existingItem =>
              existingItem.id === item.id && existingItem.size === item.size
          )

          if (existingItem) {
            return {
              items: get().items.map(existingItem => {
                if (
                  existingItem.id === item.id &&
                  existingItem.size === item.size
                ) {
                  return {
                    ...existingItem,
                    quantity: existingItem.quantity + item.quantity,
                  }
                }

                return existingItem
              }),
            }
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
          }
        }),
      removeItem: (id, size) =>
        set(state => {
          return {
            items: state.items.filter(
              item => !(item.id === id && item.size === size)
            ),
          }
        }),
      updateQuantity: (id, size, quantity) =>
        set(state => ({
          items: state.items.map(item => {
            if (item.id === id && item.size === size) {
              return { ...item, quantity }
            }

            return item
          }),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // name of the key in AsyncStorage
      storage: {
        getItem: async key => {
          const storage = await AsyncStorage.getItem(key)

          const items = storage ? JSON.parse(storage) : []

          return items
        },
        setItem: async (key, value) => {
          await AsyncStorage.setItem(key, JSON.stringify(value))
        },
        removeItem: async key => {
          await AsyncStorage.removeItem(key)
        },
      },
    }
  )
)
