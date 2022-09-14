import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bars from '../assets/bars.png';
import cancel from '../assets/cancel.png';

const Navbar = () => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const onHamClick = () => {
        setOpenMobileMenu(true);        
    }

  return (
    <nav className='flex pt-6 justify-around lg:justify-between px-4 lg:px-32 items-center'>
        <p className='text-lg'>
            <Link to="/">
                <span className='italic font-bold text-primary'>Ayuda</span>content
            </Link>            
        </p>

        <div             
            className={`hidden lg:flex justify-center items-center`}
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
        </div>

        <div 
            className="lg:block hidden"
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

        {
            openMobileMenu?
            (
                <div 
                    className="mobileMenu absolute top-0 left-0 pt-10
                     h-screen lg:hidden block bg-white z-40 w-full"
                >
                    <ul   
                        className='space-y-8 text-center'              
                        style={{fontSize:'42px'}}    
                    >
                        <div 
                            className='cursor-pointer mb-6 flex justify-center items-center'
                            onClick={()=>setOpenMobileMenu(false)}   
                        >
                            <img
                                src={cancel}
                                alt="cancel icon"
                                className='text-center'
                            />            
                        </div>

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

                        <div 
                            className=""
                        >
                            <Link to="/plans-pricing">
                                <button 
                                    className="px-20 py-3 text-lg             
                                    font-semibold rounded-full border 
                                    border-purple-200 bg-primary text-white"
                                >
                                Get Started
                                </button>
                            </Link> 
                        </div>
                    </ul>
                </div>

            )
            :
            ""
        }
        

        <div 
            className='lg:hidden block cursor-pointer'
            onClick={onHamClick}    
        >
            <img
                src={bars}
                alt="hamburger icon"
                className='h-5'
            />            
        </div>

        
    </nav>
  )
}

export default Navbar