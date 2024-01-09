import { useEffect, useState } from "react";

interface Category {
    id: number;
    icon: string;
    text: string;
  }
  
  interface CarouselProps {
    categories: Category[];
  }

const Carousel = ({categories} :CarouselProps) => {

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
          <li key={index} className="categories-list-item">
            <button className="categories-list-button">
              <span className="material-symbols-outlined">{category.icon}</span>
            </button>
            <p className="categories-list-itemText">{category.text}</p>
          </li>
        ));
      };
    
      return (
        <div className="categories-slider">
          <ul className="categories-list">{renderCategories()}</ul>
          <button className="categories-button categories-button-prev" onClick={prevSlide}>
            <span className="material-symbols-outlined">navigate_before</span>
          </button>
          <button className="categories-button categories-button-next" onClick={nextSlide}>
            <span className="material-symbols-outlined">navigate_next</span>
          </button>
        </div>
      );

}

export default Carousel