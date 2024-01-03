
const Search = () => {
  return (
    <>
    <section className="search-container">
        <h1 className="search-header">Vad ska jag läsa nu?</h1>
        <div className="search-wrapper">
            <article className="search-text">
            Vill du få tips om vad du ska läsa härnäst? 
            Skriv in titeln på din favoritbok eller den bok du senast läst så 
            genereras ett tips till dig baserat på ditt sökord.
            </article>
            <form className="search-form">
                <input className="search-input" placeholder="Ange titel på din favoritbok"></input>
                <button className="search-button">Få tips</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Search