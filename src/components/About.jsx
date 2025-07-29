import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('vision');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate-fade-left' : ''}`}>
            <h2 className="section-title">About PetaEra Technologies</h2>
            <p className="about-description">
              PetaEra Technologies LLP is a forward-thinking company transforming education and automation 
              by building real-world tech solutions across industries. We specialize in creating systems 
              that empower institutions and businesses to thrive in the digital age.
            </p>
            <p className="about-description">
              Our expertise spans IoT hardware innovation, AI-driven automation systems, and comprehensive 
              educational programs that bridge the gap between theoretical knowledge and practical application.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Working Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Students Trained</div>
              </div>
              {/* <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Industry Partners</div>
              </div> */}
            </div>
          </div>

          <div className={`about-visual ${isVisible ? 'animate-fade-right' : ''}`}>
            <div className="visual-container">
              <img 
                src="/lovable-uploads/834740ad-eeee-43df-85e1-473f29b708f9.png" 
                alt="Team Meeting" 
                className="about-image"
              />
              <div className="visual-overlay">
                <div className="tech-icons">
                  <div className="tech-icon">IoT</div>
                  <div className="tech-icon">AI</div>
                  <div className="tech-icon">ML</div>
                  <div className="tech-icon">Web</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`vision-mission ${isVisible ? 'animate-fade-up' : ''}`}>
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'vision' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
            <button 
              className={`tab ${activeTab === 'mission' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'vision' && (
              <div className="tab-panel animate-fade-up">
                <h3>Our Vision</h3>
                <p>
                  To become a global leader in bridging education and real-world application through technology. 
                  We envision a future where innovative solutions seamlessly integrate with everyday operations, 
                  making advanced technology accessible and practical for everyone.
                </p>
              </div>
            )}
            
            {activeTab === 'mission' && (
              <div className="tab-panel animate-fade-up">
                <h3>Our Mission</h3>
                <p>
                  To build affordable, scalable solutions that empower people and businesses with modern technology. 
                  We are committed to delivering cutting-edge IoT devices, AI automation systems, and comprehensive 
                  educational programs that create lasting impact across industries.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;