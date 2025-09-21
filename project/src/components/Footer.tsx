import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const [fontSize, setFontSize] = useState('normal');
  const [darkMode, setDarkMode] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Book Consultation', href: '#', action: 'book' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/wellbridgehealth' },
    { name: 'Instagram', href: 'https://instagram.com/wellbridgehealth' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/wellbridge-health' },
    { name: 'Twitter', href: 'https://twitter.com/wellbridgehealth' },
  ];

  return (
    <footer className={`bg-gray-900 text-white ${darkMode ? 'bg-black' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg">
                <HeartIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">WellBridge Health</h3>
                <p className="text-purple-400 text-sm">Compassionate Care</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4 text-purple-400" />
                <span className="text-sm">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-4 w-4 text-purple-400" />
                <span className="text-sm">info@wellbridgehealth.co.ke</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>General Consultation</li>
              <li>Emergency Care</li>
              <li>Pediatrics</li>
              <li>Mental Health</li>
              <li>Diagnostics</li>
              <li>Physiotherapy</li>
            </ul>
          </div>

          {/* Social & Accessibility */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Accessibility Tools */}
            <div className="space-y-3">
              <h5 className="text-sm font-medium text-gray-300">Accessibility</h5>
              <div className="flex flex-col space-y-2">
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="text-sm bg-gray-800 text-white border border-gray-600 rounded px-2 py-1"
                >
                  <option value="small">Small Text</option>
                  <option value="normal">Normal Text</option>
                  <option value="large">Large Text</option>
                </select>
                <label className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                    className="rounded"
                  />
                  <span>Dark Mode</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 WellBridge Health. All rights reserved. | A Brown Memorial Healthcare Initiative
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;