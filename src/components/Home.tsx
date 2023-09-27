import Slider from './Slider'

function Home() {
  return (
    <section
      className='bg-triangle bg-center bg-no-repeat bg-cover py-24 sm:py-32'
      id='#home'
    >
      <div className='flex flex-col-reverse items-center justify-evenly lg:flex-row-reverse gap-4 pb-4 sm:pb-12 xl:px-48'>
        <div className='flex flex-col gap-6 lg:gap-12 text-center items-center justify-center'>
          <h1 className='text-5xl lg:text-7xl xl:text-8xl font-semibold'>
            <span className='text-primary '>¡Bienvenidos</span>
            <span className='block text-amber-400'>al</span>
            <span className='text-red-400'>Barrio Italia!</span>
          </h1>
          <a
            className='text-2xl lg:text-4xl rounded-lg border-2 border-primary/50 py-2 px-6 hover:bg-primary hover:text-white duration-300 mb-8'
            href='#contacto'
          >
            Soy Locatario
          </a>
        </div>
        <Slider />
      </div>
    </section>
  )
}

export default Home
