import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HorizontalNavbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/aboutus' },
    { label: 'Services', href: '/ourservices' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contactus' },
    { label: 'Blog', href: '/blog' }
  ];

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <nav className="hidden lg:block w-full bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-14">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
                  isActive(item.href)
                    ? 'text-blue-400'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
