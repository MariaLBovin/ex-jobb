import { NavLink } from 'react-router-dom'
import LogoImg from '/logo.png';

export const Logo = () => {


  return (
    <>
    <div className="header-logo">
      <button className='header-logo-button' aria-label='navigera till startsidan'>
        <NavLink to='/'>
          <img loading='lazy' alt='logo'className="header-logo-img" src={LogoImg}/>
        </NavLink>
      </button>
      </div>
    </>
  )
}
