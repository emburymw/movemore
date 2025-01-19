import React, { useState, useRef, useContext } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import emailjs from '@emailjs/browser';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { translations } = useContext(LanguageContext);

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
            <h1><b>{translations.contact.title}</b></h1>
            <div className="contactContainer">
                <div className="contactLeftSide">
                    <div className="contactInfo">
                        <p>{translations.contact.location}</p>
                        <p><b>{translations.contact.labels.phone}:</b> {translations.contact.phone}</p>
                        <p><b>{translations.contact.labels.email}:</b> {translations.contact.email}</p>
                    </div>
                    <div className="contactForm">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="formGroup">
                                <input 
                                    type="text" 
                                    name="user_name"
                                    placeholder={translations.contact.form.namePlaceholder}
                                    required 
                                />
                            </div>
                            <div className="formGroup">
                                <input 
                                    type="email" 
                                    name="user_email"
                                    placeholder={translations.contact.form.emailPlaceholder}
                                    required 
                                />
                            </div>
                            <div className="formGroup">
                                <input 
                                    type="tel" 
                                    name="user_phone"
                                    placeholder={translations.contact.form.phonePlaceholder}
                                />
                            </div>
                            <div className="formGroup">
                                <textarea 
                                    name="message"
                                    placeholder={translations.contact.form.messagePlaceholder}
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
                                {isSubmitting ? translations.contact.form.submitting : translations.contact.form.submitButton}
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

export default React.memo(Contact); 