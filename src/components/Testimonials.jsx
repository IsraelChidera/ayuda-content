import React from 'react';
import dots from '../assets/dots.png';
import dots2 from '../assets/dots.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {

    AOS.init();
    
  return (
    <section         
        className='mt-32 mb-4 relative testimonial py-10'
    >
        <div
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div>
                <img 
                    src={dots} 
                    alt="dot icons"
                    className='absolute top-0 left-4'
                />
            </div>

            <div className='mx-auto w-3/4 md:w-2/4'>
                <h2 className='text-darker text-4xl font-extrabold text-center'>
                    Testimonials
                </h2>

                <p className='font-medium text-darker pt-2 text-center'>
                    See what our customer has to say
                </p>

                <p 
                // className='mt-10'
                className="first-line:uppercase first-line:tracking-widest
                first-letter:text-7xl first-letter:font-bold first-letter:text-primary
                first-letter:mr-3 first-letter:float-left mt-12 text-center">
                    
                    Thank You for your service. I 
                    am very pleased with the result. 
                    I have seen exponencial growth 
                    in my business and its all 
                    thanks to your amazing service
                </p>

                <div className='text-center mt-10'>
                    <h4 className='text-lg text-darker font-bold'>
                        Ricky Aprilla
                    </h4>

                    <p className='text-sm text-darker'>
                        CEO, Varibo Hub
                    </p>
                </div>
            </div>

            <div>
                <img 
                    src={dots2} 
                    alt="dot icons"
                    className='absolute bottom-0 right-4'
                />
            </div>
        </div>
    </section>
  )
}

export default Testimonials