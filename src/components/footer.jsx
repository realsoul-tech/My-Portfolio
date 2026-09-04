import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaGraduationCap, FaLaptop } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/yourusername', 
      label: 'GitHub' 
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://linkedin.com/in/yourusername', 
      label: 'LinkedIn' 
    },
    { 
      icon: <FaTwitter />, 
      url: 'https://twitter.com/yourusername', 
      label: 'Twitter' 
    },
    { 
      icon: <FaEnvelope />, 
      url: 'mailto:your.email@ttu.edu.gh', 
      label: 'Email' 
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const handleScroll = (href) => (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <FaLaptop className="text-2xl text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">
                  <span className="text-blue-400">My </span>
                  <span className="text-cyan-300">Portfolio</span>
                </div>
               
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Information Technology Student specializing in Computer Networking and Software Development at Takoradi Technical University.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={handleScroll(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800 inline-block">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  realsoulisrael20@gmail.com
                </span>
              </div>
             
              <div className="pt-2">
                <span className="text-gray-400 text-sm italic">
                  Takoradi Technical University
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              &copy; {currentYear} Real Soul-Tech. 
              <span className="hidden sm:inline"> All rights reserved.</span>
            </p>
            <p className="text-gray-500 text-sm mt-2 flex items-center justify-center md:justify-start gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> by Israel Duah
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Bachelor of Technology in Information Technology (Computer Networking)
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Expected Graduation: <span className="text-cyan-300 font-medium">September 2026</span>
            </p>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;