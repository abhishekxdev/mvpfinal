import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecentWork from './components/RecentWork';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MouseMoveEffect from './components/MouseMoveEffect';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.src = '/images/backart2.jpg';
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed background image */}
      <div 
        className={`fixed inset-0 w-screen h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          backgroundImage: 'url(/images/backart2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <MouseMoveEffect />
        <Navbar />
        <main>
          <Hero />
          <RecentWork />
          <WhyUs />
          <HowItWorks />
          <Portfolio />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;