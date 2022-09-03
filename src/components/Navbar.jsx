import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex pt-6 justify-between px-4 lg:px-32 items-center'>
        <p className='text-lg'>
            <span className='italic font-bold text-primary'>Ayuda</span>content
        </p>

        <ul 
            className='hidden lg:flex items-center space-x-10 text-darker'
            style={{fontSize:'15px'}}    
        >
            <li>
                <a href="#">
                    Home
                </a>
            </li>

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
            <button 
                className="px-6 py-2 text-sm             
                font-semibold rounded-full border 
                border-purple-200 bg-primary text-white"
            >
                Get Started
            </button>
        </div>
    </nav>
  )
}

export default Navbar