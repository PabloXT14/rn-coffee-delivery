import { create } from 'zustand'

import type { CartItem } from '@/@types/coffee'

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, size: string) => void
  updateQuantity: (id: string, size: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>(set => ({
  items: [],
  addItem: item =>
    set(state => {
      const existingItem = state.items.find(
        existingItem =>
          existingItem.id === item.id && existingItem.size === item.size
      )

      if (existingItem) {
        return {
          items: state.items.map(existingItem => {
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
}))
