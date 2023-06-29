import { useState } from 'react'
import { categories } from '../data/categories'
import { stores } from '../services/stores'
function Stores () {
  const [category, setCategory] = useState<string>('Moda')

  const filteredStores = stores.filter(store => store.category === category)

  return (
    <section className='bg-yellow-200/50 flex flex-col items-center py-24 sm:py-32'>
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-6xl text-center'>
          COMERCIOS
        </h1>

        <div className='text-3xl text-center text-primary border-b border-gray-300'>
          <ul className='flex flex-wrap -mb-px'>
            {categories.map((category, i) => (
              <li className='mr-2' key={i}>
                <button
                  onClick={() => {
                    setCategory(category)
                  }}
                  className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-600 hover:border-primary duration-200 focus:border-primary'
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className=''>
          <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-32 gap-y-12'>
            {filteredStores.map((store, i) => (
              <li
                className='flex flex-col items-center justify-center gap-4'
                key={i}
              >
                <img
                  className='h-48 w-48 md:h-64 md:w-64 object-contain'
                  src={store.image}
                  alt={store.name}
                />
                <h2 className='text-xl sm:text-2xl lg:text-3xl text-center'>
                  {store.name}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Stores
