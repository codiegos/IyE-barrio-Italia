import AboutCard from './AboutCard'
import { GuildIcon, RollbackIcon, TargetIcon } from './Icons'
import Timeline from './Timeline'

function About () {
  return (
    <section className=' flex flex-col items-center py-24 sm:min-h-screen sm:py-32'>
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-6xl text-center'>
          SOBRE EL BARRIO
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <AboutCard
            title='Historia'
            icon={
              <RollbackIcon className='w-16 h-16 bg-teal-300 rounded-full' />
            }
            colSpan='2'
            text='El caso de Barrio Italia se asemeja a la evolución de diversos barrios en todo el mundo. En lo esencial, la evolución es similar al de los proyectos Hackesche Höfe, el SoHo en Nueva York, Little Italy en Toronto y Hoxton en Londres.'
          >
            <Timeline />
          </AboutCard>
          <AboutCard
            title='Asociación Gremial'
            icon={<GuildIcon className='w-16 h-16 bg-amber-300 rounded-full' />}
            text='La AG representa a todo el gremio en el vínculo y el trabajo colaborativo con entidades como la Municipalidad de Providencia y Ñuñoa, Sercotec, Cámaras de Comercio, etc...'
          />
          <AboutCard
            title='Objetivo Principal'
            icon={
              <TargetIcon className='w-16 h-16 bg-orange-300 rounded-full' />
            }
            text='El objetivo principal de la Asociación Gremial es otorgar valor al barrio, por medio de acciones concretas que ayuden a promover La Cultura, El Comercio, La Gastronomía, La Creatividad, El Turismo.'
          />
        </div>
      </div>
    </section>
  )
}

export default About
