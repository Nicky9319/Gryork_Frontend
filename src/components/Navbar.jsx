import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar flex justify-between items-center p-4 bg-white relative z-10">
      <a href="#" className="logo text-2xl font-bold text-gray-700 no-underline">
        GRYORK
      </a>
      <div className="flex items-center space-x-4">
        <button className="menu-toggle bg-transparent border-none cursor-pointer" onClick={toggleMenu}>
          <div className="hamburger flex flex-col justify-between w-8 h-5">
            <span className="block h-1 w-full bg-[#b6d233] rounded"></span>
            <span className="block h-1 w-full bg-[#b6d233] rounded"></span>
            <span className="block h-1 w-full bg-[#b6d233] rounded"></span>
          </div>
        </button>
        
      </div>
      {isMenuOpen && (
        <div className="menu absolute top-full right-0 bg-white shadow-md p-4">
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 no-underline">Home</a></li>
            <li><a href="#" className="text-gray-700 no-underline">Services</a></li>
            <li><a href="#" className="text-gray-700 no-underline">About</a></li>
            <li><a href="#" className="text-gray-700 no-underline">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
