function GoogleMap () {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6658.1382891798!2d-70.62579975!3d-33.44750505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57e771fd0c3%3A0xd53d947cb0d1ec6e!2sBarrio%20Italia%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1686782414046!5m2!1ses-419!2scl'
      width='600'
      height='450'
      className='h-96 w-full md:h-[32rem] md:w-[32rem] border-[.1rem] border-orange-200 shadow-md '
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  )
}

export default GoogleMap
