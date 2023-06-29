interface EventsProps {
  name: string
  title: string
  image: string
  description: string
}

export function EventCard ({ name, title, image, description }: EventsProps) {
  return (
    <div className='bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl'>
      <div>
        <img src={image} className='h-96 w-full object-cover' />
      </div>
      <div className='bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6'>
        <h3 className='text-white text-lg font-semibold'>{name}</h3>
      </div>
      <div className='px-6 py-4 flex flex-col gap-2'>
        <h1 className='text-xl font-semibold text-gray-800'>{title}</h1>
        <p className='text-gray-500'>{description}</p>

        <div className='flex items-center mt-4 text-gray-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>

          <h1 className='px-2 text-sm'>Barrio Italia, Chile</h1>
        </div>
        <div className='flex items-center mt-4 text-gray-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
            />
          </svg>

          <h1 className='px-2 text-sm'>barrio_italia@gmail.com</h1>
        </div>
      </div>
    </div>
  )
}
