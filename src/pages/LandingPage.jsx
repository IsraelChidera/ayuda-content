import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Subscribe from '../components/Subscribe';
import Testimonials from '../components/Testimonials';
import Layout from '../components/Layout';

const LandingPage = () => {
  return (

    <Layout>
      <section className="mt-24 relative">
      <div>
        < Hero />
      </div>      

      <div>
        < Projects />
      </div> 

      <div>
        < Services />
      </div> 

      <div>
        < Testimonials />
      </div> 

      <div>
        < Subscribe />
      </div> 
           
    </section>
    </Layout>
  )
}

export default LandingPage