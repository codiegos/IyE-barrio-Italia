import GoogleMap from './GoogleMap'

function Contact () {
  return (
    <section className='bg-gradient-to-b to-50% from-teal-50 flex flex-col items-center py-24 sm:py-32'>
      <div className='container flex flex-col justify-center gap-8 xl:gap-12'>
        <h1 className='text-3xl lg:text-6xl text-center'>¿ERES LOCATARIO?</h1>
        <div className='container flex flex-col lg:flex-row lg:gap-0 gap-16 justify-evenly items-center w-full py-4'>
          <form className='text-xl flex flex-col justify-center gap-6 w-full max-w-3xl border p-4 rounded'>
            <div>
              <label htmlFor='name' className='mb-3 block text-orange-500'>
                Nombre Completo
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Pedro Pérez Pereira'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-gray-800 outline-none focus:border-amber-400 focus:shadow-md placeholder:text-gray-300 duration-200'
              />
            </div>
            <div>
              <label htmlFor='email' className='mb-3 block text-orange-500'>
                Correo Electrónico
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='ejemplo@dominio.com'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-gray-800 outline-none focus:border-amber-400 focus:shadow-md placeholder:text-gray-300 duration-200'
              />
            </div>
            <div>
              <label htmlFor='subject' className='mb-3 block text-orange-500'>
                Asunto
              </label>
              <input
                type='text'
                name='subject'
                id='subject'
                placeholder='Pon tu tema aquí'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-gray-800 outline-none focus:border-amber-400 focus:shadow-md placeholder:text-gray-300 duration-200'
              />
            </div>
            <div>
              <label htmlFor='message' className='mb-3 block text-orange-500'>
                Mensaje
              </label>
              <textarea
                rows={4}
                name='message'
                id='message'
                placeholder='Escribe tu mensaje'
                className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-gray-800 outline-none focus:border-amber-400 focus:shadow-md placeholder:text-gray-300 duration-200'
              ></textarea>
            </div>
            <div>
              <button className='w-full lg:w-auto hover:shadow-form rounded-md bg-amber-500 hover:bg-amber-500/80 focus:ring ring-orange-400 py-3 px-8 text-white outline-none duration-300'>
                Enviar
              </button>
            </div>
          </form>
          <GoogleMap />
        </div>
      </div>
    </section>
  )
}

export default Contact
