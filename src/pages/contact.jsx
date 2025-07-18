import React from 'react';
import Header from '../components/Header';

const Contact = () => (
  <div className="relative bg-[#E1DFD9] min-h-screen w-full flex flex-col justify-start items-center pt-8 px-4 text-center">
    {/* Black logo and right-aligned nav buttons */}
    <Header showLogo={true} logoType="black" />

    <main className="flex-grow px-8 pt-12">
      {/* Page content */}
      <div className="text-center mt-20">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          Contact Us
        </h1>
        <p
          className="text-lg text-gray-600"
          style={{ fontFamily: 'Newsreader, serif' }}
        >
          We're happy to connect. Reach out via our LinkedIn in the footer!
        </p>
      </div>
    </main>
  </div>
);

export default Contact;