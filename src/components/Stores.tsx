import {useState} from 'react'
import {categories, type Store} from '../types.d'
import stores from '../mocks/stores.json'
import ModalStore from './ModalStore'
import {LocationIcon} from './Icons'

function Stores() {
  const [filterByCategory, setFilterCategory] = useState<string>('Moda')
  const [showModal, setShowModal] = useState<boolean>(false)
  const [dataStore, setDataStore] = useState<Store>({
    id: 0,
    name: '',
    category: '',
    image: '',
    description: '',
    location: '',
    profile: '',
  })
  const filteredStores = stores.filter(
    (store) => store.category === filterByCategory
  )
  const handleStoreClick = (store: Store) => {
    setShowModal(true)
    setDataStore(store)
  }

  return (
    <section
      className='bg-primary/10 flex flex-col items-center py-24 sm:py-32'
      id='#stores'
    >
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-6xl text-center'>
          COMERCIOS
        </h1>

        <div className='text-3xl text-center text-primary border-y border-gray-300'>
          <ul className='grid grid-cols-2 place-items-center md:grid-cols-10'>
            {categories.map((category, i) => (
              <li
                className='w-full'
                key={i}
              >
                <button
                  onClick={() => {
                    setFilterCategory(category)
                  }}
                  className={`inline-block cursor-pointer p-4 w-full border-y border-transparent hover:text-secondary hover:border-primary duration-200 ${
                    category === filterByCategory
                      ? 'text-red-600 border-primary'
                      : ''
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-32 gap-y-12'>
            {filteredStores.length !== 0 ? (
              filteredStores.map((store, i) => (
                <li
                  className='flex flex-col items-center justify-center gap-4 cursor-pointer'
                  key={i}
                  onClick={() => {
                    handleStoreClick(store)
                  }}
                >
                  <img
                    className='h-48 w-48 md:h-64 md:w-64 object-contain rounded-full border bg-white'
                    src={store.image}
                    alt={store.name}
                  />
                  <h2 className='text-xl sm:text-2xl lg:text-3xl text-center'>
                    {store.name}
                  </h2>
                </li>
              ))
            ) : (
              <h1 className='text-5xl text-center col-span-3 text-secondary brightness-90'>
                PRONTO...
              </h1>
            )}
          </ul>
          <ModalStore
            open={showModal}
            onClose={() => {
              setShowModal(false)
            }}
          >
            <div className='flex flex-col items-center justify-center gap-4 text-2xl'>
              <img
                className='h-48 w-48 md:h-64 md:w-64 object-contain'
                src={dataStore.image}
                alt={dataStore.name}
              />
              <h2 className='sm:text-2xl lg:text-3xl text-center text-red-600'>
                {dataStore.name} - {dataStore.category}
              </h2>
              <div className='flex flex-col gap-4'>
                <p>{dataStore.description}</p>
                <div className='flex items-center gap-12'>
                  <h3>{dataStore.location}</h3>
                  <a
                    className='inline-flex flex-nowrap gap-4 border-2 border-red-300 rounded-md p-2.5'
                    target='_blank'
                    rel='noreferrer'
                    href={`https://www.google.com/maps/search/?api=1&query=${dataStore.location}`}
                  >
                    Ver en Maps
                    <LocationIcon className='w-6 h-6 mr-2' />
                  </a>
                </div>
                <a
                  className='text-primary hover:text-secondary duration-300 text-center'
                  href={dataStore.profile}
                  target='_blank'
                  rel='noreferrer'
                >
                  Visita su perfil
                </a>
              </div>
            </div>
          </ModalStore>
        </div>
      </div>
    </section>
  )
}

export default Stores
