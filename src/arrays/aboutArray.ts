import { AboutClass } from "../models/AboutClass";

export const aboutArray: AboutClass[] = [
    new AboutClass ( 
        'Maria Larsson Bovin',
        `Välkommen till Bokai. Den här sidan är ett examensarbete från Frontend developer-utbildningen på Medieinstitutet. 
        Jag som har skapat sidan heter Maria Larsson Bovin och jag är en tidigare kommunikationsnörd gone kodnörd och alltid boknörd. 
        Jag har försökt lösa ett av mina egna stora problem, nämligen att hitta vad jag ska läsa härnäst. 
        Sidan består av två tipskomponenter, ett AI-genererat sök där du kan få förslag baserat på vad du läst tidigare 
        och ett antal generella kategorier där du kan hitta senaste böckerna i varje genre. 
        `,
        'maria.bovin@gmail.com',
        'https://marialbovin.github.io/portfolio-2023/#/',
        'me.png',
        'Vite, React, Typescript, ESLint, Prettier, Google Books API, OpenAI API',
        'https://www.linkedin.com/in/mariabovin/'
    )
   
];