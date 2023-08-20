import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { HiShoppingBag } from 'react-icons/hi';
import logo from '../assets/psychiatry.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <img src={logo} className="h-8 w-8 mr-2" alt="Logo" />
        <span className="font-bold text-lg md:text-xl">Brand Name</span>
      </div>
      <div className={`flex-grow ${isMobileMenuOpen ? 'block' : 'hidden'} md:block text-center md:text-right`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center md:justify-center">
          <li><a href="#" className="hover:text-gray-300">TEA COLLECTION</a></li>
          <li><a href="#" className="hover:text-gray-300">ACCESSORIES</a></li>
          <li><a href="#" className="hover:text-gray-300">BLOG</a></li>
          <li><a href="#" className="hover:text-gray-300">CONTACT US</a></li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 md:space-x-8">
        <AiOutlineSearch className="cursor-pointer hover:text-gray-300" />
        <AiOutlineUser className="cursor-pointer hover:text-gray-300" />
        <HiShoppingBag className="cursor-pointer hover:text-gray-300" />
        <AiOutlineMenu className="cursor-pointer hover:text-gray-300 md:hidden" onClick={toggleMobileMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
