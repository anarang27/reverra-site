import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ showLogo = true }) {
  return (
    <header className="absolute top-6 w-full flex justify-between items-center px-8 z-50">
      {/* Logo */}
      {showLogo && (
        <div>
          <img
            src="/transparent_logo.png"
            alt="Reverra Logo"
            className="h-28 sm:h-32"
          />
        </div>
      )}

      {/* Navigation */}
      <nav
        className="flex space-x-10 text-lg"
        style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F6D0' }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}