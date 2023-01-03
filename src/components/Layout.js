import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <section>
            <div className='bg-white fixed top-0 left-0 w-full z-10'>
              < Navbar /> 
            </div>
            {/* <div>
              < Navbar /> 
            </div> */}

            <div className='mt-32'>
              {children}
            </div>
            
            <div>
              < Footer />
            </div>
        </section>
    )
}

export default Layout