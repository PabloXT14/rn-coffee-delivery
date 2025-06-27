import { create } from 'zustand'

import type { CartItem } from '@/@types/coffee'

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>(set => ({
  items: [],
  addItem: item => set(state => ({ items: [...state.items, item] })),
  removeItem: id =>
    set(state => ({
      items: state.items.filter(item => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set(state => ({
      items: state.items.map(item => {
        if (item.id === id) {
          return { ...item, quantity }
        }

        return item
      }),
    })),
  clearCart: () => set({ items: [] }),
}))
