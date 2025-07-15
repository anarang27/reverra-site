import React from 'react';
import GooeyNav from '../components/GooeyNav/GooeyNav';

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];

<div className="absolute top-6 left-6 z-50">
    <img
        src="/transparent_logo.png"
        alt="Reverra Logo"
        className="h-28 sm:h-32"
    />
</div>

export default function Header() {
    return (
        <div className="absolute top-10 right-10 z-50">
            <GooeyNav items={navItems} />
        </div>
    );
}