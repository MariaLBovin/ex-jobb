import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react"
import { BooksContext} from "../context/IGetBooksContext";
import { IBookItem } from "../models/IBookItem";
import Footer from "./Footer";
import ScrollToTop from "./Partials/ScrollToTop";

const Layout = () => {
const [mainMenuOpen, setmainMenuOpen] =useState(false);
const [subMenuOpen, setSubMenuOpen] = useState(false);
const [bookResponse, setBookResponse] = useState<IBookItem[]>([]);
const [selectedCategory, setSelectedCategory] = useState<string[]>([])
const [selectedCategoryText, setSelectedCategoryText] = useState<string>('Skönlitteratur')

const toggleMainMenu = () => {
  setmainMenuOpen(!mainMenuOpen);

  if(subMenuOpen) {
    setSubMenuOpen(!subMenuOpen)
    
  }

};

const toggleSubMenu = () => {
setSubMenuOpen(!subMenuOpen);
};

return (
    <>
  <ScrollToTop></ScrollToTop>
    <BooksContext.Provider value={{bookResponse, setBookResponse, selectedCategory, setSelectedCategory, selectedCategoryText, setSelectedCategoryText }}>
    <Header
      onToggleSubMenu={toggleSubMenu}
      onToggleMainMenu = {toggleMainMenu}
      mainMenuOpen={mainMenuOpen}
      subMenuOpen={subMenuOpen}
      >
    </Header>
    
    <div className={`main ${mainMenuOpen || subMenuOpen? "overlay" : ""}`}
>
        <Outlet></Outlet>
    </div>
    </BooksContext.Provider>
    <Footer></Footer>
    </>
  )

}

export default Layout
