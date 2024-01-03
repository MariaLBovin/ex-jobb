import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react"


const Layout = () => {

  const [mainMenuOpen, setmainMenuOpen] =useState(false);

  const toggleMainMenu = () => {
    setmainMenuOpen(!mainMenuOpen);
};

  return (
    <>
    <Header onToggleMainMenu={toggleMainMenu} mainMenuOpen={mainMenuOpen}></Header>
    <main className={`main ${mainMenuOpen ? "overlay" : ""}`}>
        <Outlet></Outlet>
    </main>
    <footer></footer>
    </>
  )
  
}

export default Layout