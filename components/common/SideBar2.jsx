'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className={`h-screen w-64 bg-gray-900 text-white ${isOpen ? 'translate-x-0' : '-translate-x-64'} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-between p-4">
        <button
          className="fixed top-6 left-6 text-2xl focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <HiOutlineMenuAlt4/>
          ) : (
            <HiOutlineMenuAlt4/>
          )}
        </button>
      </div>
      <nav className="flex flex-col mt-6">
        <Link href="/">
          <p className={`p-4 ${router.pathname === '/' && 'bg-gray-800'}`}>Home</p>
        </Link>
        <Link href="/about">
          <p className={`p-4 ${router.pathname === '/about' && 'bg-gray-800'}`}>About</p>
        </Link>
        <Link href="/contact">
          <p className={`p-4 ${router.pathname === '/contact' && 'bg-gray-800'}`}>Contact</p>
        </Link>
      </nav>
    </div>
  )
}
