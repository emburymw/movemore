import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            setSubmitStatus('Message sent successfully!');
            form.current.reset();
        }, (error) => {
            setSubmitStatus('Failed to send message. Please try again.');
            console.error(error);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    // Canmore coordinates
    const center = {
        lat: 51.0884,
        lng: -115.3479
    };

    const mapStyles = {
        height: "100%",
        width: "100%"
    };
    const mapOptions = {
        styles: [
            {
                stylers: [
                    { saturation: -90 },
                    { lightness: 25 }
                ]
            }
        ],
        disableDefaultUI: true,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    };

    return (
        <section id="contact" className="section contact">
            <h1><b>Contact Me</b></h1>
            <div className="contactContainer">
                <div className="contactLeftSide">
                    <div className="contactInfo">
                        <p>Services are provided in Canmore and surrounding areas.</p>
                        <p><b>Phone:</b> (780) 265-2536</p>
                        <p><b>Email:</b> info@movemorecanmore.ca</p>
                    </div>
                    <div className="contactForm">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="formGroup">
                                <input 
                                    type="text" 
                                    name="user_name"
                                    placeholder="Your Name" 
                                    required 
                                />
                            </div>
                            <div className="formGroup">
                                <input 
                                    type="email" 
                                    name="user_email"
                                    placeholder="Your Email" 
                                    required 
                                />
                            </div>
                            <div className="formGroup">
                                <input 
                                    type="tel" 
                                    name="user_phone"
                                    placeholder="Your Phone (optional)" 
                                />
                            </div>
                            <div className="formGroup">
                                <textarea 
                                    name="message"
                                    placeholder="Your Message" 
                                    rows="5" 
                                    required
                                ></textarea>
                            </div>
                            {submitStatus && (
                                <div className={`submitStatus ${submitStatus.includes('Failed') ? 'error' : 'success'}`}>
                                    {submitStatus}
                                </div>
                            )}
                            <button 
                                type="submit" 
                                className="submitButton"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="contactMap">
                    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={10}
                            center={center}
                            options={mapOptions}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </section>
    );
};

export default Contact; 