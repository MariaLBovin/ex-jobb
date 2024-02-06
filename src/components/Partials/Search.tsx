import { FormEvent, useContext, useState } from "react";
import { getBookRecommendation, getSingleBook } from "../../services/BooksCollector";
import { NavLink } from "react-router-dom";
import { BooksContext, IGetBooksContext } from "../../context/IGetBooksContext";
import { IBookItem } from "../../models/IBookItem";


const Search =  () => {
  const {setBookResponse} =useContext<IGetBooksContext>(BooksContext);
  const [searchString, setSearchString] = useState('');
  const [error, setError] =useState(false);
  
  const [bookData, setBookdata] = useState<IBookItem []| null>(null);
  const [searchPerformed, setSearchPerformed] =  useState(false);
  
  const initalText = `Vill du få tips om vad du ska läsa härnäst? 
  Skriv in titeln på din favoritbok eller den bok du senast läst så 
  genereras ett tips till dig baserat på ditt sökord.`;

  const [pText, setPText] = useState(initalText);
 
  const getRecommendation = async(e:FormEvent) => {
    e.preventDefault();

    if(searchString.length < 2) {
      setError(true);
      return;
    }
    try {
      const response = await getBookRecommendation(searchString);
      if (response) {

        const text= response.choices[0].text;

        const fetchBook = async () => {
          const startIndex = text.indexOf('"') + 1;
          const endIndex = text.indexOf('"', startIndex);
          if (startIndex !== -1 && endIndex !== -1) {
            const extractedTitle = text.substring(startIndex, endIndex); 
            const author = text.substring(endIndex + 5);
  
          try {
            const response = await getSingleBook({extractedTitle: extractedTitle, author: author});
  
            if(response.totalItems > 0){
              const books = response.items.filter(e => e)
              setBookdata(books);
              setBookResponse((prevbooks) => [...prevbooks,...books]);
              setSearchPerformed(true);
            } else{
              setBookdata(null)
            }
            setSearchString('')
            }catch(error) {
              console.log(error);
          }
         }
      }
      setPText(`Jag rekommenderar att du läser ${text}. `);
      fetchBook();
      setError(false);
      }
    }catch (error) {
      console.log(error);
    } 
  } 
    const book = bookData?.[0];

  return (
    <>
    <div className="search-wrapper">
          <h1 className="search-header">Vad ska jag läsa nu?</h1>
            <article className="search-wrapper-inner">
              <p className="search-text">
              {pText}
              </p>
              {searchPerformed && book ? (
          <NavLink to={`/bok/${book.id}`}>
            <button className='search-text-button' aria-label="Läs mer">Läs mer om boken</button>
          </NavLink>
        ) : searchPerformed && !book ? (
          <p className="search-text-fake">Det här verkar vara en bok som OpenAi har hittat på... Om du gillar titeln så kanske du ska skriva den?! Eller prova sök igen.</p>
        ) : null}
            </article>
            <form className="search-form" onSubmit={(e) => getRecommendation(e)}>
                <input 
                className={`search-input ${error && 'error'}`} 
                placeholder={error ? "Du måste ange minst två bokstäver" : "Ange titel på din favoritbok"} 
                value={searchString}
                onChange={(e) =>setSearchString( e.target.value)}></input>
                <button className="search-button" type='submit' aria-label="Få tips">Få tips</button>
            </form>
        </div>
    </>
  )
}

export default Search


