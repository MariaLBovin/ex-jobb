import Carousel from "./Partials/Carousel";
import { categories } from "../arrays/categories";
import DisplayBooks from "./Partials/DisplayBooks";
import { useContext, useEffect} from "react";
import { getAllBooks, getInitalBooks } from "../services/CategoryCollector";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";

const Categories  = () => {
  const {setBookResponse} = useContext<IGetBooksContext>(BooksContext);

 
  useEffect(() => {
    const fetchInitalData = async () => {
      
      setBookResponse({ kind: "", totalItems: 0, items: [] });
      try {
        const response = await getInitalBooks({subject: "fiction"})

        if (response){

          setBookResponse(response)
          sessionStorage.setItem('bookData', JSON.stringify(response));
          }

      } catch (error) {
        console.log(error);
        
    }     

  }
  fetchInitalData();

  const fetchAllData = async () => {
      const subjects= ["juvenile%fiction", "true%crime", "poetry", "biography%autobiography" ]
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



  return (

    <>
    <section className="categories-container">
      <h2 className="categories-header">Boktips baserat på kategorier</h2>
      <div className="categories-inner">
      <div className="categories-slider-wrapper">
      <Carousel categories={categories}></Carousel>
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

