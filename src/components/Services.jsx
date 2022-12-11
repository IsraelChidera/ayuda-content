import React from 'react';
import activityicon from '../assets/activityicon.png';
import hearticon from '../assets/hearticon.png';
import workicon from '../assets/workicon.png';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    AOS.init();
    
  return (
    <section 
        className='mt-8 px-8 lg:px-32 services py-16' 
        id="services"
    >
        
        <div 
            data-aos="fade-up"
            data-aos-duration="1000"
            className='w-auto md:w-96'            
        >
            <p className='text-primary font-semibold  mb-2 uppercase'>
                WHAT WE DO
            </p>
            
            <p className='font-bold text-xl'>
                We are a team of passionate and talented writers 
                and we bring you excellent solutions to your existing 
                content structure. Ayuda is just the perfect upgrade 
                that you need.
            </p>
        </div>

        <section 
            data-aos="fade-up"
            data-aos-duration="3000"
            className='mt-20 md:grid grid-cols-3 gap-4'
        >

            <div>
                <div className='mb-2'>
                    <img 
                        src={activityicon} 
                        alt="activity icon"
                        className='rounded-2xl p-4 bg-primary'
                    />
                </div>

                <h6 className='mb-2 font-semibold text-lg'>
                    Grow Your Business
                </h6>

                <p className='text-sm'>
                    Our content will expand the scope of 
                    your business with elegantly thought-out 
                    writeups.
                </p>
            </div>

            <div className='md:my-0 my-14'>
                <div className='mb-2'>
                    <img 
                        src={hearticon} 
                        alt="heart icon"
                        className='rounded-2xl p-4 bg-primary'
                    />
                </div>

                <h6 className='mb-2 font-semibold text-lg'>
                    Improve brand loyalty
                </h6>

                <p className='text-sm'>
                    We will help to retain your customers 
                    by answering many of the questions they 
                    may have about your brand and products.
                </p>
            </div>

            <div>
                <div className='mb-2'>
                    <img 
                        src={workicon} 
                        alt="work icon"
                        className='rounded-2xl p-4 bg-primary'
                    />
                </div>

                <h6 className='mb-2 font-semibold text-lg'>
                    Generate leads and make sales
                </h6>

                <p className='text-sm'>
                    We help to write on ideas that show 
                    customers why they need your 
                    products/services 
                </p>
            </div>

        </section>

        <section             
            className='mt-24'            
        >
            <div 
                data-aos="fade-up"
                data-aos-duration="1000"
                className='flex justify-between items-center text-sm'
            >
                <p className='text-darker text-xl font-semibold 
                mb-2 uppercase'>
                    How it works
                </p>  

                <Link to="plans-pricing">
                    <button className='underline decoration-solid hover:no-underline'>
                        See pricing <span>
                        <i class="fa-solid fa-arrow-right"></i>    
                        </span>    
                    </button>  
                </Link>                                             
            </div>

            <section 
                data-aos="fade-up"
                data-aos-duration="3000"
                className='md:grid grid-cols-3 gap-4 mt-8'
            >

                <div>
                    <div className=''>
                        <i className="fa-2x text-primary
                        p-4 fas fa-2x fa-save"></i>
                    </div>

                    <div>
                        <h6 className='mb-1 mt-4 font-semibold text-lg'>
                            Submit a topic
                        </h6>

                        <p className='text-sm'>
                            We get basic details on your desired 
                            topic and assign it an experienced writer. 
                        </p>
                    </div>
                </div>

                <div className='md:my-0 my-14'>
                    <div className=''>
                        <i className="
                        text-primary p-4 fa-2x
                        fa-solid fa-file-word"></i>
                    </div>

                    <div>
                        <h6 className='mb-1 mt-4 font-semibold text-lg'>
                            Writing
                        </h6>

                        <p className='text-sm'>
                            After your writer has researched and 
                            written your content, we deliver the 
                            final product to you.
                            We deliver a minimum of 4 articles each month. 
                        </p>
                    </div>
                </div>

                <div>
                    <div className=''>
                        <i className="text-primary p-4 fa-2x 
                        fa-solid fa-file-circle-check"></i>                        
                    </div>

                    <div>
                        <h6 className='mb-1 mt-4 font-semibold text-lg'>
                            Unlimited Revision
                        </h6>

                        <p className='text-sm'>
                            We offer unlimited revisions to make sure you are satisfied with the final content we have writtens
                        </p>
                    </div>
                </div>

            </section>
        </section>

    </section>
  )
}

export default Services