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
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 890,
    image: require('@/assets/images/coffees/expresso.png'),
    tags: ['tradicionais'],
  },
  {
    id: '3',
    name: 'Expresso Americano',
    description:
      'Expresso diluído em água quente, menos intenso que o tradicional',
    price: 990,
    image: require('@/assets/images/coffees/americano.png'),
    tags: ['tradicionais'],
  },
  {
    id: '4',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 990,
    image: require('@/assets/images/coffees/expresso-cremoso.png'),
    tags: ['tradicionais'],
  },
  {
    id: '5',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 890,
    image: require('@/assets/images/coffees/cafe-gelado.png'),
    tags: ['tradicionais'],
  },
  {
    id: '6',
    name: 'Cappuccino',
    description:
      'Bebida feita com doses de canela, café expresso, leite e espuma',
    price: 990,
    image: require('@/assets/images/coffees/capuccino.png'),
    tags: ['doces'],
  },
  {
    id: '7',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, leite e espuma',
    price: 990,
    image: require('@/assets/images/coffees/mochaccino.png'),
    tags: ['doces'],
  },
  {
    id: '8',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 990,
    image: require('@/assets/images/coffees/chocolate-quente.png'),
    tags: ['doces'],
  },
  {
    id: '9',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 990,
    image: require('@/assets/images/coffees/cubano.png'),
    tags: ['especiais'],
  },
  {
    id: '10',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 990,
    image: require('@/assets/images/coffees/havaiano.png'),
    tags: ['especiais'],
  },
  {
    id: '11',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 990,
    image: require('@/assets/images/coffees/arabe.png'),
    tags: ['especiais'],
  },
  {
    id: '12',
    name: 'Irlandês',
    description:
      'Café expresso com uísque irlandês, açúcar e chantilly por cima',
    price: 990,
    image: require('@/assets/images/coffees/irlandes.png'),
    tags: ['especiais'],
  },
]
