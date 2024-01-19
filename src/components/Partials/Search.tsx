
import axios from "axios";

import { FormEvent, useContext, useState } from "react";
import { getSingleBook } from "../../services/SingleBookCollector";
import { Link } from "react-router-dom";
import { BooksContext, IGetBooksContext } from "../../context/IGetBooksContext";
import { IBookItem } from "../../models/IBookItem";


const Search =  () => {
  const {setBookResponse} =useContext<IGetBooksContext>(BooksContext)
  const [title, setTitle] = useState('')
  const [pText, setPText] = useState(`Vill du få tips om vad du ska läsa härnäst? 
Skriv in titeln på din favoritbok eller den bok du senast läst så 
  genereras ett tips till dig baserat på ditt sökord.`)
  const [bookData, setBookdata] = useState<IBookItem []| null>(null)
  const [searchPerformed, setSearchPerformed] = useState(false)

  const testApi = async (e: FormEvent) => {
    e.preventDefault()

    const API_KEY = import.meta.env.VITE_API2_KEY;
    const BASE_URL= import.meta.env.VITE_BASE2_URL

    const APIBody = {
      model: "gpt-3.5-turbo-instruct",
      prompt: `'Rekommendera en bok baserat på ${title}. Svara bara med titel och författare. '`,
      temperature: 0.1,
      max_tokens: 15,
      top_p: 1,
    }

    const response = await axios.post(BASE_URL, APIBody, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + API_KEY,
        }
    });
    const data = response.data
    const text = data.choices[0].text

    const fetchBook = async () => {
        const startIndex = text.indexOf('"') + 1;
        const endIndex = text.indexOf('"', startIndex);
        if (startIndex !== -1 && endIndex !== -1) {
          const title = text.substring(startIndex, endIndex); 
          const author = text.substring(endIndex + 5);

        try {
          const response = await getSingleBook({title: title, author: author})

          if(response.totalItems > 0){
            console.log(response);
            const books = response.items.filter(e => e)
            setBookdata(books)
            setBookResponse((prevbooks) => [...prevbooks,...books])
            
          }
            
          }catch(error) {
            console.log(error);
        }
       }
       setSearchPerformed(true)
    }
     
    setPText(`Jag rekommenderar att du läser ${text}. `)
    setTitle('');
    console.log(title);
    
    fetchBook()
    }
    
    const book = bookData?.[0]

  return (
    <>
    <div className="search-wrapper">
          <h1 className="search-header">Vad ska jag läsa nu?</h1>
            <article className="search-wrapper-inner">
              <p className="search-text">
              {pText}
            </p>
            {searchPerformed && !book ? (
            <p className="search-text-fake">Det här verkar vara en bok som OpenAi har hittat på... Om du gillar titeln så kanske du ska skriva den?! Eller prova sök igen.</p>
          ) : (
            book && (
              <Link to={`/book/${book.id}`}>
                <button className='search-text-button'>Läs mer om boken</button>
              </Link>
            )
          )}
            </article>
            <form className="search-form" onSubmit={testApi}>
                <input className="search-input" placeholder="Ange titel på din favoritbok" onChange={(e) =>setTitle(e.target.value)}></input>
                <button className="search-button" type='submit'>Få tips</button>
            </form>
        </div>
    </>
  )
}

export default Search


