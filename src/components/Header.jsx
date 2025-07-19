import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import StarBorder from '../Animations/StarBorder/StarBorder';

export default function Header({ showLogo = true, logoType = 'transparent' }) {
  const location = useLocation();

  const logoSrc =
    logoType === 'black'
      ? '/Transparent_Logo_Black.png'
      : '/transparent_logo.png';

  return (
    <div className="absolute top-6 left-6 right-6 z-50 flex justify-between items-center w-full px-6 pr-12">      {/* Logo */}
      {showLogo ? (
        <img
          src={logoSrc}
          alt="Reverra Logo"
          className="h-28 sm:h-32"
        />
      ) : (
        <div className="h-28 sm:h-32" />
      )}

      {/* Right-aligned separate buttons */}
      <div className="flex gap-6">
        {[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Services', to: '/services' },
          { label: 'Contact', to: '/contact' },
        ].map((item) => (
          <StarBorder color="green" speed="4s">
            <Link
              to={item.to}
              className={`text-black bg-white px-6 py-2 text-sm font-semibold rounded-md hover:bg-gray-100 transition duration-200 ${location.pathname === item.to ? 'font-bold' : ''
                }`}
              style={{ fontFamily: 'Instrument Serif, serif' }}
            >
              {item.label}
            </Link>
          </StarBorder>
        ))}
      </div>
    </div>
  );
}