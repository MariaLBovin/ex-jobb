import Carousel from "./Partials/Carousel";
import { categoriesArray } from "../arrays/categoriesArray";
import DisplayBooks from "./Partials/DisplayBooks";
import { useContext, useEffect} from "react";
import { getAllBooks, getInitalBooks } from "../services/CategoryCollector";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";
import { IBookItem } from "../models/IBookItem";



const Categories  = () => {
  const {setBookResponse} = useContext<IGetBooksContext>(BooksContext);


  useEffect(() => {
    const fetchInitalData = async () => {
      
      setBookResponse([]);

      const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}')

      if(existingData) {
        console.log('existingData',existingData);
        
         const books = existingData.items.items
         console.log('books', books);
         
         setBookResponse(books)
      } else {
        try {
          const response = await getInitalBooks({subject: "fiction"})
  
          if (response){
            const bookItem = response.items
            setBookResponse(bookItem)
  
            sessionStorage.setItem('bookData', JSON.stringify(response));
            }
  
        } catch (error) {
          console.log(error);
          
      }     
      }
      

  }
  fetchInitalData();

  const fetchAllData = async () => {
     
      const subjects = categoriesArray.map((category) => category.query).flat().map((subject) => subject.replace(/\s+/g, '%'))

      console.log(subjects);
    

      try {
        const response = await getAllBooks({subjects})

        const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}')

        const updatedData = {
          ...existingData,
          items: response
        };
        sessionStorage.setItem('bookData', JSON.stringify(updatedData))

        
      }catch (error){
        console.log(error);
        
      }
    }
    
    fetchAllData();
  },[setBookResponse])

  const changeCategory = (selectedCategory: string[]) => {
    console.log("Selected category:", selectedCategory);
  
    const storedBooks = JSON.parse(sessionStorage.getItem('bookData') || '{}');
    const storedBooksArray = Array.from<IBookItem>(storedBooks.items.items)
      .filter(e => e)
      .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
       
    
      const filteredBooks = storedBooksArray.filter((book: IBookItem) => {
        const selectedCategoriesLower = selectedCategory.map(cat => cat.toLowerCase());
        const bookCategoriesLower = book.volumeInfo.categories.map(cat => cat.toLowerCase());

        return selectedCategoriesLower.some(cat => bookCategoriesLower.includes(cat));
      });
    
    console.log("Filtered books:", filteredBooks);
    setBookResponse(filteredBooks)
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
        <DisplayBooks></DisplayBooks>
      </div>
      </div>
      
    </section>
    
    </>
  )
}

export default Categories

