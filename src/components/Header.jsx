import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ showLogo = true }) {
  return (
    <>
      {/* Logo top-left */}
      {showLogo && (
        <div className="absolute top-6 left-6 z-50">
          <img
            src="/transparent_logo.png"
            alt="Reverra Logo"
            className="h-28 sm:h-32"
          />
        </div>
      )}

      {/* Navigation top-right */}
      <nav
        className="absolute top-6 right-6 z-50 flex space-x-6 text-lg"
        style={{ fontFamily: 'Instrument Serif, serif', color: '#F8F6D0' }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}