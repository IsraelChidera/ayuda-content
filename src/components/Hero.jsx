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
      </div>

      <div className='flex-1'>
        <img src={heroimage} alt="hero image"/>
      </div>
    </section>
  )
}

export default Hero