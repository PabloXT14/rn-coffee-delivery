import { COFFEES } from '@/data/coffees'

export async function getCoffeesByQuery(query: string) {
  return {
    coffees: COFFEES.filter(coffee =>
      coffee.name.toLowerCase().includes(query.toLowerCase())
    ),
  }
}
