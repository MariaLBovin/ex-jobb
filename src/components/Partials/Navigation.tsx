import SubMenu from "./SubMenu";

interface NavigationProps {
    toggleSubMenu: () => void;
    mainMenuOpen: boolean;
    subMenuOpen: boolean;
  }

const Navigation = ({mainMenuOpen, toggleSubMenu, subMenuOpen} :NavigationProps) => {
  return (
    <>
      <div className="header-nav-wrapper">
        <nav className="header-nav">
        <ul className={`header-nav-list ${mainMenuOpen  && 'active'}` }>
            <li className="header-nav-item">
              <button className="header-nav-innerButton" onClick={toggleSubMenu}>
                Kategorier
                {!subMenuOpen ? (
                <span className="material-symbols-outlined">expand_more</span>
                ) : (
                <span className="material-symbols-outlined">expand_less</span>
                )}
                </button>
            </li>
            <SubMenu subMenuOpen={subMenuOpen}></SubMenu>   
            <li className="header-nav-item">Meny</li>
          </ul>
        </nav>
        
      </div>  
      
    </>
  )
}

export default Navigation