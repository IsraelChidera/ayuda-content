import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom';

    const features = [
        {
          name: 'Competitive exchange rates',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: GlobeAltIcon,
        },
        {
          name: 'No hidden fees',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: ScaleIcon,
        },
        {
          name: 'Transfers are instant',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: BoltIcon,
        },
        {
          name: 'Mobile notifications',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: ChatBubbleBottomCenterTextIcon,
        },
      ]

const About = () => {
    return (
        <section className="relative">

           <Navbar/>

            

            <section>
                <div className="bg-white py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-lg font-semibold text-indigo-600">Who we are</h2>
                            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                A better way to send money
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                                accusamus quisquam.
                            </p>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt>
                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white ">
                                            <feature.icon className=" h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-gray-50">
                    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ready to dive in?</span>
                            <span className="block text-indigo-600">Start your free trial today.</span>
                        </h2>

                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex rounded-md shadow">
                                <Link
                                    to="/plans-pricing"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-secondary px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                                >
                                    Get started
                                </Link>
                            </div>
                            <div className="ml-3 inline-flex rounded-md shadow">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

        </section>
    )
}

export default About