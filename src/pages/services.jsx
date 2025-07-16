import React from 'react';

const Services = () => (
  <div className="min-h-screen px-8 pt-24">
    {/* Logo */}
    <div className="absolute top-6 left-6 z-50">
      <img
        src="/Transparent_Logo_Black.png"
        alt="Reverra Logo"
        className="h-28 sm:h-32"
      />
    </div>

    {/* Content */}
    <div className="text-center mt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
        Our Services
      </h1>
      <p className="text-lg text-gray-600" style={{ fontFamily: 'Newsreader, serif' }}>
        Coming soon...
      </p>
    </div>
  </div>
);

export default Services;