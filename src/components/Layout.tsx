import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import { BooksContext} from "../context/IGetBooksContext";
import { IBookItem } from "../models/IBookItem";
import Footer from "./Footer";
import ScrollToTop from "./Partials/ScrollToTop";
import { LoginUserContext } from "../context/LoginUserContext";
import { IUserInfo } from "../models/IUserInfo";

const Layout = () => {
const [mainMenuOpen, setmainMenuOpen] =useState(false);
const [subMenuOpen, setSubMenuOpen] = useState(false);
const [bookResponse, setBookResponse] = useState<IBookItem[]>([]);
const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
const [selectedCategoryText, setSelectedCategoryText] = useState<string>('Skönlitteratur');
const [loggedInUser, setLoggedInUser] = useState< IUserInfo| null >(null);
const [loggedInUserBooks, setLoggedInUserBooks] =useState<IBookItem[] | null>( null);

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
  <LoginUserContext.Provider value={{loggedInUser, setLoggedInUser, loggedInUserBooks, setLoggedInUserBooks}}>
    <BooksContext.Provider value={{bookResponse, setBookResponse, selectedCategory, setSelectedCategory, selectedCategoryText, setSelectedCategoryText }}>
    <Header
      onToggleSubMenu={toggleSubMenu}
      onToggleMainMenu = {toggleMainMenu}
      mainMenuOpen={mainMenuOpen}
      subMenuOpen={subMenuOpen}
      >
    </Header>
    <div className={`main ${mainMenuOpen || subMenuOpen? "overlay" : ""}`}>
      <Outlet></Outlet>
    </div>
    </BooksContext.Provider>
    </LoginUserContext.Provider>
    <Footer></Footer>
    </>
  )
}

export default Layout
