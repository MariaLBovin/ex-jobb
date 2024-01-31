import Carousel from "./Partials/Carousel";
import { categoriesArray } from "../arrays/categoriesArray";
import DisplayBooks from "./Partials/DisplayBooks";
import { useContext} from "react";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";
import { changeCategory } from "../utils/changeCategoryUtils";

const Categories = () => {
  const { setBookResponse, setSelectedCategory, setSelectedCategoryText } = useContext<IGetBooksContext>(BooksContext);
  

  const displayCategory = (selectedCategory: string[], categoryText: string) => {
    const filteredBooks = changeCategory(selectedCategory);

    sessionStorage.setItem('books', JSON.stringify(filteredBooks));
    sessionStorage.setItem('categoryText', JSON.stringify(categoryText));
    sessionStorage.setItem('selectedCategory', JSON.stringify(selectedCategory));

    setBookResponse(filteredBooks);
    setSelectedCategoryText(categoryText);
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
            <DisplayBooks></DisplayBooks>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;


