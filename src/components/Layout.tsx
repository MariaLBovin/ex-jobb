import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react"


const Layout = () => {

  const [mainMenuOpen, setmainMenuOpen] =useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMainMenu = () => {
    setmainMenuOpen(!mainMenuOpen);
};

const toggleSubMenu = () => {
  setSubMenuOpen(!subMenuOpen);
};

  return (
    <>
    <Header 
      onToggleMainMenu={toggleMainMenu}
      mainMenuOpen={mainMenuOpen}
      onToggleSubMenu={toggleSubMenu}
      subMenuOpen={subMenuOpen}></Header>
    <main className={`main ${mainMenuOpen ? "overlay" : ""}`}>
        <Outlet></Outlet>
    </main>
    <footer></footer>
    </>
  )
  
}

export default Layout