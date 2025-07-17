import React from 'react';
import Header from '../components/Header';

const Services = () => (
  <div className="relative bg-[#E1DFD9] min-h-screen w-full flex flex-col justify-start items-center pt-[12%] px-4 text-center">
    <Header />
    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
      Our Services
    </h1>
    <p className="text-lg text-gray-600" style={{ fontFamily: 'Newsreader, serif' }}>Coming soon...</p>
  </div>
);

export default Services;