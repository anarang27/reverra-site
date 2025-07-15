import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="absolute top-0 right-0 p-6 z-50 flex space-x-6 text-[#F8F6D0] font-medium text-lg" style={{ fontFamily: 'Newsreader, serif' }}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/services">Services</Link>
    <Link to="/contact">Contact</Link>
  </div>
);

export default Header;