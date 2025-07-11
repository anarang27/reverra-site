import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import GooeyNav from './GooeyNav';

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const activeIndex = navItems.findIndex(item => item.href === location.pathname);

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 pt-4 z-50">
      {/* Logo */}
      <Link to="/">
        <img src="/Transparent_Logo_Black.png" alt="Reverra Logo" className="h-12 sm:h-16" />
      </Link>

      {/* GooeyNav */}
      <div style={{ height: '80px', position: 'relative' }}>
        <GooeyNav
          items={navItems}
          initialActiveIndex={activeIndex === -1 ? 0 : activeIndex}
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
