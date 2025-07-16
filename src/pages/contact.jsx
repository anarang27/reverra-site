import React from 'react';
import Header from '../components/Header';

const Contact = () => (
  <div className="relative min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow flex flex-col items-center justify-center text-center px-8 pt-24">
      <img
        src="/Transparent_Logo_Black.png"
        alt="Reverra Logo"
        className="h-28 sm:h-32 mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
        Contact Us
      </h1>
      <p className="text-lg text-gray-600" style={{ fontFamily: 'Newsreader, serif' }}>
        We're happy to connect. Reach out via our LinkedIn in the footer!
      </p>
    </main>
    <footer className="mt-auto"></footer>
  </div>
);

export default Contact;