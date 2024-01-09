import Carousel from "./Partials/Carousel";
import { categories } from "../arrays/categories";
import { useContext, useEffect, useState } from "react";
import { getBooksByCategory } from "../services/CategoryCollector";
import { IBookItem } from "../models/IBookItem";
import { IBookList } from "../models/IBookList";


const Categories  = () => {
  const [books, setBooks] = useState<IBookList[]>([])

  useEffect(() => {
    const fetchInitalData = async () => {
      try {
        const response = await getBooksByCategory({subject: "fiction"})

        if (response){
          
          const booksdata = response.items.map((item) => item)
          console.log(booksdata);
          
        }
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchInitalData();
  },[])

  return (

    <>
    <section className="categories-container">
      <div className="categories-wrapper">
      <Carousel categories={categories}></Carousel>
      </div>
      <div className="categories-content">
      <h2 className="categories-content-header">Boktips baserat på kategorier</h2>
      <div className="categories-content-wrapper">
        <ul className="categories-content-list">
          {books.map((book) => (
            <li>{book.title}</li>
          ))}
        </ul>
      </div>
      </div>
    
    
    </section>
    
    </>
  )
}

export default Categories

