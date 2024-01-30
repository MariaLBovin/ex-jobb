import { NavLink } from 'react-router-dom'
import LogoImg from '/logo.png';

export const Logo = () => {
  return (
    <>
    <div className="header-logo">
        <NavLink to='/'>
        <img className="header-logo" src={LogoImg}/>
        </NavLink>
          
      </div>
    </>
  )
}
