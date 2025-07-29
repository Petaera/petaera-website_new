import React, { useEffect, useRef, useState } from 'react';
import './Solutions.css';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const solutions = [
      /*
  {
    id: 'petascan',
    title: 'PetaScan / PetaTag',
    subtitle: 'Smart Attendance System',
    description: 'Biometric and RFID-based attendance tracking for institutions and offices with real-time monitoring and seamless integration.',
    image: '/lovable-uploads/37d1db48-fe33-4508-b1f0-890ce17db017.png',
    logo: '/lovable-uploads/f0a9a1df-2155-43b9-978c-5ab5d2544416.png',
    features: ['Biometric Recognition', 'RFID Technology', 'Real-time Logs', 'Scalable Architecture'],
    gradient: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)'
  },
  */
    {
      id: 'petaparking',
      title: 'PetaParking',
      subtitle: 'Smart Parking Manager',
      description: 'Automated parking lot management with ANPR technology, real-time space tracking, and intelligent billing systems.',
      image: '/lovable-uploads/9b771bef-2835-4e84-aa23-deee60912ed2.png',
      logo: '/lovable-uploads/9ce02001-66c8-4e23-8042-e642d481fe41.png',
      features: ['ANPR Technology', 'Real-time Tracking', 'Revenue Analysis', 'Multi-branch Access'],
      gradient: 'linear-gradient(135deg, #6b7280 0%, #374151 100%)',
      link: 'https://peta-parking-hub-landing.lovable.app/' // 👈 Added link
    },
    {
      id: 'petalog',
      title: 'PetaLog',
      subtitle: 'Vehicle Log & Management',
      description: 'Comprehensive vehicle tracking and management system for car washes, fuel pumps, and industrial facilities.',
      image: '/lovable-uploads/68c9334a-a8ab-4c68-85a8-f2571c49a70c.png',
      logo: '/lovable-uploads/7a985817-5d2e-4406-8ea7-20c759f8c13d.png',
      features: ['Vehicle Tracking', 'Service Management', 'Multi-branch Dashboard', 'Analytics & Reports'],
      gradient: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
      link: 'https://log.petaera.com'
    },
    {
      id: 'techfusion',
      title: 'Tech Fusion',
      subtitle: 'Internships & Learning',
      description: 'Hands-on training programs and internships in Web Development, PCB Design, Verilog etc.',
      image: '/lovable-uploads/c811e893-2ab8-4cb3-b82b-e3d471803e73.png',
      logo: '/lovable-uploads/5b52810b-b966-43eb-9a4e-38ee92988029.png',
      features: ['Industry Certificates', 'Job-ready Skills', 'Personalized Mentorship', 'Real Project Experience'],
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      link: 'https://techfusionedu.in'
    }
  ];

  return (
    <section id="solutions" className="solutions section" ref={sectionRef}>
      <div className="container">
        <div className={`solutions-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions designed to transform your business operations 
            and educational experiences through innovation and automation.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`solution-card ${isVisible ? 'animate-fade-up' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-header">
                <div 
                  className="card-image-container"
                  style={{ background: solution.gradient }}
                >
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="card-image"
                  />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <h4>{solution.title}</h4>
                      <p>{solution.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="card-title-container">
                  <img src={solution.logo} alt={`${solution.title} logo`} className="solution-logo" />
                  <div>
                    <h3 className="card-title">{solution.title}</h3>
                    <p className="card-subtitle">{solution.subtitle}</p>
                  </div>
                </div>
                <p className="card-description">{solution.description}</p>

                <div className="card-features">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-tag">
                      <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link to={solution.link} className="card-button">
  Learn More
  <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
</Link>
              </div>

              <div 
                className={`card-glow ${hoveredCard === solution.id ? 'card-glow-active' : ''}`}
                style={{ background: solution.gradient }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;