import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom';

    const features = [
        {
          name: 'Best-of-the-best seasoned writers',
          description:
            `We are a group of writers here to aid all your 
            content needs. Ayuda literally translates to help 
            and all our writers are aligned with the vision of 
            helping our clients produce the best content in their niche.`,
          icon: GlobeAltIcon,
        },
        {
          name: 'Quality content',
          description:
            `We have created content for thousands of customers over 
            many years and we still feel as eager to offer services as 
            we were on day 1. 
            Variety of Niches We have created and continue to create 
            content for clients in a wide range of niches. 
            From health to travel, to entertainment and even sports, 
            `,
          icon: ScaleIcon,
        },
        {
          name: 'Go-to content agency for any industry',
          description:
            `Ayuda is the go-to content agency for any industry. 
            We are here to help Other content agencies might have super-talented 
            writers or tons of experience, but what really sets Ayuda apart from 
            them is our zeal to help create awesome content for our clients.             
            `,
          icon: BoltIcon,
        },
        {
          name: 'Tons of Experience',
          description:
            `Ayuda writers are not just very talented writers, 
            but we are also very experienced. If we need to do hours of 
            research or work late into the night, 
            we are happy to do so as long as you get exactly what you need.`,
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
                        <div className="lg:text-center mb-8">
                            <h2 className="text-lg font-semibold text-indigo-600 text-center">
                                About us
                            </h2>
                            <p className="mt-2 text-3xl text-center font-bold leading-8 
                                tracking-tight text-gray-900 sm:text-4xl"
                            >
                                What Makes Ayuda So Special?
                            </p>
                            <p className="mt-4 text-lg text-gray-500 font-semibold text-center md:text-left">
                                Ayuda translates to mean "help" and that is what we are here to do. Our agency 
                                has undergone a 4-year facultative process underground before this final 
                                upgrade as a public brand offering nothing short of quality to our many 
                                clienteles. Our offers are now open to you regardless of your location 
                                anywhere in the world.
                            </p>

                            <p className="mt-4 text-lg text-gray-500 font-semibold text-center md:text-left">
                                Our seasoned writers are well-trained and will be on hand to work in line 
                                with your vision for your business through the content they curate. 
                            </p>

                            <p className="mt-4 text-lg text-gray-500 font-semibold text-center md:text-left">
                                We have a specific writer for every niche and as a result, we have got your 
                                back. So, there is no need for you to think far and wide beyond us to write 
                                n certain topics. We understand the essence of versatility in this business 
                                and prefer to cause you less stress by ensuring we can offer pretty much 
                                everything you need without you being actively involved in the process 
                            </p>

                            <p className="mt-4 text-lg text-gray-500 font-semibold text-center md:text-left">
                                The quality of our content speaks for itself. There is truly no 
                                bounds to our team's proficiency and diction necessary to write 
                                error-free and original content that will blow your mind. We have a 
                                special unit of editors who would let nothing slide to see that the 
                                content you need for your blogs, ebooks, and landing pages come out 
                                perfectly.
                            </p>

                            <p className="mt-4 text-lg text-gray-500 font-semibold text-center md:text-left">
                                We do not experiment with your work by giving tasks to novice writers who 
                                lack the required experience. Each of our writers has at least 3-4 years 
                                of writing experience under their belts.
                            </p>
                            
                        </div>

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

            <Footer/>

        </section>
    )
}

export default About