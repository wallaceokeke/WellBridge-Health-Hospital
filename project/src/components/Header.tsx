import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useBooking } from '../context/BookingContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useBooking();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg">
              <HeartIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">WellBridge</h1>
              <p className="text-sm text-purple-600">Health</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href) ? 'text-purple-600 bg-purple-50' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Consultation
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-purple-600"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href) ? 'text-purple-600 bg-purple-50' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  openModal();
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 mt-4 mx-3"
              >
                Book Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;