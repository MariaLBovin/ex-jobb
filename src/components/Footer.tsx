import Img from '/me.png'; 
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className="footer-container">
        <div className="footer-content">
            <p className='footer-content-text'>Sidan är framtagen av Maria Larsson Bovin, Frontend developer 22/24 Medieinstitutet</p>
            <div className='footer-content-logo'>
                <ul className='footer-content-logo-list'>
                    <li className='footer-content-logo-item'>
                        <NavLink to='https://marialbovin.github.io/portfolio-2023/#/' className='footer-content-logo-itemLink'>
                            <i className="fa-solid fa-briefcase"></i>
                            <p className='footer-content-logo-itemText'>Portfolio</p>
                        </NavLink>
                    </li>
                    <li className='footer-content-logo-item'>
                        <NavLink to='maria.bovin@gmail.com' className='footer-content-logo-itemLink'>
                            <i className="fa-solid fa-envelope"></i>
                            <p className='footer-content-logo-itemText'>Email</p>
                        </NavLink>
                    </li>
                    <li className='footer-content-logo-item'>
                        <NavLink to='https://www.linkedin.com/in/mariabovin/' className='footer-content-logo-itemLink'>
                            <i className="fa-brands fa-linkedin"></i>
                            <p className='footer-content-logo-itemText'>LinkedIn</p>
                        </NavLink>
                    </li>
                    <li className='footer-content-logo-item'>
                        <NavLink to='https://github.com/MariaLBovin' className='footer-content-logo-itemLink'>
                            <i className="fa-brands fa-github"></i>
                            <p className='footer-content-logo-itemText'>Github</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-img">
            <img src={Img}></img>
        </div>
    </footer>
    </>
  )
}

export default Footer