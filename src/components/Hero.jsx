import React from 'react';
import heroimage from '../assets/heroimage.png';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <section  
      id="home"
      className='pt-10 px-8 lg:px-32 lg:grid grid-cols-2 gap-10'
    >
      <div className='herocontent flex justify-center items-center lg:mb-0 mb-6'>
        <div className=" ">
          <h1 className='text-center md:text-left text-darker font-bold text-4xl md:text-5xl'>
            STOP THE SEARCH FOR GREAT CONTENT. {" "}
            <span className='text-primary'>
              AYUDA IS ALL YOU NEED. 
            </span>
          </h1>

          <p className='mt-6 mb-4 md:text-lg'>
            We are here for anything that requires 
            piecing together words to create a masterpiece. 
            Ayuda Content Agency is the best choice and 
            we’re ready to prove that to you! 
          </p>

          <div className=' md:block w-full md:w-auto '>
              <Link to="/plans-pricing">
                <button 
                    className="px-6 py-3 w-full md:w-auto text-sm             
                    font-semibold rounded-full border 
                    border-purple-200 bg-primary text-white"
                >
                  Get Started
                </button>
              </Link>              
          </div>
        </div>
      </div>

      <div className='heroimage xl:flex-1'>
        <img 
          src={heroimage} 
          alt="picture of a girl holding a laptop" 
          className='h-auto'
        />
      </div>
    </section>
  )
}

export default Hero