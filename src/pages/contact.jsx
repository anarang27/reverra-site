import React from 'react';
import Header from '../components/Header';

const Contact = () => (
  <div className="relative bg-[#E1DFD9] min-h-screen w-full flex flex-col justify-start items-center pt-[12%] px-4 text-center">
    <Header />
    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
      Contact Us
    </h1>
    <p className="text-lg text-gray-600" style={{ fontFamily: 'Newsreader, serif' }}>
      We're happy to connect. Reach out via our LinkedIn in the footer!
    </p>
  </div>
);

export default Contact;