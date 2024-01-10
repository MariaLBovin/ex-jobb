import Carousel from "./Partials/Carousel";
import { categories } from "../arrays/categories";
import DisplayBooks from "./Partials/DisplayBooks";
import { useContext, useEffect} from "react";
import { getBooksByCategory } from "../services/CategoryCollector";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";

const Categories  = () => {
  const {setBookResponse} = useContext<IGetBooksContext>(BooksContext);

 
  useEffect(() => {
    const fetchInitalData = async () => {

      setBookResponse({ kind: "", totalItems: 0, items: [] });
      try {
        const response = await getBooksByCategory({subject: "fiction"})

        if (response){

          setBookResponse(response)

        }
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchInitalData();
    
  },[setBookResponse])



  return (

    <>
    <section className="categories-container">
      <div className="categories-wrapper">
      <Carousel categories={categories}></Carousel>
      </div>
      <div className="categories-content">
      <h2 className="categories-content-header">Boktips baserat på kategorier</h2>
      <div className="categories-content-wrapper">
        <DisplayBooks></DisplayBooks>
      </div>
      </div>
    
    
    </section>
    
    </>
  )
}

export default Categories

