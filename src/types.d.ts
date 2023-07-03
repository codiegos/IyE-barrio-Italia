export interface NavItem {
  key: string
  label: string
  link: string
}

export interface Slide {
  imageUrl: string
}

export interface Store {
  id: number
  name: string
  description: string
  image: string
  category: string
  location: string
  profile: string
}

export enum NameCategories {
  MODA = 'Moda',
  DECORACION = 'Decoración',
  CULTURA = 'Cultura',
  BIENESTAR = 'Bienestar',
  INFANTIL = 'Infantil',
  RESTAURANT = 'Restaurant',
  BAR = 'Bar',
  CAFETERIA = 'Cafetería',
  TIENDAS_GOURMET = 'Gourmet',
  OTROS = 'Otros'
}

export const categories: string[] = Object.values(NameCategories)
