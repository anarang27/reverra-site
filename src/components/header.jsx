import React from 'react';
import GooeyNav from './GooeyNav';

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <div className="absolute top-6 left-0 right-0 z-50 flex justify-center">
      <GooeyNav items={navItems} />
    </div>
  );
}