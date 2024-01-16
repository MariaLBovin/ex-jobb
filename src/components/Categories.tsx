import Carousel from "./Partials/Carousel";
import { categoriesArray } from "../arrays/categoriesArray";
import DisplayBooks from "./Partials/DisplayBooks";
import { useContext, useState} from "react";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";
import { IBookItem } from "../models/IBookItem";



const Categories  = () => {
  
  const {setBookResponse, setSelectedCategory} = useContext<IGetBooksContext>(BooksContext);
  const [categoryText, setCategoryText] = useState<string>('Skönlitteratur')

  const changeCategory = (selectedCategory: string[], categoryText: string) => {
    const category = categoryText || '';
    const selected = selectedCategory
  
    const storedBooks = JSON.parse(sessionStorage.getItem('bookData') || '{}');
    console.log(storedBooks.items);
    
    const storedBooksArray = Array.from<IBookItem>(storedBooks.items)
      .filter(e => e)
      .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
       
    
      const filteredBooks = storedBooksArray.filter((book: IBookItem) => {
        const selectedCategoriesLower = selected.map(cat => cat.toLowerCase());
        const bookCategoriesLower = book.volumeInfo.categories.map(cat => cat.toLowerCase());

        return selectedCategoriesLower.some(cat => bookCategoriesLower.includes(cat));
      });
    
    
    setBookResponse(filteredBooks)
    setCategoryText(category);
    setSelectedCategory(selected);
    
  };
  

  return (

    <>
    <section className="categories-container">
      <h2 className="categories-header">Boktips baserat på kategorier</h2>
      <div className="categories-inner">
      <div className="categories-slider-wrapper">
        <Carousel categories={categoriesArray} changeCategory={changeCategory}></Carousel>
      </div>
      <div className="categories-content-wrapper">
        <DisplayBooks categoryText={categoryText}></DisplayBooks>
      </div>
      </div>
      
    </section>
    
    </>
  )
}

export default Categories

