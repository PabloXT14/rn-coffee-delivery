import { randomUUID } from 'expo-crypto'

import type { Coffee } from '@/@types/coffee'

export const COFFEES: Coffee[] = [
  {
    id: randomUUID(),
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    price: 990,
    image: require('@/assets/images/coffees/latte.png'),
    tags: ['tradicionais'],
  },
  {
    id: randomUUID(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 890,
    image: require('@/assets/images/coffees/expresso.png'),
    tags: ['tradicionais'],
  },
  {
    id: randomUUID(),
    name: 'Expresso Americano',
    description:
      'Expresso diluído em água quente, menos intenso que o tradicional',
    price: 990,
    image: require('@/assets/images/coffees/americano.png'),
    tags: ['tradicionais'],
  },
  {
    id: randomUUID(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 990,
    image: require('@/assets/images/coffees/expresso-cremoso.png'),
    tags: ['tradicionais'],
  },
  {
    id: randomUUID(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 890,
    image: require('@/assets/images/coffees/cafe-gelado.png'),
    tags: ['tradicionais'],
  },
  {
    id: randomUUID(),
    name: 'Cappuccino',
    description:
      'Bebida feita com doses de canela, café expresso, leite e espuma',
    price: 990,
    image: require('@/assets/images/coffees/capuccino.png'),
    tags: ['doces'],
  },
  {
    id: randomUUID(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, leite e espuma',
    price: 990,
    image: require('@/assets/images/coffees/mochaccino.png'),
    tags: ['doces'],
  },
  {
    id: randomUUID(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 990,
    image: require('@/assets/images/coffees/chocolate-quente.png'),
    tags: ['doces'],
  },
  {
    id: randomUUID(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 990,
    image: require('@/assets/images/coffees/cubano.png'),
    tags: ['especiais'],
  },
  {
    id: randomUUID(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 990,
    image: require('@/assets/images/coffees/havaiano.png'),
    tags: ['especiais'],
  },
  {
    id: randomUUID(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 990,
    image: require('@/assets/images/coffees/arabe.png'),
    tags: ['especiais'],
  },
  {
    id: randomUUID(),
    name: 'Irlandês',
    description:
      'Café expresso com uísque irlandês, açúcar e chantilly por cima',
    price: 990,
    image: require('@/assets/images/coffees/irlandes.png'),
    tags: ['especiais'],
  },
]
