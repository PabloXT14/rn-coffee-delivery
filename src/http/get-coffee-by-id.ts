import { COFFEES } from '@/data/coffees'

export function getCoffeeById(id: string) {
  const coffee = COFFEES.find(coffee => coffee.id === id)

  return {
    coffee,
  }
}
