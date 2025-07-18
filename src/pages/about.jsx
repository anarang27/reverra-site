import React from 'react';
import Header from '../components/Header';

const About = () => (
    <div className="relative bg-[#E1DFD9] min-h-screen w-full flex flex-col justify-start items-center pt-8 px-4 text-center">
        <Header showLogo={false} textColor="black" />
        <main className="flex-grow px-8 pt-12">
            <div className="absolute top-6 left-6 z-50">
                <img
                    src="/Transparent_Logo_Black.png"
                    alt="Reverra Logo"
                    className="h-28 sm:h-32"

                />
            </div>

            {/* Buttons in top-right */}
            <div className="absolute top-6 right-6 z-50 flex space-x-4 bg-white px-4 py-2 rounded-full shadow-md">
                {[
                    { label: 'Home', to: '/' },
                    { label: 'About', to: '/about' },
                    { label: 'Services', to: '/services' },
                    { label: 'Contact', to: '/contact' },
                ].map((item) => (
                    <a
                        key={item.to}
                        href={item.to}
                        className="bg-white text-black px-4 py-2 rounded-full border border-gray-300 shadow-sm hover:bg-gray-100 transition-all duration-150"
                        style={{ fontFamily: 'Instrument Serif, serif' }}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </main>

        <div className="text-center mt-6">
            {/* Who We Are Section */}
            <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-1/2 text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Instrument Serif, serif' }}>
                        Who we are
                    </h1>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Newsreader, serif' }}>
                        Powered by cutting-edge computer vision technology, our products aim to efficiently categorize waste into distinct categories with a 0% chance of human error.
                        <br /><br />
                        In the United States, we discard 79% of recyclable items each year. This statistic highlights not only the volume of waste we produce but also the extent of our reduced recycling efforts.
                        <br /><br />
                        The US Environmental Protection Agency’s (EPA) goal is to achieve a 50% recycling rate by 2050, and at Reverra, we strive to exceed that target significantly.
                        <br /><br />
                        From campuses to cities, our vision is simple: eliminate confusion, reduce contamination, and transform every disposal into a step towards a cleaner planet.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <img src="/bottle_caps.jpg" alt="About Reverra" className="rounded-lg shadow-md w-full h-auto" />
                </div>
            </div>

            {/* Founder Section */}
            <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12">
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Instrument Serif, serif' }}>
                        Meet the Founder
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Newsreader, serif' }}>
                        Hi! I’m Aayush Narang — a computer science and finance student at Virginia Tech and the founder of Reverra.
                        <br /><br />
                        I started this project after noticing how often people (me included!) were unsure about which bin to use — and how much recyclable material was ending up in the wrong place, and that simple observation evolved into a mission.
                        <br /><br />
                        Reverra was founded on the belief that waste should never be a guessing game. Whether it’s a student in a university dining hall or a visitor in a public space, our technology eliminates confusion at the bin — replacing hesitation with certainty.
                        <br /><br />
                        I believe sustainability should be simple, intuitive, and supported by smart technology. At Reverra, I aim to combine computer vision and environmental impact to help universities and cities reduce contamination and build cleaner habits — one bin at a time.
                        <br /><br />
                        Our goal is to equip every public space — campuses, airports, cities — with smart systems that turn everyday actions into environmental wins.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <img
                        src="/founder.jpeg"
                        alt="Aayush Narang"
                        className="rounded-full shadow-md w-48 h-48 object-cover mb-4"
                    />
                    <a
                        href="https://www.linkedin.com/in/aayush-narang10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                    >
                        <img src="/linkedin_logo.png" alt="LinkedIn Icon" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default About;