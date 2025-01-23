import React, { useContext, lazy } from 'react';
import natasha from "../images/Nat.jpg";
import { LanguageContext } from '../context/LanguageContext';

// Lazy load images
const OptimizedImage = lazy(() => import('./OptimizedImage'));

const About = () => {
    const { translations } = useContext(LanguageContext);
    
    return (
        <section id="about" className="section about">
            <meta name="description" content={translations.about.title} />
            <meta name="keywords" content="physiotherapy, Canmore, about Natasha, home physio, Bow Valley, Banff" />
            <div className="aboutContainer">
                <OptimizedImage 
                    src={natasha} 
                    alt="Natasha" 
                    className="aboutImage"
                    width={450}
                    height={600}
                />
                <div className="aboutText">
                    <h1><b>{translations.about.title}</b></h1>
                    <p>{translations.about.paragraph1}</p>
                    <p>{translations.about.paragraph2}</p>
                    <p>{translations.about.paragraph3}</p>
                </div>
            </div>
        </section>
    );
};

export default React.memo(About); 