import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <section className="relative">

           <Navbar/>

            <div className="mb-10 mt-6 text-black text-center">
                <h1 className="text-black text-4xl">
                    About
                </h1>
            </div>

            <section className="mb-20 mx-auto w-4/5 text-center">
                <p>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has s
                    urvived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially 
                    unchanged. It was popularised in the 1960s with the 
                    release of Letraset sheets containing Lorem Ipsum p
                    assages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of 
                    Lorem Ipsum   
                </p>
            </section>

            <Footer/>

        </section>
    )
}

export default About