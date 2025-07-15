import React from 'react';
import GooeyNav from '../components/GooeyNav/GooeyNav';

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <>
      {/* Logo top-left */}
      <div className="absolute top-6 left-6 z-50">
        <img
          src="/transparent_logo.png"
          alt="Reverra Logo"
          className="h-28 sm:h-32"
        />
      </div>

      {/* GooeyNav top-right */}
      <div className="absolute top-10 right-10 z-50">
        <GooeyNav
          items={navItems}
          animationTime={400}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          timeVariance={200}
          colors={[5, 6, 5, 6, 7, 5]} // Green tones
        />
      </div>
    </>
  );
}