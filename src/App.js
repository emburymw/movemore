import React from "react";
import { Link } from "react-scroll";
import "./App.css";
import logo from "./images/Mountains.png";
import natasha from "./images/Nat.jpg";

const App = () => {
  return (
    <div>
      <header className="navbar">
        <nav>
          <div className="logo">
            <img
              src={logo} alt="Mobile Physio Clinic Logo"
            />
          </div>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="fees" smooth={true} duration={500}>
                Fees
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="section home">
        <div className="home-content">
          <h1>Movemore Canmore Physiotherapy</h1>
          <p>Physiotherapy services in the comfort of your home.</p>
          <br />
          <p>Move More, Do More, Canmore.</p>

          <br />
          <Link to="contact" smooth={true} duration={500}>
            Book Now
          </Link>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="aboutContainer">
          <img src={natasha} alt="Natasha" className="aboutImage" />
          <div className="aboutText">
            <h2>About</h2>
            <h3>Meet Natasha</h3>
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

      <section id="services" className="section services">
        <h2>Services</h2>

      </section>

      <section id="fees" className="section fees">
        <h2>Fees</h2>
        <p>Here's an overview of our pricing for services offered:</p>
        <br />
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Duration</th>
              <th>Cost</th>
            </tr>
            <tr>
              <td>Phone Consult</td>
              <td>5-10 minutes</td>
              <td>FREE</td>
            </tr>
            <tr>
              <td>Initial Assessment</td>
              <td>1 hour</td>
              <td>$135</td>
            </tr>
            <tr>
              <td>Standard Session</td>
              <td>30 minutes</td>
              <td>$95</td>
            </tr>
            <tr>
              <td>Standard Session</td>
              <td>45 minutes</td>
              <td>$115</td>
            </tr>
            <tr>
              <td>Standard Session</td>
              <td>60 minutes</td>
              <td>$135</td>
            </tr>

          </thead>
        </table>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>Phone: (780) 265-2536</p>
        <p>Email: info@mobilephysio.ca</p>
        <p>Service Areas: Canmore, Banff, & Cochrane</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 MoveMore Canmore. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
