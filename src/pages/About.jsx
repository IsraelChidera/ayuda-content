import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom';
import Layout from '../components/Layout';
import logo from '../assets/logo.png';

    const features = [
        {
          name: 'Best-of-the-best seasoned writers',
          description:
            `Ayuda translates to mean "help" and that is what we are here to do. Our agency 
            has undergone a 4-year facultative process underground before this final 
            upgrade as a public brand offering nothing short of quality to our many 
            clienteles. Our offers are now open to you regardless of your location 
            anywhere in the world.`,
          icon: GlobeAltIcon,
        },
        {
          name: 'Quality content',
          description:
            `The quality of our content speaks for itself. There is truly no 
            bounds to our team's proficiency and diction necessary to write 
            error-free and original content that will blow your mind. We have a 
            special unit of editors who would let nothing slide to see that the 
            content you need for your blogs, ebooks, and landing pages come out 
            perfectly.
            `,
          icon: ScaleIcon,
        },
        {
          name: 'Go-to content agency for any industry',
          description:
            `
            We have a specific writer for every niche and as a result, we have got your 
            back. So, there is no need for you to think far and wide beyond us to write 
            n certain topics. We understand the essence of versatility in this business 
            and prefer to cause you less stress by ensuring we can offer pretty much 
            everything you need without you being actively involved in the process             
            `,
          icon: BoltIcon,
        },
        {
          name: 'Tons of Experience',
          description:
            `We do not experiment with your work by giving tasks to novice writers who 
            lack the required experience. Each of our writers has at least 3-4 years 
            of writing experience under their belts. 
            Our seasoned writers are well-trained and will be on hand to work in line 
            with your vision for your business through the content they curate. `,
          icon: ChatBubbleBottomCenterTextIcon,
        },
      ]

const About = () => {
    return (
        <Layout>
            <section>        

            <section>
                <div className="bg-white py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">                        

                        <h2 className="text-lg font-semibold text-indigo-600 text-center">
                            About us
                        </h2>
                        <p className="mt-2 text-3xl text-center font-bold leading-8 
                            tracking-tight text-gray-900 sm:text-4xl"
                        >
                            What Makes Ayuda So Special?
                        </p>

                        <div className="mt-20">
                            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt>
                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white ">
                                            <feature.icon className=" h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                            {feature.name}
                                        </p>
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
                            <span className="block  text-center md:text-left">
                                What Makes Ayuda So Special?
                            </span>
                            <span className="block text-indigo-600 text-center md:text-left">
                                Start your free trial today.
                            </span>
                        </h2>

                        <div className="mt-8 flex md:justify-start justify-center items-center lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex rounded-md shadow">
                                <Link
                                    to="/plans-pricing"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-secondary px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                                >
                                    Get started
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>            

            </section>
        </Layout>
        
    )
}

export default About