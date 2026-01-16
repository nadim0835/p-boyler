import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <h1 className="ml-3 text-2xl font-bold text-gray-800">
              My<span className="text-blue-600">Portfolio</span>
            </h1>
          </Link>

          {/* Desktop Menu Items (Hardcoded with Link) */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium">
              Portfolio
            </Link>
            <Link to="/service" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Items (Hardcoded with Link) */}
        {menuOpen && (
          <div className="md:hidden bg-white py-3 border-t">
            <Link 
              to="/" 
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/service" 
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;