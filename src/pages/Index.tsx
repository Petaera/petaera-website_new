import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Solutions from '../components/Solutions';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
