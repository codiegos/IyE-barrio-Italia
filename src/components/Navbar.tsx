import {useState} from 'react'
import logo from '../assets/icons/logo.png'
import {FacebookIcon, InstagramIcon} from './Icons'
import {type NavItem} from '../types'

const navItems: NavItem[] = [
  {key: 'inicio', label: 'Inicio', link: '#home'},
  {key: 'nosotros', label: 'Sobre el Barrio', link: '#about'},
  {key: 'eventos', label: 'Eventos', link: '#events'},
  {key: 'galeria', label: 'Galeria', link: '#gallery'},
  {key: 'comercios', label: 'Comercios', link: '#stores'},
  {key: 'contacto', label: 'Contacto', link: '#contact'},
]
const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(false)

  return (
    <header className='fixed bg-white z-20 w-full lg:py-4 px-4 shadow-md'>
      <div className='flex items-center justify-between'>
        {/* BEGIN Logo */}
        <nav className='flex flex-grow basis-0 z-20'>
          <a href='#inicio'>
            <img
              src={logo}
              alt='logo-jardin-las-ardillitas'
              className='h-12 w-full lg:h-12 cursor-pointer brightness-125'
            />
          </a>
        </nav>
        {/* END Logo */}
        <div className='flex items-center'>
          {/* BEGIN Responsive Hamburger */}
          <input
            type='checkbox'
            name='hamburger'
            id='hamburger'
            checked={closeMenu}
            className='peer'
            onChange={(e) => {
              setCloseMenu(e.target.checked)
            }}
            hidden
          />
          <label
            htmlFor='hamburger'
            className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'
          >
            <div
              aria-hidden='true'
              className='m-auto h-0.5 w-6 rounded bg-primary transition duration-300'
            />
            <div
              aria-hidden='true'
              className='m-auto mt-2 h-0.5 w-6 rounded bg-primary transition duration-300'
            />
          </label>
          {/* END Responsive Hamburger */}
          {/* BEGIN Sidebar */}
          <div className='peer-checked:translate-x-0 translate-x-[-136%] fixed inset-0 w-4/6 text-2xl shadow-md shadow-gray-400 bg-white transition duration-500 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0'>
            <div className='flex flex-col h-full justify-between lg:items-center lg:flex-row'>
              {/* BEGIN Nav items */}
              <ul className='px-6 pt-32 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0'>
                {navItems.map(({key, label, link}) => (
                  <li key={key}>
                    <a
                      href={link}
                      onClick={() => {
                        setCloseMenu(!closeMenu)
                      }}
                      className='group relative cursor-pointer before:absolute before:inset-x-0 before:bottom-0 before:h-[5px] before:rounded-xl before:origin-right before:scale-x-0 before:bg-amber-400 lg:before:bg-primary/50 before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                    >
                      <span className='relative group-hover:text-orange-400 lg:group-hover:text-primary duration-300'>
                        {label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              {/* END Nav items */}

              {/* BEGIN Responsive Social media */}
              <nav className='flex gap-3 items-center px-6 border-t-2 border-primary/60 py-8 lg:hidden'>
                <a
                  href='https://www.facebook.com/pages/Barrio-Italia/200727180130441'
                  target='_blank'
                  className='w-8 h-8'
                  rel='noreferrer'
                >
                  <FacebookIcon />
                </a>
                <a
                  href='https://www.instagram.com/barrioitalia.ag/'
                  target='_blank'
                  className='w-8 h-8'
                  rel='noreferrer'
                >
                  <InstagramIcon />
                </a>
              </nav>
              {/* END Responsive Social media */}
            </div>
          </div>
          {/* END Sidebar */}
        </div>
        {/* END Responsive Hamburger */}

        {/* BEGIN Social media */}
        <nav className='hidden lg:flex gap-3 items-center flex-grow basis-0 justify-end'>
          <a
            href='https://www.instagram.com/barrioitalia.ag/'
            target='_blank'
            className='w-8 h-8'
            rel='noreferrer'
          >
            <InstagramIcon />
          </a>
          <a
            href='https://www.facebook.com/pages/Barrio-Italia/200727180130441'
            target='_blank'
            className='w-8 h-8'
            rel='noreferrer'
          >
            <FacebookIcon />
          </a>
        </nav>
        {/* END Social media */}
      </div>
    </header>
  )
}

export default Navbar
