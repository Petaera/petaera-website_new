import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div 
          className="hero-gradient"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(37, 99, 235, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)`
          }}
        ></div>
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'animate-fade-up' : ''}`}>
          <h1 className="hero-title">
            <span className="hero-title-main">PetaEra Technologies</span>
           {/* <span className="hero-title-sub">LLP</span>*/}
          </h1>
          <p className="hero-subtitle">
            Innovating Education, Automation, and Intelligence
          </p>
          <p className="hero-description">
            Transforming the future with cutting-edge IoT solutions, AI-driven automation, 
            and comprehensive tech education programs that bridge the gap between learning and real-world application.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToNext}>
              Explore Our Solutions
              <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/*<button className="btn btn-outline" onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>*/}
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" onClick={scrollToNext}>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;