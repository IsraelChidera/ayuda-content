import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex pt-4 justify-between px-4 lg:px-32 items-center'>
        <p className='text-lg'>
            <Link to="/">
                <span className='italic font-bold text-primary'>Ayuda</span>content
            </Link>            
        </p>

        <ul 
            className='hidden lg:flex items-center space-x-10 text-darker'
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

        <div>
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
    </nav>
  )
}

export default Navbar