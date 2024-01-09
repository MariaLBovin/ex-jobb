
const Search = () => {
  return (
    <>
    <section className="search-container">
        <div className="search-hero">
          <img className="search-hero-img" src="/bookstack.png"></img>
        </div>
        <div className="search-wrapper">
          <h1 className="search-header">Vad ska jag läsa nu?</h1>
            <article className="search-wrapper-inner">
              <p className="search-text">
            Vill du få tips om vad du ska läsa härnäst? 
            Skriv in titeln på din favoritbok eller den bok du senast läst så 
            genereras ett tips till dig baserat på ditt sökord.
            </p>
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