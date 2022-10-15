import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <section className='mt-10 bg-secondary text-white px-8 lg:px-32 pt-10 pb-4 md:pb-8'>
        <div>

            <div 
                className='text-center md:flex justify-between items-center 
                pb-10 border-b border-b-slate-800'
            >
                <p className='text-lg md:block mb-10 md:mb-0 flex items-center justify-center'>
                    <img src={logo} alt="ayuda logo" className="rounded-full bg-white w-32 h-32"/>
                </p>

                <div className='md:my-0 my-6 md:block flex items-center justify-center'>
                    <ul className='flex items-center space-x-6'>
                        <li>
                            <span 
                                
                                className='rounded-full p-2 bg-primary'                                  
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </span>
                        </li>

                        <li>
                            <span 
                                
                                className='rounded-full p-2 bg-primary'      
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </span>
                        </li>

                        <li>
                            <span 
                                
                                className='rounded-full p-2 bg-primary'      
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <p className='mt-10 text-center text-sm'>
                &copy;Ayuda Content 2022 - All Rights Reserved
            </p>
        </div>
    </section>
  )
}

export default Footer