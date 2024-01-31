import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react"
import { BooksContext} from "../context/IGetBooksContext";

import { IBookItem } from "../models/IBookItem";
import Footer from "./Footer";

const Layout = () => {
const [mainMenuOpen, setmainMenuOpen] =useState(false);
const [subMenuOpen, setSubMenuOpen] = useState(false);
const [bookResponse, setBookResponse] = useState<IBookItem[]>([]);
const [selectedCategory, setSelectedCategory] = useState<string[]>([])
const [selectedCategoryText, setSelectedCategoryText] = useState<string>('Skönlitteratur')

const toggleMainMenu = () => {
  setmainMenuOpen(!mainMenuOpen);
};

const toggleSubMenu = () => {
setSubMenuOpen(!subMenuOpen);
};


return (
    <>
    <BooksContext.Provider value={{bookResponse, setBookResponse, selectedCategory, setSelectedCategory, selectedCategoryText, setSelectedCategoryText }}>
    <Header
      onToggleSubMenu={toggleSubMenu}
      onToggleMainMenu = {toggleMainMenu}
      mainMenuOpen={mainMenuOpen}
      subMenuOpen={subMenuOpen}
      >
    </Header>
    <main className={`main ${mainMenuOpen || subMenuOpen ? "overlay" : ""}`}>
        <Outlet></Outlet>
    </main>
    </BooksContext.Provider>
    <Footer></Footer>
    </>
  )

}

export default Layout
