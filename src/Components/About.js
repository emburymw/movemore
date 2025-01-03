import React from 'react';
import natasha from "../images/Nat.jpg";

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="aboutContainer">
                <img src={natasha} alt="Natasha" className="aboutImage" />
                <div className="aboutText">
                    <h1><b>Hello! I'm Natasha</b></h1>
                    <p>
                        I'm a physiotherapist based in Canmore, and am passionate about helping individuals reach their goals and
                        enjoy an active lifestyle. I completed my undergraduate studies in Alberta and earned my Master's in
                        Physiotherapy from the University of Ottawa. I have been practicing since 2017.
                    </p>
                    <p>
                        In my free time, you'll often find me trail running, skiing, or rock climbing in the beautiful mountains
                        surrounding Canmore. I truly enjoy the active lifestyle this incredible area offers, and I believe in promoting the
                        same enthusiasm for movement and health in my clients.
                    </p>
                    <p>
                        I offer services in both French and English and look forward to working with you!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About; 