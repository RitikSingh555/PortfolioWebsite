import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NameIcon from '../assets/NameLogo.png';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(null);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-gray-800 fixed w-full top-0 z-50">
  <div className="container mx-auto py-2 px-8 md:px-16 lg:px-24 flex justify-between items-center">
    {/* Logo with animation */}
    <div className="text-2xl font-bold hidden md:block">
      <img 
        src={NameIcon} 
        alt="Name Icon" 
        className="h-14 w-14 rounded-full border-2 border-gray-500 object-cover transition-all duration-300 hover:border-green-400 hover:scale-110 hover:rotate-6"
      />
    </div>
    
    {/* Navigation Links with animations */}
    <div className="flex space-x-8">
      {[
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Me' },
        { path: '/certifications', label: 'Certifications' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' }
      ].map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onMouseEnter={() => setIsHovered(link.path)}
          onMouseLeave={() => setIsHovered(null)}
          className={`relative py-2 text-sm font-medium tracking-wider transition-colors duration-300
            ${isActive(link.path) 
              ? 'text-green-400' 
              : 'text-gray-300 hover:text-white'}`}
        >
          {link.label}
          <span 
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transform origin-left transition-transform duration-300
              ${(isHovered === link.path || isActive(link.path)) ? 'scale-x-100' : 'scale-x-0'}`}
          />
        </Link>
      ))}
    </div>
    
    {/* Connect Me Button with enhanced animation */}
    <button className="hidden md:flex items-center px-6 py-2.5 font-medium text-sm rounded-full relative group">
      <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
        Connect Me
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 animate-gradient-xy" />
    </button>
  </div>

  <style jsx>{`
    @keyframes gradient-xy {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .animate-gradient-xy {
      background-size: 200% 200%;
      animation: gradient-xy 6s linear infinite;
    }

    nav {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }
  `}</style>
</nav>
  );
};

export default Navbar;