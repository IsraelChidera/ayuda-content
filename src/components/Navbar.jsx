import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const onHamClick = () => {
        setOpenMobileMenu(!openMobileMenu);
    }

  return (
    <nav className='flex pt-6 justify-between px-4 lg:px-32 items-center'>
        <p className='text-lg'>
            <Link to="/">
                <span className='italic font-bold text-primary'>Ayuda</span>content
            </Link>            
        </p>

        <div 
            // className='hidden'
            className={`lg:flex justify-center items-center ${openMobileMenu? "": "lg:block hidden"}`}
        >
            <ul 
                className=' lg:flex items-center space-x-10 text-darker'
                style={{fontSize:'15px'}}    
            >
                <Link to="/">
                    <li>
                        <span>
                            Home
                        </span>
                    </li>
                </Link>

                <li>
                    <a href="#">
                        Services
                    </a>
                </li>

                <li>
                    <a href="#">
                        Pricing
                    </a>
                </li>

                <li>
                    <a href="#">
                        Blog
                    </a>
                </li>
            </ul>

            <div 
                className="md:pl-24 lg:pl-48"
            >
                <Link to="/plans-pricing">
                    <button 
                        className="px-6 py-3 text-sm             
                        font-semibold rounded-full border 
                        border-purple-200 bg-primary text-white"
                    >
                    Get Started
                    </button>
                </Link> 
            </div>
        </div>

        <div 
            className='lg:hidden block cursor-pointer'
            onClick={onHamClick}    
        >
            {
                openMobileMenu?
                (<span>
                    <i className="fa-solid text-lg fa-xmark"></i>
                </span>)                
                :
                (<span>
                    <i className="fa-sharp text-lg fa-solid fa-bars-staggered"></i>
                </span>)
            }    
        </div>

        
    </nav>
  )
}

export default Navbar