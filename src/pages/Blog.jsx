import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Blog = () => {
    return(
        <section className='relative '>
            <div>
                <Navbar/>
            </div>

            <section>
                Blog
            </section>

            <div className="w-full fixed bottom-0 left-0">
                <Footer/>       
            </div>    
        </section>
    )
}

export default Blog