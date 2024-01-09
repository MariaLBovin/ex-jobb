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
  // Funktion som sätter mainMenuOpen till true om viewport är mer än 770px
  const handleViewportChange = () => {
    setmainMenuOpen(window.innerWidth > 770);
  };

  // Lyssna på resize-händelser
  window.addEventListener("resize", handleViewportChange);

  // Kör vid montering och rensa upp vid avmontering
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