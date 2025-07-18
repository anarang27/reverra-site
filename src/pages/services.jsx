import React from 'react';
import Header from '../components/Header';

const Services = () => (
    <div className="relative bg-[#E1DFD9] min-h-screen w-full flex flex-col justify-start items-center pt-8 px-4 text-center">
        <Header showLogo={false} />
        <main className="flex-grow px-8 pt-12">
            <div className="absolute top-6 left-6 z-50">
                <img
                    src="/Transparent_Logo_Black.png"
                    alt="Reverra Logo"
                    className="h-28 sm:h-32"
                />
            </div>

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