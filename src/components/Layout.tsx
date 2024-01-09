import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react"


const Layout = () => {

  const [mainMenuOpen, setmainMenuOpen] =useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMainMenu = () => {
    setmainMenuOpen(!mainMenuOpen);
};

const toggleSubMenu = () => {
  setSubMenuOpen(!subMenuOpen);
};
useEffect(() => {
  const handleViewportChange = () => {
    setmainMenuOpen(window.innerWidth > 760);
  };

  window.addEventListener("resize", handleViewportChange);

  handleViewportChange();
  return () => {
    window.removeEventListener("resize", handleViewportChange);
  };
}, []);

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