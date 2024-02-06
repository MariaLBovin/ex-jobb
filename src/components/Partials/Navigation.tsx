import { useContext } from "react";
import SubMenu from "./SubMenu";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginUserContext } from "../../context/LoginUserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../services/Firebase";

interface NavigationProps {
    toggleSubMenu: () => void;
    toggleMainMenu: () => void;
    mainMenuOpen: boolean;
    subMenuOpen: boolean;
  }

const Navigation = ({mainMenuOpen,  toggleSubMenu, subMenuOpen, toggleMainMenu} :NavigationProps) => {

  const navigate=useNavigate()

  const {loggedInUser, setLoggedInUser} = useContext(LoginUserContext)

  const toggleMenu = () => {
    if (window.innerWidth < 760){
      toggleMainMenu();
    }
  }

  const logOut = () => {
    signOut(auth).then(()=> {
      navigate('/')
      console.log('utloggad');
      
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('userBooks');
      setLoggedInUser(null)
      toggleMenu();
    }).catch((error) => {
      console.log(error);
      
    }) 
  }
  return (
    <>
        <nav className="header-nav" aria-label="main" aria-hidden={mainMenuOpen ? "false" : "true"}>
        <div className={`header-nav-element ${mainMenuOpen && 'active'}`}>
        <ul className="header-nav-list">
            <li className="header-nav-item">
              <button className="header-nav-itemButton" onClick={toggleSubMenu} aria-expanded={subMenuOpen ? "true" : "false"} aria-label="submenu">
                Kategorier
                {!subMenuOpen ? (
                <i className="fa-solid fa-angle-down"></i>
                ) : (
                <i className="fa-solid fa-angle-up"></i>
                )}
                </button>
                <SubMenu subMenuOpen={subMenuOpen} toggleSubMenu={toggleSubMenu} toggleMainMenu={toggleMainMenu}></SubMenu>
            </li>
            <li className="header-nav-item" onClick={toggleMenu}>
              <NavLink to='/kontakt' 
              className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                Om Bokai
              </NavLink>
              
            </li>
            <li className="header-nav-item" onClick={toggleMenu}>
                  { !loggedInUser ? (
                    <button className="header-nav-itemButton">
                      <NavLink to='/login'>Logga in</NavLink>
                    </button>
                    
                  ) : (
                    <NavLink to='/min-sida'>Bokhylla</NavLink>
                  )
                  }
            </li>
            {loggedInUser && <li className="header-nav-item">
              <button className="header-nav-itemButton" onClick={logOut}>Logga ut</button>
            </li>}
          </ul>
          </div>
          
        </nav> 
    </>
  )
}

export default Navigation