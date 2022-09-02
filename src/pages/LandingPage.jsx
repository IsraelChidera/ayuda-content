import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Subscribe from '../components/Subscribe'
import Testimonials from '../components/Testimonials'

const LandingPage = () => {
  return (
    <section>
        < Navbar />
        < Hero />
        < Projects />
        < Services />
        < Testimonials />
        <Subscribe/>
    </section>
  )
}

export default LandingPage