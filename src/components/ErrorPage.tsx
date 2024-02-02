import { NavLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <>
    <section className="error-container">
        <div className="error-wrapper">
            <div className="error-img">
            <img loading='lazy' className="error-img-src" src="/noun-stack-of-books.svg"></img>
            </div>
            
            <div className="error-inner">
                <h1 className="error-inner-heading">404</h1>
                <p className="error-inner-text">Sidan du sökte efter verkar tyvärr inte finnas.</p>
                <NavLink to='/' className="error-inner-link">
                    <button className="error-inner-linkButton" aria-label='navigate'>Gå tillbaka till startsidan</button>
                </NavLink>
            </div>
            
        </div>
        
    </section>
    </>
  )
}

export default ErrorPage