function Gallery() {
  return (
    <section
      className=' flex flex-col items-center py-24 sm:min-h-screen sm:py-32'
      id='#gallery'
    >
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-12'>
        <h1 className='text-3xl lg:text-6xl text-center'>GALERÍA</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a20981b9440903860857a6_Cit%C3%A9Italia_01.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full max-w-full rounded-lg '
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a899f6c868dee103faa839_galeria%20italia%201206.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a20904531c80c7272c825c_LaCandelaria_02.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-4 '>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a89ab4ead292291fb83358_maison%20italia.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a2092996a5f436cddfc01d_PortaAzul_02.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a2091d74b1e2280f348374_CasonaDo%C3%B1aRosa_01.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a2095ffaa3826b6255327e_EstacioSC_01.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a208f271bb4c52d904457a_CasaAvenidaItalia_01.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a209cf32590a6f04437b5d_VegaItalia_01.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a2091390fe385beb378257_CasaPop_01.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a208e73f686114dd29e342_BodegaItalia_02.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-full max-w-full rounded-lg'
                src='https://assets.website-files.com/62224ec8e11529a359795bdc/62a89a0d7e0c0ada08919668_ItaliaMia_02.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
