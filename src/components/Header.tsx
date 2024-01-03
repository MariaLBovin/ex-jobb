import { useState } from "react"

interface HeaderProps {
    onToggleMainMenu: () => void;
    mainMenuOpen: boolean;
  }

const Header = ({onToggleMainMenu, mainMenuOpen} :HeaderProps) => {
    const [subMenuOpen, setsubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setsubMenuOpen(!subMenuOpen);
    }

  return (
    <>
        <header className="header-container">
            <div className="header-logo-container">
                <img className="header-logo" src="/logo.png"/>
            </div>
            <nav className={`header-nav ${mainMenuOpen ? "" : "hidden"}`} aria-label="main" aria-hidden="true">
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                    <button className="header-nav-innerButton" onClick={toggleSubMenu}>
                       Kategorier
                       <span className="material-symbols-outlined">expand_more</span>
                    </button>
                    <ul className={`header-nav-innerMenu ${subMenuOpen ? "" : "hidden"}`} aria-label="inner" aria-hidden="true">
                            <li className="header-nav-innerItem">
                                kategori
                            </li>
                            <li className="header-nav-innerItem">
                                kategori
                            </li>
                            <li className="header-nav-innerItem">
                                kategori
                            </li>
                        </ul>
                    </li>
                    <li className="header-nav-item">Meny</li>
                </ul>
            </nav>
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