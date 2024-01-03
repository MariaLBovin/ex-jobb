import { useState } from "react"

const Header = () => {

    const [menuOpen, setMenuOpen] =useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <>
        <header className="header-container">
            <div className="header-logo-container">
                <img className="header-logo" src="/public/logo.png"/>
            </div>
            <nav className={`header-nav ${menuOpen ? "" : "hidden"}`} aria-label="main" aria-hidden="true">
                <ul className="header-nav-list">
                    <li className="header-nav-item">Meny</li>
                    <li className="header-nav-item">Meny</li>
                </ul>
            </nav>
            <button className="header-nav-button" onClick={toggleMenu}>
            {menuOpen ? (
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