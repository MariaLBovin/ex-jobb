import {Logo} from "./Partials/Logo";
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
          <div className="header-wrapper">
            <Logo></Logo>
            <button className="header-button" onClick={onToggleMainMenu} aria-expanded={mainMenuOpen ? "true" : "false"}>
            {mainMenuOpen ? (
            <i className="fa-solid fa-xmark header-button-symbol"></i>
          ) : (
            <i className="fa-solid fa-bars header-button-symbol"></i>
          )}
            </button>
            <Navigation mainMenuOpen={mainMenuOpen} toggleSubMenu={onToggleSubMenu} subMenuOpen={subMenuOpen}></Navigation>
            </div>
        </header>
    </>
  )
}

export default Header