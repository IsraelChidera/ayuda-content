import React from 'react';
import heroimage from '../assets/heroimage.png';

const Hero = () => {
  return (
    <section className='pt-20 px-32 flex justify-between items-center'>
      <div className='flex-1'>
        <h1 className='leadig text-darker font-bold text-6xl'>
          We Design Impactful Digital
          <span className='text-primary'>
            Products
          </span>
        </h1>

        <p className='mt-6 mb-4 text-xl'>
          Help find solutions with intitutive 
          and in accordance with client business 
          goals. we provide a high-quality services.
        </p>

        <div>
            <button 
                className="px-6 py-3 text-sm             
                font-semibold rounded-full border 
                border-purple-200 bg-primary text-white"
            >
                Get Started
            </button>
        </div>
      </div>

      <div className='flex-1'>
        <img src={heroimage} alt="hero image"/>
      </div>
    </section>
  )
}

export default Hero