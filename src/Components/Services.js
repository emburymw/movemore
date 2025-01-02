import React, { useEffect } from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Older Adult Physiotherapy",
      description: "As we age, maintaining mobility, strength, balance, and independence becomes essential for daily living. Our geriatric physiotherapy services are designed to help older adults regain and preserve their physical function."
    },
    {
      id: 2,
      title: "Sports Injury Rehab",
      description: "Whether you're a weekend warrior or an avid athlete, injuries can sideline your performance. Our sports physiotherapy services focus on helping you recover from injuries and prevent future ones."
    },
    {
      id: 3,
      title: "General Aches & Pains",
      description: "We provide comprehensive treatment for musculoskeletal pain, which can affect any area of the body. Our services are designed to reduce pain, restore function, and improve overall quality of life."
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
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-box">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 