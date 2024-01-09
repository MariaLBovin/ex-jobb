import { categories } from "../../arrays/categories";

interface DesktopNavProps {
    subMenuOpen: boolean;
  }
const SubMenu = ({subMenuOpen} :DesktopNavProps) => {
  return (
    <>
    <div className="header-nav-innerWrapper">
      <nav className="header-nav-innerNav" aria-label="sub" aria-hidden={subMenuOpen ? "false" : "true"}>
        <ul className={`header-nav-innerMenu ${subMenuOpen && 'active'}`} aria-label="main">
            {categories.map((category) => (
                <li className="header-nav-innerItem" key={category.id}> 
                    {category.text}
                </li>
            ))}
        </ul>
        </nav>
    </div>
    </>
  )
}

export default SubMenu
