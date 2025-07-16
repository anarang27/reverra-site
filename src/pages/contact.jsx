import React from 'react';

const Contact = () => (
  <div className="absolute top-6 left-6 z-50">
        <img
          src="/Transparent_Logo_Black.png"
          alt="Reverra Logo"
          className="h-28 sm:h-32"
        />
    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
      Contact Us
    </h1>
    <p className="text-lg text-gray-600" style={{ fontFamily: 'Newsreader, serif' }}>
      We're happy to connect. Reach out via our LinkedIn in the footer!
    </p>
  </div>
);

export default Contact;