import  ViteLogo from '/brand-vite.svg';
import ReactLogo from '/react.svg';
import TSLogo from '/typescript.svg';
import ScssLogo from '/brand_sass_icon.svg'
import OpenAiLogo from '/openai.svg';
import GoogleLogo from '/google.svg';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {

  return (
    <>
    <section className="about-container">
        <h1 className="about-header">Välkommen till Bokai, din digitala boktipsare!</h1>
        <div className="about-wrapper">
                <div className="about-content">
                    <h2 className='about-content-header'>Om projektet</h2>
                    <p className="about-content-text">Bokai är framtagen som ett examensarbete  inom ramen för Frontend developer-utbildningen på Medieinstitutet. Syftet med sidan är att underlätta för användaren att hitta sin nästa läsupplevelse.</p>
                </div> 
                <div className="about-tech">
                    <h2 className='about-tech-header'>Techstack</h2>
                    <ul className="about-tech-list">
                        <li className="about-tech-item">
                            <span className='about-tech-itemText'> Vite</span>
                            <img loading='lazy' src={ViteLogo} alt='vite-logo'></img>
                        </li>
                        <li className="about-tech-item">
                            <span className='about-tech-itemText'>React</span>
                            <img  loading='lazy' src={ReactLogo} alt='react-logo'></img>
                        </li>
                        <li className="about-tech-item">
                            <span className='about-tech-itemText'> Typescript</span>
                            <img loading='lazy' src={TSLogo} alt='typescript-logo'></img>
                        </li>
                        <li className="about-tech-item">
                            <span className='about-tech-itemText'>Scss</span>
                            <img loading='lazy' src={ScssLogo} alt='scss-logo'></img>
                        </li>
                        <li className="about-tech-item">
                            <span className='about-tech-itemText'>Open Ai</span>
                            <img loading='lazy' src={OpenAiLogo} alt='openAi-logo'></img>
                        </li>
                        <li className="about-tech-item">
                            <span className='about-tech-itemText'>Google Books API</span>
                            <img loading='lazy' src={GoogleLogo} alt='google-logo'></img>
                        </li>
                    </ul>
                    <p className='about-tech-text'>Läs mer om projektet på <NavLink to='https://github.com/MariaLBovin/bokai'>Github</NavLink></p> 
                </div>
            </div>
    </section>
    </>
  )
}

export default AboutPage