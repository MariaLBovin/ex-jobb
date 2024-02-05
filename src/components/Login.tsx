import { NavLink } from "react-router-dom"
import LoginUserForm from "./Partials/LoginUserForm"



const Login = () => {

  return (
    <>
    <section className='login-container'>
        <LoginUserForm></LoginUserForm>
        <div className="login-link">
          <p className="login-text">Ny här?</p>
          <button className="login-link-button">
          <NavLink to='/skapa-användare' className="login-link">
          Skapa användare
        </NavLink>
          </button>
        </div>
        
        
    </section>
    </>
  )
}

export default Login