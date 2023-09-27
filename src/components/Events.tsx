import {EventCard} from './EventCard'

function Team() {
  return (
    <section
      className='bg-primary flex flex-col items-center py-24 sm:py-32'
      id='events'
    >
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-6xl text-center text-white'>
          EVENTOS
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <EventCard
            name='VENDIMIA FEST'
            title='La fiesta de la vendimia vuelve a Santiago'
            image='https://assets.website-files.com/62224ec8e11529a359795bdc/625f19db9c51c215783f60da_VendimiaFest.jpeg'
            description='El Sábado 23 y Domingo 34 de Abril con el Barrio Italia como epicentro la fiesta de la vendimia finalmente volverá a Santiago con una versión del Vendimia Fest que superadas las cuarentenas reunirá una vez más a las personas en torno al vino.'
          />
          <EventCard
            name='CIRCUITO ARTE ITALIA'
            title='Muralistas chilenos vuelven a tomarse las fachadas del barrio'
            image='https://assets.website-files.com/62224ec8e11529a359795bdc/623c95d631d3012723738807_Invitacion_Murales-01.png'
            description='En 2020, poco antes del inicio de la pandamia, nace el Circuito Barrio Italia como un proyecto en busca de revitalizar el barrio y contribuir tanto al comercio como al turismo cultural de la zona.'
          />
          <EventCard
            name='FESTIVAL FURIA JAZZ'
            title='Todo un éxito logró ser el festival Furia Jazz en Barrio Italia'
            image='https://assets.website-files.com/62224ec8e11529a359795bdc/623c9378cfcb39290da12d74_Captura%20de%20Pantalla%202022-03-23%20a%20la(s)%2011.33.24.png'
            description='El domingo tuvimos una jornada increíble de música en vivo todo super ordenado y seguro gracias al apoyo de la Municipalidad de Providencia y la alcaldesa Evelyn Matthei.'
          />
        </div>
      </div>
    </section>
  )
}

export default Team
