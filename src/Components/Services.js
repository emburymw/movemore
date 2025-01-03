import React, { useEffect } from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Older Adult Physiotherapy",
            description: "As we age, maintaining mobility, strength, balance, and independence becomes essential for daily living. Our goal is to help reduce the risk of falls and support an active, independent lifestyle."
        },
        {
            id: 2,
            title: "Injury Rehab",
            description: "Injuries happen and can prevent you from doing what you love. The focus is on helping you recover from injuries and prevent future ones."
        },
        {
            id: 3,
            title: "General Aches & Pains",
            description: "Whether you're dealing with chronic pain or a new unwanted ache, our services are designed to help reduce pain, restore function, and improve overall quality of life."
        },
        {
            id: 4,
            title: "Post-Fracture and Post-Surgical Rehab",
            description: "If you've recently had a fracture or a surgery, rehab is essential for an optimal recovery. Our goal is to help you gain range of motion, strength, and function to confidently return to your daily activities."
        }
    ];

    useEffect(() => {
        const servicesContainer = document.querySelector('.services-container');

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const serviceBoxes = entry.target.querySelectorAll('.service-box');
                serviceBoxes.forEach((box, index) => {
                    setTimeout(() => box.classList.add('fade-in'), index * 600);
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
            <h1>Services</h1>
            <p>We start with an in-depth assessment to create a treatment plan
                tailored to your specific needs, goals, and lifestyle. We work one-on-one to provide you with education and
                personalised exercises, and may include hands-on techniques such as joint mobilizations, soft tissue release and
                dry needling to help you move more and do more!</p>
            <div className="services-container">
                {services.map((service) => (
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