import React from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/Layout';

const PricingPage = () => {
     
    AOS.init();

    const navigate = useNavigate();
    const handleSubscribe = () => {
        navigate("/payment")
    }

  return (
    <Layout>
        <section className='lg:mt-0 lg:mb-32 mb-0 mt-0 pt-20 px-8 lg:px-32 pb-20'>
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
                    <br/>Browse plans, start a subscription
                    at any time.
                </p>
            </div>

            <section 
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-10 mb-20 md:space-y-0 space-y-10 md:grid grid-cols-3 gap-6"
            >

                <div className="feature-one py-8 px-6 border border-darker">
                    <div className="text-center">
                        <p className="text-2xl mt-2 mb-2 font-semibold">
                            Basic
                        </p>

                        <p className="text-4xl font-bold">
                            $0.06
                        </p>

                        <p className="text-sm">
                            per word for orders within 10,000 words
                        </p>
                    </div>

                    <button className='mt-6 mb-4 w-full text-sm text-primary border-2 bg-white  border-primary  py-3 px-6'>
                        Start Plan
                    </button>

                    <div className="text-sm mt-6 space-y-4 text-text">
                        <p>
                            5 social profiles
                        </p>

                        <p>
                            5 scheduled post per profile
                        </p>

                        <p>
                            400+ templates
                        </p>

                        <p>
                            5 social profiles
                        </p>
                    </div>
                </div>

                <div className="feature-two text-white py-8 px-6 bg-primary">
                    <div className="text-center">
                        <p className="text-2xl mt-2 mb-2 font-semibold">
                            Basic
                        </p>

                        <p className="text-4xl font-bold">
                            $0.06
                        </p>

                        <p className="text-sm">
                            per word for orders within 10,000 words
                        </p>
                    </div>

                    <button className='mt-6 mb-4 w-full text-sm text-primary border-2
                     bg-white border-white  py-3 px-6'
                     >
                        Start Plan
                    </button>

                    <div className="text-sm mt-6 space-y-4 text-white">
                        <p>
                            5 social profiles
                        </p>

                        <p>
                            5 scheduled post per profile
                        </p>

                        <p>
                            400+ templates
                        </p>

                        <p>
                            5 social profiles
                        </p>
                    </div>
                </div>

                <div className="feature-three py-8 px-6 border border-darker">
                    <div className="text-center">
                        <p className="text-2xl mt-2 mb-2 font-semibold">
                            Basic
                        </p>

                        <p className="text-4xl font-bold">
                            $0.06
                        </p>

                        <p className="text-sm">
                            per word for orders within 10,000 words
                        </p>
                    </div>

                    <button className='mt-6 mb-4 w-full text-sm text-primary border-2 bg-white  border-primary  py-3 px-6'>
                        Start Plan
                    </button>

                    <div className="text-sm mt-6 space-y-4 text-text">
                        <p>
                            5 social profiles
                        </p>

                        <p>
                            5 scheduled post per profile
                        </p>

                        <p>
                            400+ templates
                        </p>

                        <p>
                            5 social profiles
                        </p>
                    </div>
                </div>

            </section>
            
            
        </section>
    </Layout>
  )
}

export default PricingPage