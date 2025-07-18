import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ showLogo = true, logoType = 'transparent' }) {
  const location = useLocation();

  const logoSrc =
    logoType === 'black'
      ? '/Transparent_Logo_Black.png'
      : '/transparent_logo.png';

  return (
    <div className="relative bg-[#E1DFD9] min-h-screen w-full overflow-hidden">      
    {/* Logo or spacer */}
      {showLogo ? (
        <img
          src={logoSrc}
          alt="Reverra Logo"
          className="h-28 sm:h-32"
        />
      ) : (
        <div className="h-28 sm:h-32" />
      )}

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        {[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Services', to: '/services' },
          { label: 'Contact', to: '/contact' },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`bg-white text-black px-4 py-2 rounded-full border border-gray-300 shadow-sm hover:bg-gray-100 transition-all duration-150 ${location.pathname === item.to ? 'font-semibold' : ''
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