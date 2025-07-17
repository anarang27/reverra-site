import React from 'react';
import Header from '../components/Header';
import GooeyNav from '../components/GooeyNav/GooeyNav';

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];

const Contact = () => (
    <div className="relative bg-[#E1DFD9] min-h-screen w-full flex flex-col justify-start items-center pt-[12%] px-4 text-center">
        <Header showLogo={false} />
        <div className="absolute top-10 right-10 z-50">
            <GooeyNav
                items={navItems}
                animationTime={400}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                timeVariance={200}
                colors={[5, 6, 5, 6, 7, 5]}
            />
        </div>
        <main className="flex-grow px-8 pt-24">
            <div className="absolute top-6 left-6 z-50">
                <img
                    src="/Transparent_Logo_Black.png"
                    alt="Reverra Logo"
                    className="h-28 sm:h-32"
                />
            </div>

            <div className="text-center mt-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
                    Contact Us
                </h1>
                <p className="text-lg text-gray-600" style={{ fontFamily: 'Newsreader, serif' }}>
                    We're happy to connect. Reach out via our LinkedIn in the footer!
                </p>
            </div>
        </main>
    </div>
);

export default Contact;