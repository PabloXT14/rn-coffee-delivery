import type { Coffee } from '@/@types/coffee'

export const COFFEES: Coffee[] = [
  {
    id: '1',
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    price: 990,
    image: require('@/assets/images/coffees/latte.png'),
    tags: ['tradicionais'],
  },
  {
    id: '2',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, leite e espuma',
    price: 990,
    image: require('@/assets/images/coffees/mochaccino.png'),
    tags: ['doces'],
  },
  {
    id: '3',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 990,
    image: require('@/assets/images/coffees/irlandes.png'),
    tags: ['especiais'],
  },
]
