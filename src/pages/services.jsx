import React from 'react';
import Header from '../components/Header';

const Services = () => (
    <div className="relative bg-[#E1DFD9] min-h-screen w-full flex flex-col justify-start items-center pt-8 px-4 text-center">
        <Header showLogo={false} />

        <main className="flex-grow px-8 pt-12">
            {/* Logo in top-left */}
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

            {/* Main content */}
            <div className="text-center mt-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
                    Services
                </h1>
                <p className="text-lg text-gray-600" style={{ fontFamily: 'Newsreader, serif' }}>
                    Coming soon...
                </p>
            </div>
        </main>
    </div>
);

export default Services;