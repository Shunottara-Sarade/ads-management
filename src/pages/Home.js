import React from 'react';
//import '../../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function Home() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
