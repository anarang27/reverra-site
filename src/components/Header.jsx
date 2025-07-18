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
    <div className="absolute top-6 left-6 right-6 z-50 flex items-center justify-between w-full px-6">
      {/* Logo */}
      {showLogo ? (
        <img src={logoSrc} alt="Reverra Logo" className="h-28 sm:h-32" />
      ) : (
        <div className="h-28 sm:h-32" />
      )}

      {/* Buttons */}
      <div className="flex gap-4 mr-8"> {/* ⬅️ Reduced gap and added margin-right for more left shift */}
        {[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Services', to: '/services' },
          { label: 'Contact', to: '/contact' },
        ].map((item) => (
          <StarBorder
            key={item.to}
            as="div"
            color="green"
            speed="4s"
          >
            <Link
              to={item.to}
              className={`bg-white text-black px-6 py-2 rounded-lg border border-gray-300 shadow hover:bg-gray-100 transition-all duration-150 ${
                location.pathname === item.to ? 'font-semibold' : ''
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