import Carousel from "./Partials/Carousel";
import { categories } from "../arrays/categories";
const Categories  = () => {
  

  return (
    <>
    <section className="categories-container">
      <div className="categories-wrapper">
      <Carousel categories={categories}></Carousel>
      </div>
      <div className="categories-content">
      <h2 className="categories-content-header">Boktips baserat på kategorier</h2>
      </div>
    
    
    </section>
    
    </>
  )
}

export default Categories

