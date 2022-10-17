import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bars from '../assets/bars.png';
import cancel from '../assets/cancel.png';
import logo from '../assets/logo.png';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const onHamClick = () => {
        setOpenMobileMenu(true);        
    }

  return (
    <nav className='flex justify-between lg:justify-between px-6 lg:px-32 items-center'>
        <p className='text-lg'>
            <Link to="/">
                <img src={logo} alt="ayuda logo" className="w-32 h-32"/>
            </Link>            
        </p>

        <div             
            className={`hidden lg:flex justify-center items-center`}
        >
            <ul 
                className=' lg:flex items-center space-x-10 text-darker'
                style={{fontSize:'15px'}}    
            >                
                <HashLink smooth to="/#home">
                    Home
                </HashLink>

                <li className="cursor-pointer">                    
                    <HashLink smooth to="/#services">
                        Services
                    </HashLink>
                </li>

                <li className="cursor-pointer">                    
                    <HashLink smooth to="/#testimonial">
                        Testimonials
                    </HashLink>
                </li>

                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>

                <li>
                    <Link to="/blog">
                        Blog
                    </Link>
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
                        style={{fontSize:'36px'}}    
                    >
                        <div 
                            className='cursor-pointer mb-16 flex justify-center items-center'                             
                        >
                            <i className="fa fa-times text-center h-3 w-3" 
                            aria-hidden="true" onClick={()=>setOpenMobileMenu(false)}></i>                            
                        </div>

                        <HashLink 
                            smooth to="/#home"
                            onClick={()=>setOpenMobileMenu(false)}    
                        >
                            Home
                        </HashLink>

                        <li 
                            className="cursor-pointer"                            
                        > 
                            <HashLink 
                                smooth to="/#services"
                                onClick={()=>setOpenMobileMenu(false)}      
                            >
                                Services
                            </HashLink>
                        </li>

                        <li 
                            className="cursor-pointer"                         
                        > 
                            <HashLink 
                                smooth to="/#testimonial"
                                onClick={()=>setOpenMobileMenu(false)}     
                            >
                                Testimonials
                            </HashLink>
                        </li>

                        <li>
                            <Link 
                                to="/about"
                                onClick={()=>setOpenMobileMenu(false)}    
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/blog"
                                onClick={()=>setOpenMobileMenu(false)}    
                            >
                                Blog
                            </Link>
                        </li>

                        <div                             
                        >
                            <Link 
                                to="/#plans-pricing"
                                onClick={()=>setOpenMobileMenu(false)}    
                            >
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