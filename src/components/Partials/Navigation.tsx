import SubMenu from "./SubMenu";
import { NavLink } from "react-router-dom";

interface NavigationProps {
    toggleSubMenu: () => void;
    toggleMainMenu: () => void;
    mainMenuOpen: boolean;
    subMenuOpen: boolean;
  }

const Navigation = ({mainMenuOpen,  toggleSubMenu, subMenuOpen, toggleMainMenu} :NavigationProps) => {
  return (
    <>
        <nav className="header-nav" aria-label="main" aria-hidden={mainMenuOpen ? "false" : "true"}>
        <div className={`header-nav-element ${mainMenuOpen && 'active'}`}>
        <ul className="header-nav-list">
            <li className="header-nav-item">
              <button className="header-nav-itemButton" onClick={toggleSubMenu} aria-expanded={subMenuOpen ? "true" : "false"}>
                Kategorier
                {!subMenuOpen ? (
                <i className="fa-solid fa-angle-down"></i>
                ) : (
                <i className="fa-solid fa-angle-up"></i>
                )}
                </button>
                <SubMenu subMenuOpen={subMenuOpen} toggleSubMenu={toggleSubMenu} toggleMainMenu={toggleMainMenu}></SubMenu>
            </li>
            <li className="header-nav-item">
              <NavLink to='/contact' 
              className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                Kontakt
              </NavLink>
            </li>
          </ul>
          </div>
          
        </nav> 
    </>
  )
}

export default Navigation