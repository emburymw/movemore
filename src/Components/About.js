import React, { useContext } from 'react';
import natasha from "../images/NatPortrait.jpg";
import { LanguageContext } from '../context/LanguageContext';

const About = () => {
    const { translations } = useContext(LanguageContext);
    
    return (
        <section id="about" className="section about">
            <div className="aboutContainer">
                <img src={natasha} alt="Natasha" className="aboutImage" />
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

export default About; 