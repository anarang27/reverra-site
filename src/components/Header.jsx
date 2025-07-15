import React from 'react';
import GooeyNav from './GooeyNav';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const location = useLocation();

  return (
    <div className="absolute top-0 left-0 w-full flex items-start justify-between p-6 z-50">

      {/* Logo (top-left) */}
      <Link to="/" className="z-50">
        <img
          src="/transparent_logo.png"
          alt="Reverra Logo"
          className="h-24 sm:h-28"
        />
      </Link>

      {/* GooeyNav (top-right) */}
      <div className="z-50">
        <GooeyNav
          items={navItems}
          initialActiveIndex={navItems.findIndex(item => item.href === location.pathname)}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </div>
  );
};

export default Header;