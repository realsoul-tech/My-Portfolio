import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserGraduate, FaHome, FaUser, FaCode, FaBook, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <FaHome />, href: '#home' },
    { name: 'About', icon: <FaUser />, href: '#about' },
    { name: 'Skills', icon: <FaCode />, href: '#skills' },
    { name: 'Projects', icon: <FaCode />, href: '#projects' },
    { name: 'Education', icon: <FaBook />, href: '#education' },
    { name: 'Contact', icon: <FaEnvelope />, href: '#contact' },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="nav-brand">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <FaUserGraduate className="text-blue-600 text-2xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-blue-600 font-bold text-xl">TTU</span>
              <span className="text-gray-600 text-sm font-medium">Student</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed md:hidden inset-0 top-16 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-4 p-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium text-left"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-lg">{item.name}</span>
              </button>
            ))}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center">
              <span className="text-white font-semibold text-sm">TTU Level 400 IT Student</span>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;