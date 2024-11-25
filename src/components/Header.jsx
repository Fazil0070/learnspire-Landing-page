import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              LearnSpire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-300 text-lg font-medium hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-gray-300 text-lg font-medium hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 text-lg font-medium hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Get Started Button (Desktop) */}
          <Link
            to="/get-started"
            className="hidden md:flex items-center bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
            <span className="ml-2">→</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? 'rotate-90' : 'rotate-0'
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-black border-t border-gray-800 transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          } transition-all duration-500 ease-in-out md:hidden`}
        >
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link
              to="/about"
              className="text-gray-300 text-lg font-medium hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-gray-300 text-lg font-medium hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 text-lg font-medium hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/get-started"
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
