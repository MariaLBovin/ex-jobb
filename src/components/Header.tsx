
import { DesktopNav } from "./Partials/DesktopNav";
import Navigation from "./Partials/Navigation";

interface HeaderProps {
    onToggleMainMenu: () => void;
    mainMenuOpen: boolean;
    onToggleSubMenu: () => void;
    subMenuOpen: boolean;
  }
const Header = ({ onToggleMainMenu, mainMenuOpen, onToggleSubMenu, subMenuOpen }: HeaderProps) => {


  return (
    <>
        <header className="header-container">
            <div className="header-logo-container">
                <img className="header-logo" src="/logo.png"/>
            </div>
            <Navigation mainMenuOpen={mainMenuOpen} toggleSubMenu={onToggleSubMenu} subMenuOpen={subMenuOpen}></Navigation>
            <DesktopNav toggleSubMenu={onToggleSubMenu} subMenuOpen={subMenuOpen}></DesktopNav>
            <button className="header-nav-button" onClick={onToggleMainMenu}>
            {mainMenuOpen ? (
            <span className="material-symbols-outlined header-nav-symbol">close</span>
          ) : (
            <span className="material-symbols-outlined header-nav-symbol">menu</span>
          )}
            </button>
 
        </header>
    </>
  )
}

export default Header