import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Subscribe from '../components/Subscribe';
import Testimonials from '../components/Testimonials';

const LandingPage = () => {
  return (
    <section className="relative">      
      < Hero />
      < Projects />
      < Services />
      < Testimonials />
      < Subscribe />
      
    </section>
  )
}

export default LandingPage