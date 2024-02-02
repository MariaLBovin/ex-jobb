import { useEffect, useState } from "react";
import { CategoriesClass } from "../../models/CategoriesClass";


  interface CarouselProps {
    categories: CategoriesClass[];
    changeCategory: (selectedCategory: string[], categoryText: string) => void,
  }
  
const Carousel = ({categories, changeCategory} :CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 760); 

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth > 760); 
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === categories.length - 1 ? 0 : (prevIndex + 1) % categories.length
        );
      };

      const prevSlide = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? categories.length - 1 : (prevIndex - 1) % categories.length
        );
      };

      const calculateIndex = (index: number) => {
        return (index + categories.length) % categories.length;
      };
    
      const renderCategories = () => {
        const circularCategories = isDesktop
        ? categories
        : [
            categories[calculateIndex(activeIndex)],
            categories[calculateIndex(activeIndex + 1)],
          ];

        return circularCategories.map((category, index) => (
          <li key={index} className="categories-slider-item">
            <button className="categories-slider-listButton" aria-label="byt kategori" onClick={() => changeCategory(category.query, category.text)}>
              <i className={category.icon}></i>
            </button>
            <p className="categories-slider-itemText">{category.text}</p>
          </li>
        ));
      };
    
      return (
        <div className="categories-slider">
          <ul className="categories-slider-list">{renderCategories()}</ul>
          <button className="categories-slider-button categories-slider-buttonPrev" aria-label="Bläddra till föregående" onClick={prevSlide}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="categories-slider-button categories-slider-buttonNext" aria-label="Bläddra till nästa"  onClick={nextSlide}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      );
}

export default Carousel