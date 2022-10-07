import React from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/Layout';

const PricingPage = () => {
     
    AOS.init();

    const navigate = useNavigate();
    const handleSubscribe = () => {
        navigate("/plans-pricing/payment")
    }

  return (
    <Layout>
        <section id="#plans-pricing" className='lg:mt-20 lg:mb-32 mb-0 mt-0 pt-20 px-8 lg:px-32 pb-20'>
            <div
                data-aos="fade-up"
                // data-aos-duration="1000"
            >
                <h1 className='text-4xl'>
                    Plans {"&"} Pricing
                </h1>
                <p>
                    You can choose and manage 
                    subscriptions from here. 
                    Browse plans, start a subscription
                    at any time.
                </p>
            </div>

            <div 
                data-aos="fade-up"
                data-aos-duration="2000"
                className='mt-10 md:space-y-0 space-y-10 md:grid grid-cols-4 gap-6'
            >
                <div className='pricelist flex justify-center items-center'>
                    <div className='p-6 text-center'>
                        <h2 className='text-2xl font-extrabold'>
                            $84/Month
                        </h2>

                        <p className='mt-2 mb-8'>
                            4 Per Month @ 300
                            words ea.
                        </p>

                        <div className='flex justify-center items-center'>
                            {/* <Link to="/plans-pricing"> */}
                                <button 
                                    className="px-6 py-3 text-sm             
                                    font-semibold rounded-full border 
                                    border-purple-200 bg-primary text-white"
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
                                </button>
                            {/* </Link>  */}
                        </div>
                    </div>
                </div>

                <div className='pricelist flex justify-center items-center'>
                    <div className='p-6 text-center'>
                        <h2 className='text-2xl font-extrabold'>
                            $84/Month
                        </h2>

                        <p className='mt-2 mb-8'>
                            4 Per Month @ 300
                            words ea.
                        </p>

                        <div className='flex justify-center items-center'>
                            {/* <Link to="/plans-pricing"> */}
                                <button 
                                    className="px-6 py-3 text-sm             
                                    font-semibold rounded-full border 
                                    border-purple-200 bg-primary text-white"
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
                                </button>
                            {/* </Link>  */}
                        </div>
                    </div>
                </div>

                <div className='pricelist flex justify-center items-center'>
                    <div className='p-6 text-center'>
                        <h2 className='text-2xl font-extrabold'>
                            $84/Month
                        </h2>

                        <p className='mt-2 mb-8'>
                            4 Per Month @ 300
                            words ea.
                        </p>

                        <div className='flex justify-center items-center'>
                            {/* <Link to="/plans-pricing"> */}
                                <button 
                                    className="px-6 py-3 text-sm             
                                    font-semibold rounded-full border 
                                    border-purple-200 bg-primary text-white"
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
                                </button>
                            {/* </Link>  */}
                        </div>
                    </div>
                </div>

                <div className='pricelist flex justify-center items-center'>
                    <div className='p-6 text-center'>
                        <h2 className='text-2xl font-extrabold'>
                            $84/Month
                        </h2>

                        <p className='mt-2 mb-8'>
                            4 Per Month @ 300
                            words ea.
                        </p>

                        <div className='flex justify-center items-center'>
                            {/* <Link to="/plans-pricing"> */}
                                <button 
                                    className="px-6 py-3 text-sm             
                                    font-semibold rounded-full border 
                                    border-purple-200 bg-primary text-white"
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
                                </button>
                            {/* </Link>  */}
                        </div>
                    </div>
                </div>

                <div className='pricelist flex justify-center items-center'>
                    <div className='p-6 text-center'>
                        <h2 className='text-2xl font-extrabold'>
                            $84/Month
                        </h2>

                        <p className='mt-2 mb-8'>
                            4 Per Month @ 300
                            words ea.
                        </p>

                        <div className='flex justify-center items-center'>
                            {/* <Link to="/plans-pricing"> */}
                                <button 
                                    className="px-6 py-3 text-sm             
                                    font-semibold rounded-full border 
                                    border-purple-200 bg-primary text-white"
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
                                </button>
                            {/* </Link>  */}
                        </div>
                    </div>
                </div>

                <div className='pricelist flex justify-center items-center'>
                    <div className='p-6 text-center'>
                        <h2 className='text-2xl font-extrabold'>
                            $84/Month
                        </h2>

                        <p className='mt-2 mb-8'>
                            4 Per Month @ 300
                            words ea.
                        </p>

                        <div className='flex justify-center items-center'>
                            {/* <Link to="/plans-pricing"> */}
                                <button 
                                    className="px-6 py-3 text-sm             
                                    font-semibold rounded-full border 
                                    border-purple-200 bg-primary text-white"
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
                                </button>
                            {/* </Link>  */}
                        </div>
                    </div>
                </div>            

                <div className='pricelist flex justify-center items-center'>
                    <div className='p-6 text-center'>
                        <h2 className='text-2xl font-extrabold'>
                            $84/Month
                        </h2>

                        <p className='mt-2 mb-8'>
                            4 Per Month @ 300
                            words ea.
                        </p>

                        <div className='flex justify-center items-center'>
                            {/* <Link to="/plans-pricing"> */}
                                <button 
                                    className="px-6 py-3 text-sm             
                                    font-semibold rounded-full border 
                                    border-purple-200 bg-primary text-white"
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
                                </button>
                            {/* </Link>  */}
                        </div>
                    </div>
                </div>

                <div className='pricelist flex justify-center items-center'>
                    <div className='p-6 text-center'>
                        <h2 className='text-2xl font-extrabold'>
                            $84/Month
                        </h2>

                        <p className='mt-2 mb-8'>
                            4 Per Month @ 300
                            words ea.
                        </p>

                        <div className='flex justify-center items-center'>
                            {/* <Link to="/plans-pricing"> */}
                                <button 
                                    className="px-6 py-3 text-sm             
                                    font-semibold rounded-full border 
                                    border-purple-200 bg-primary text-white"
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
                                </button>
                            {/* </Link>  */}
                        </div>
                    </div>
                </div>

            </div>
            
        </section>
    </Layout>
  )
}

export default PricingPage