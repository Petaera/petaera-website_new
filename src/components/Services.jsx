import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'iot',
      title: 'IoT Hardware Innovation',
      description: 'Custom IoT devices including fingerprint-based attendance systems, access control devices, and smart sensors for various applications.',
      image: '/lovable-uploads/036d3317-76f7-4dd7-919d-1a324fd44be2.png',
      icon: '🔧',
      features: [
        'Custom PCB Design',
        'Embedded Systems',
        'Sensor Integration',
        'Wireless Communication'
      ]
    },
    {
      id: 'ai',
      title: 'AI + Automation Systems',
      description: 'Automatic Number Plate Recognition (ANPR) - AI-driven number plate detection and logging used in PetaLog and PetaParking for car washes, fuel stations, and gated facilities.',
      image: '/lovable-uploads/c811e893-2ab8-4cb3-b82b-e3d471803e73.png',
      icon: '🤖',
      features: [
        'Machine Learning Models',
        'Computer Vision',
        'Predictive Analytics',
        'Process Automation'
      ]
    },
    {
      id: 'education',
      title: 'Internships & Education',
      description: 'Comprehensive training programs offering hands-on experience in real projects, industry-relevant skills, and career development.',
      image: '/lovable-uploads/f350f4b1-a234-4327-822e-136c0b2d48d5.png',
      icon: '🎓',
      features: [
        'Industry Mentorship',
        'Live Project Training',
        'Skill Certification',
        'Career Placement'
      ]
    },
    {/*{
      id: 'consulting',
      title: 'Tech Consulting & Solutions',
      description: 'Enterprise-grade custom development solutions across industries, from concept to deployment with ongoing support.',
      image: '/lovable-uploads/834740ad-eeee-43df-85e1-473f29b708f9.png',
      icon: '💼',
      features: [
        'Strategic Planning',
        'Custom Development',
        'System Integration',
        'Technical Support'
      ]
    }*/}
  ];

  const whyChooseUs = [
    {
      title: 'Innovation First',
      description: 'Cutting-edge technology solutions that push the boundaries of what\'s possible.',
      icon: '🚀'
    },
    {
      title: 'Affordable Tech',
      description: 'Cost-effective solutions that don\'t compromise on quality or performance.',
      icon: '💰'
    },
    {
      title: 'Fully Customizable',
      description: 'Tailored solutions that perfectly fit your unique business requirements.',
      icon: '⚙️'
    },
    {
      title: 'Expert Support',
      description: 'Professional team providing comprehensive support throughout your journey.',
      icon: '🎯'
    }
  ];

  return (
    <section id="services" className="services section" ref={sectionRef}>
      <div className="container">
        <div className={`services-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2 className="section-title">Key Activities</h2>
          <p className="section-subtitle">
            Our comprehensive range of services covers every aspect of modern technology development, 
            from hardware innovation to educational programs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${isVisible ? 'animate-fade-up' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-icon">{service.icon}</div>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-feature">
                      <svg className="feature-check" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={`why-choose-us ${isVisible ? 'animate-fade-up' : ''}`}>
          <h3 className="why-title">Why Choose PetaEra Technologies?</h3>
          
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`why-card ${isVisible ? 'animate-fade-up' : ''}`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="why-icon">{item.icon}</div>
                <h4 className="why-card-title">{item.title}</h4>
                <p className="why-card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;