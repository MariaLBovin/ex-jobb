import { NavLink } from "react-router-dom";
import { aboutArray } from "../arrays/aboutArray"

const AboutPage = () => {
    const aboutInfo = aboutArray[0]; 

  return (
    <>
    <section className="about-container">
        <div className="about-wrapper">
            <div className="about-content">
                <h1 className="about-content-header">Hej!</h1>
                <p className="about-content-text">{aboutInfo.about}</p>
                <p className="about-content-text">För att skapa sidan har jag använt mig av {aboutInfo.techstack}.</p>
                <p className="about-content-text">Hoppas du gillar sidan! Om du vill se fler projekt jag har gjort kan du besöka min  
                <span className="about-content-textSpan">
                <NavLink to={aboutInfo.webpage} className='about-content-link'> portfolio</NavLink>
                </span>
                </p> 
                <div className="about-content-contact">
                    <div className="about-content-contactText">
                    <p className="">Eller kontakta mig på mail</p>
                    <NavLink to={aboutInfo.contact} className='about-content-link'>
                        <button className="about-content-linkButton">
                        <span className="material-symbols-outlined">contact_mail</span>
                        </button>
                    </NavLink>
                    </div>
                    <div className="about-content-contactText">
                    <p className="about-content-text">eller via LinkedIn</p>
                    <NavLink to={aboutInfo.linkeIn} className="about-content-link">
                        <button className="about-content-linkButton">
                            <img src="/linkedIn.png"></img>
                        </button>
                    </NavLink>
                    </div>
                
                    
                </div>
                
                
            </div>
            <div className="about-img">
                <img className="about-img-src" src={aboutInfo.img}></img>
            </div>
            
        </div>
        
    </section>
    </>
  )
}

export default AboutPage