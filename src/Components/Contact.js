import React from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Contact = () => {
  const mapStyles = {
    height: "600px",
    width: "100%",
    maxWidth: "600px",
    margin: "20px auto",
    '@media (max-width: 768px)': {
      height: "400px",
      maxWidth: "100%",
      margin: "10px 0"
    }
  };

  const defaultCenter = {
    lat: 51.0884,
    lng: -115.3479
  };

  const mapOptions = {
    styles: [
      {
        stylers: [
          { saturation: -100 },
          { lightness: 45 },
          { gamma: 0.8 }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          { lightness: 80 },
          { saturation: -100 }
        ]
      },
      {
        featureType: "water",
        stylers: [
          { lightness: 40 }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          { visibility: "off" }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },
    ],
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <section id="contact" className="section contact">
      <h1>Contact Me</h1>
      <div className="contactContainer">
        <div className="contactLeftSide">
          <div className="contactInfo">
            <p><b>Service Areas:</b> Canmore, Banff, & surrounding areas</p>
            <p><b>Phone:</b> (780) 265-2536</p>
            <p><b>Email:</b> info@movemorecanmore.ca</p>
          </div>
          <div className="contactForm">
            <form>
              {/* TODO add email functionality */}
              <div className="formGroup">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="formGroup">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="formGroup">
                <input type="tel" placeholder="Your Phone (optional)" />
              </div>
              <div className="formGroup">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submitButton">Send Message</button>
            </form>
          </div>
        </div>
        <div className="contactMap">
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={10.7}
              center={defaultCenter}
              options={mapOptions}
            />
          </LoadScript>
        </div>
      </div>
    </section>
  );
};

export default Contact; 