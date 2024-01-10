import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react"
import { BooksContext} from "../context/IGetBooksContext";

import { IBookList } from "../models/IBookList";


const Layout = () => {

  const [mainMenuOpen, setmainMenuOpen] =useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [bookResponse, setBookResponse] = useState<IBookList>({ kind: "", totalItems: 0, items: [] });

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
    <BooksContext.Provider value={{bookResponse, setBookResponse}}>
    <main className={`main ${mainMenuOpen ? "overlay" : ""}`}>
        <Outlet></Outlet>
    </main>
    </BooksContext.Provider>
    <footer></footer>
    </>
  )
  
}

export default Layout