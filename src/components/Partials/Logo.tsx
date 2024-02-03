import { NavLink } from 'react-router-dom'
import LogoImg from '/logo.png';

interface ILogoProps {
  toggleSubMenu: () => void;
}

export const Logo = ({toggleSubMenu}: ILogoProps) => {

  const toggleMenu = () => {
    if(window.innerWidth > 760){
        toggleSubMenu()
    }
  }

  return (
    <>
    <div className="header-logo">
      <button className='header-logo-button' aria-label='navigera till startsidan'>
        <NavLink to='/' onClick={toggleMenu}>
          <img loading='lazy' alt='logo'className="header-logo-img" src={LogoImg}/>
        </NavLink>
      </button>
      </div>
    </>
  )
}
