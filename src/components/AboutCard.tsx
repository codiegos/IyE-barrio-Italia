interface CardProps {
  title: string
  icon: React.ReactNode
  text: string
  colSpan?: string
  children?: React.ReactNode
}

function AboutCard ({ title, icon, text, colSpan = '1', children }: CardProps) {
  return (
    <div
      className={`flex flex-col gap-4 items-center bg-white rounded border p-4 shadow-md ${'sm:col-span-'}${colSpan}`}
    >
      <h2 className='inline-flex items-center gap-2 text-2xl lg:text-4xl'>
        {title}
        {icon}
      </h2>
      <p className='text-lg lg:text-xl text-justify'>{text}</p>
      <div>{children}</div>
    </div>
  )
}

export default AboutCard
