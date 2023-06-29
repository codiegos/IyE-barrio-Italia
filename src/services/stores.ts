import { categories } from '../data/categories'

function getRandomCategory () {
  const randomIndex = Math.floor(Math.random() * categories.length)
  return categories[randomIndex]
}

function getRandomImage () {
  // Agrega aquí una lista de URLs de imágenes o logotipos aleatorios
  const images = [
    'https://assets.website-files.com/62224ec8e11529a359795bdc/62a8d47f8ed75a899dacf409_6241d05007b0a1045073ab4b_Winnipeg.jpeg',
    'https://assets.website-files.com/62224ec8e11529a359795bdc/62a8d47ebd00c52aa1f57a0e_6241cf86a21e87b1f63d1241_Verde%2520Sazo%25CC%2581n.jpeg',
    'https://assets.website-files.com/62224ec8e11529a359795bdc/62a8d47e13fe085d78ee94a8_624efc0ee367e7c3a858bc3d_Danoi.jpeg',
    'https://assets.website-files.com/62224ec8e11529a359795bdc/62a8d47cb7698fdb16838e21_6241ca9bb64ddbe229498ef9_The%2520Fisherman.jpeg'

    // ...
  ]

  const randomIndex = Math.floor(Math.random() * images.length)
  return images[randomIndex]
}

export const stores = Array.from({ length: 100 }, (_, index) => ({
  name: `Tienda ${index + 1}`,
  image: getRandomImage(),
  category: getRandomCategory()
}))
