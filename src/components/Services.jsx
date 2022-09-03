import React from 'react';
import activityicon from '../assets/activityicon.png';
import hearticon from '../assets/hearticon.png';
import workicon from '../assets/workicon.png';

const Services = () => {
  return (
    <section className='mt-8 px-14 lg:px-32 services py-16'>
        
        <div className='w-auto md:w-96'>
            <p className='text-primary font-semibold  mb-2 uppercase'>
                WHAT WE DO
            </p>
            
            <p className='font-bold text-xl'>
                We provide the perfect solution to
                your business growth
            </p>
        </div>

        <section className='mt-20 md:grid grid-cols-3 gap-4'>

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
                    We help identify the best ways
                    to improve your business
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
                    We help identify the best ways
                    to improve your business
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
                    Improve Business Model
                </h6>

                <p className='text-sm'>
                    We help identify the best ways
                    to improve your business
                </p>
            </div>

        </section>

        <section className='mt-24'>
            <div className='flex justify-between items-center text-sm'>
                <p className='text-darker text-xl font-semibold 
                mb-2 uppercase'>
                    How it works
                </p>  

                <button className='underline decoration-solid hover:no-underline'>
                    See pricing <span>
                    <i class="fa-solid fa-arrow-right"></i>    
                    </span>    
                </button>                              
            </div>

            <section className='md:grid grid-cols-3 gap-4 mt-8'>

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