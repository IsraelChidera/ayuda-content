import React from 'react';
import completedicon from '../assets/completedicon.png';
import ratingicon from '../assets/ratingicon.png';
import timelineicon from '../assets/timelineicon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    AOS.init();

  return (
    <section className='my-10 px-8 lg:px-32 projects p-20'>
        <div className='block md:grid grid-cols-3 gap-4'>

            <div 
                data-aos="fade-up"
                className='flex justify-center items-center text-center'
            >
                <div>
                    <div className='flex justify-center items-center'>
                        <img 
                            src={completedicon} 
                            alt="completed project icon"
                        />
                    </div>
                    <p className='text-sm mt-2 mb-4'>
                        Completed Projects
                    </p>

                    <h4 className='text-primary text-3xl font-extrabold'>
                        100 +
                    </h4>
                </div>
            </div>

            <div 
                data-aos="fade-up"
                className='my-12 md:my-0 flex justify-center items-center text-center'
            >
                <div>
                    <div className='flex justify-center items-center'>
                        <img 
                            src={ratingicon} 
                            alt="completed project icon"
                        />
                    </div>
                    <p className='text-sm mt-2 mb-4'>
                        Customer Satisfaction
                    </p>

                    <h4 className='text-primary text-3xl font-extrabold'>
                        100 + Clients
                    </h4>
                </div>
            </div>

            <div 
                data-aos="fade-up"
                data-aos-duration="2000"
                className='flex justify-center items-center text-center'
            >
                <div>
                    <div className='flex justify-center items-center'>
                        <img 
                            src={timelineicon} 
                            alt="completed project icon"
                        />
                    </div>
                    <p className='text-sm mt-2 mb-3'>
                        Years in Business
                    </p>

                    <h4 className='text-primary text-3xl font-extrabold'>
                        2 years
                    </h4>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Projects