import Carousel from "./Partials/Carousel";
import { categories } from "../arrays/categories";
const Categories  = () => {
  

  return (
    <>
    <section className="categories-container">
    <h2 className="categories-header">Boktips baserat på kategorier</h2>
    <Carousel categories={categories}></Carousel>
    </section>
    
    </>
  )
}

export default Categories

