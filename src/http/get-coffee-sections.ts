import type { Coffee } from '@/@types/coffee'

type CoffeeSection = {
  title: string
  data: Coffee[]
}

export function getCoffeeSections(coffees: Coffee[]): CoffeeSection[] {
  const sectionMap = new Map<string, Coffee[]>()

  // biome-ignore lint/complexity/noForEach: <explanation>
  coffees.forEach(coffee => {
    // biome-ignore lint/complexity/noForEach: <explanation>
    coffee.tags.forEach(tag => {
      const tagLower = tag.toLowerCase()

      if (!sectionMap.has(tagLower)) {
        sectionMap.set(tagLower, [])
      }

      sectionMap.get(tagLower)?.push(coffee)
    })
  })

  return Array.from(sectionMap.entries()).map(([title, data]) => ({
    title,
    data,
  })) // [[title, data], ...]
}
