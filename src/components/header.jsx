import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ showLogo = true }) {
  const location = useLocation();

  return (
    <div className="absolute top-6 left-6 right-6 z-50 flex justify-between items-center w-full px-6">
      {/* Logo */}
      {showLogo && (
        <img
          src="/transparent_logo.png"
          alt="Reverra Logo"
          className="h-28 sm:h-32"
        />
      )}

      {/* Navigation Button Container */}
      <div className="bg-white px-4 py-2 rounded-full shadow-md flex space-x-4">
        {[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Services', to: '/services' },
          { label: 'Contact', to: '/contact' },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`text-black hover:underline transition-all duration-150 ${
              location.pathname === item.to ? 'font-semibold underline' : ''
            }`}
            style={{ fontFamily: 'Instrument Serif, serif' }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}