import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react"
import { BooksContext} from "../context/IGetBooksContext";

import { IBookItem } from "../models/IBookItem";


const Layout = () => {

  const [mainMenuOpen, setmainMenuOpen] =useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [bookResponse, setBookResponse] = useState<IBookItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])

useEffect(() => {
  const handleViewportChange = () => {
    setmainMenuOpen(window.innerWidth > 990);
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
    <BooksContext.Provider value={{bookResponse, setBookResponse, selectedCategory, setSelectedCategory }}>
    <Header
      onToggleMainMenu={toggleMainMenu}
      mainMenuOpen={mainMenuOpen}
      onToggleSubMenu={toggleSubMenu}
      subMenuOpen={subMenuOpen}></Header>
    <main className={`main ${mainMenuOpen ? "overlay" : ""}`}>
        <Outlet></Outlet>
    </main>
    </BooksContext.Provider>
    <footer></footer>
    </>
  )

}

export default Layout