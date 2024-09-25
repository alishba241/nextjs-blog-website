"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); //means navbar is closed on first render

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-cyan-800/80 shadow-md backdrop-blur-sm  w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-[80px] px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <span>Blog.</span>
          <span className="text-[#FFD700] font-bold">in</span>
        </div>

        {/* categories large screens */}
        <div className="hidden lg:flex space-x-6  lg:relative lg:left-10">
          <Link href="/" className="text-white hover:text-[#FFD700]">Home</Link>
          <Link href="/contact" className="text-white hover:text-[#FFD700]">Contact</Link>
          <Link href="/register" className="text-white hover:text-[#FFD700]">Register</Link>
        </div>

        {/* search bar larger screens */}
        <div className="hidden lg:block lg:relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blog..."
              className="p-2 bg-transparent pr-10 w-[200px] placeholder:text-sm placeholder:text-gray-100 text-white border-b-2 border-b-white outline-none focus:border-[#FFD700]"/>
            <button title='search' type="submit" className="absolute top-0.5 right-0 p-2 rounded-full bg-transparent text-white">
              <FaSearch className="text-md relative top-1 text-[#FFD700]" />
            </button>
          </div>
        </div>

        {/*menue icon */}
        <div className="text-[#FFD700] lg:hidden cursor-pointer" onClick={toggleSidebar}>
          <FaBars className="text-xl" />
        </div>
      </div>

      {/* sidebar on mobile devices */}
      <div
        className={`fixed inset-y-0 left-0  h-screen w-64 bg-cyan-950 text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="p-4">
          <button className="text-[#FFD700] text-xl mb-4" onClick={toggleSidebar}>
            ✕
          </button>

          {/* search bar in sidebar  */}
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="Search blog..."
              className="p-2 bg-transparent w-[220px] pr-10 placeholder:text-sm placeholder:text-gray-100 text-white border-b-2 border-b-white outline-none focus:border-[#FFD700]"
            />
            <button title='search' type="submit" className="absolute top-0.5 right-0 p-2 rounded-full bg-transparent text-white">
              <FaSearch className="text-md relative top-1 text-[#FFD700]" />
            </button>
          </div>

          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-[#FFD700]" onClick={toggleSidebar}>Home</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#FFD700]" onClick={toggleSidebar}>Contact</Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-[#FFD700]" onClick={toggleSidebar}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
