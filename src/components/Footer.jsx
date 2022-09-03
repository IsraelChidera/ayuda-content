import React from 'react';

const Footer = () => {
  return (
    <section className='mt-10 bg-secondary text-white px-32 pt-10 pb-8'>
        <div>

            <div 
                className='flex justify-between items-center 
                pb-10 border-b border-b-slate-800'
            >
                <p className='text-lg'>
                    <span className='italic font-bold text-primary'>Ayuda</span>content
                </p>

                <div>
                    <ul className='flex items-center space-x-6'>
                        <li>
                            <a 
                                href='#'
                                className='rounded-full p-2 bg-primary'                                  
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>

                        <li>
                            <a 
                                href='#'
                                className='rounded-full p-2 bg-primary'      
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>

                        <li>
                            <a 
                                href='#'
                                className='rounded-full p-2 bg-primary'      
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
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