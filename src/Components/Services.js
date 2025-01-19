import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Services = () => {
    const { translations } = useContext(LanguageContext);

    useEffect(() => {
        const servicesContainer = document.querySelector('.services-container');

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const serviceBoxes = entry.target.querySelectorAll('.service-box');
                serviceBoxes.forEach((box, index) => {
                    setTimeout(() => box.classList.add('fade-in'), index * 800);
                });

                observer.unobserve(entry.target);
            });
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(servicesContainer);

        return () => observer.unobserve(servicesContainer);
    }, []);

    return (
        <section id="services" className="section services">
            <h1>{translations.services.title}</h1>
            <p>{translations.services.introduction}</p>
            <div className="services-container">
                {translations.services.servicesList.map((service) => (
                    <div key={service.id} className="service-box">
                        <h3>{service.title}</h3>
                        <hr />
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services; 