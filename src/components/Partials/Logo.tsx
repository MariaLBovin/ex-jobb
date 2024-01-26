import { NavLink } from 'react-router-dom'

export const Logo = () => {
  return (
    <>
    <div className="header-logo">
        <NavLink to='/'>
        <img className="header-logo" src="/logo.png"/>
        </NavLink>
          
      </div>
    </>
  )
}
