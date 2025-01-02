import React from 'react';
import natasha from "../images/Nat.jpg";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="aboutContainer">
        <img src={natasha} alt="Natasha" className="aboutImage" />
        <div className="aboutText">
          <h1>About</h1>
          <h2>Meet Natasha</h2>
          <p>
            Hello! I'm Natasha, a dedicated physiotherapist with a passion for helping individuals regain their mobility and
            return to the activities they love. I completed my undergraduate studies in Alberta and earned my Master's in
            Physiotherapy from the University of Ottawa. I have been practicing since 2017.
          </p>
          <p>
            In 2022, I made the beautiful town of Canmore my home. I truly enjoy the active lifestyle this incredible area
            offers, and I believe in promoting the same enthusiasm for movement and health in my clients.
          </p>
          <p>
            In my free time, you'll often find me trail running, skiing, or rock climbing in the stunning mountains
            surrounding Canmore. I understand the importance of staying active and the challenges that come with
            recovery, and I'm here to support you every step of the way.
          </p>
          <p>
            I offer services in both French and English!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 