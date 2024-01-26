import Carousel from "./Partials/Carousel";
import { categoriesArray } from "../arrays/categoriesArray";
import DisplayBooks from "./Partials/DisplayBooks";
import { useContext, useState} from "react";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";
import { changeCategory } from "../utils/changeCategoryUtils";

const Categories = () => {
  const { setBookResponse, setSelectedCategory } = useContext<IGetBooksContext>(BooksContext);
  const [categoryText, setCategoryText] = useState<string>('Skönlitteratur');

  const displayCategory = (selectedCategory: string[], categoryText: string) => {
    const filteredBooks = changeCategory(selectedCategory);

    setBookResponse(filteredBooks);
    setCategoryText(categoryText);
    setSelectedCategory(selectedCategory);
  };

  return (
    <>
      <section className="categories-container">
        <h2 className="categories-header">Boktips baserat på kategorier</h2>
        <div className="categories-inner">
          <div className="categories-slider-wrapper">
            <Carousel categories={categoriesArray} changeCategory={displayCategory}></Carousel>
          </div>
          <div className="categories-content-wrapper">
            <DisplayBooks categoryText={categoryText}></DisplayBooks>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;


