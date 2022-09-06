import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {

    AOS.init();

  return (
    <section 
        data-aos="fade-up"
        data-aos-duration="1000"
        className='mt-20 text-center py-6'
    >

        <div className="px-8 md:px-0 md:w-2/4 mx-auto">
            <div className=''>
                <p className='text-primary font-semibold  mb-2 uppercase'>
                    Subscribe
                </p>
                
                <p className='font-bold text-xl'>
                    Subscribe to Get the Latest News
                    About us
                </p>

                <p className='text-xs'>
                    Please drop your e-mail below to 
                    get daily update about what we do
                </p>

                <div className='mt-6 flex justify-center items-center'>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter Your Email Address"
                            className='py-2 px-4 rounded-xl border
                            border-darker w-full'
                        />
                    </form>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Subscribe