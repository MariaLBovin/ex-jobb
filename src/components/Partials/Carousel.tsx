import { useEffect, useState } from "react";

interface Category {
    id: number;
    icon: string;
    text: string;
    query: string[]
  }
  
  interface CarouselProps {
    categories: Category[];
    changeCategory: (selectedCategory: string[]) => void,
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
        console.log(activeIndex +2);
        
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
            <button className="categories-slider-listButton" onClick={() => changeCategory(category.query)}>
              <span className="material-symbols-outlined">{category.icon}</span>
            </button>
            <p className="categories-slider-itemText">{category.text}</p>
          </li>
        ));
      };
    
      return (
        <div className="categories-slider">
          <ul className="categories-slider-list">{renderCategories()}</ul>
          <button className="categories-slider-button categories-slider-buttonPrev" onClick={prevSlide}>
            <span className="material-symbols-outlined">navigate_before</span>
          </button>
          <button className="categories-slider-button categories-slider-buttonNext" onClick={nextSlide}>
            <span className="material-symbols-outlined">navigate_next</span>
          </button>
        </div>
      );

}

export default Carousel