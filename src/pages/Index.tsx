import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Solutions from '../components/Solutions';
import ComingSoon from '../components/ComingSoon';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  return (
    <div className="App">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <ComingSoon />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
