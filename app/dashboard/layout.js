'use client'
import React, { useState } from 'react';
import Nav from "@/components/common/Nav";
import SideBar from "@/components/common/SideBar";

export const metadata = {
  title: 'Taskhub | Dashboard',
  description: 'Organize your work and life, finally.',
}

export default function RootLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
      setIsOpen((p)=>!p);
    };
    const closeSidebar = (e) => {
      if (e.target.id === 'outside') {
        setIsOpen(false);
      }
    }
  return (
    <section lang="en" className='bg-gray-950 text-gray-400'>
      <div>
        <div className='flex'>
            {/* Sidebar for Mobile */}
            <aside id='outside' onClick={closeSidebar} className={`lg:hidden ${isOpen ? 'w-full translate-x-0 backdrop-blur-sm' : 'w-0 -translate-x-96'} fixed transition-all duration-200 ease-linear`}>
                <SideBar toggleSidebar={toggleSidebar}/>
            </aside>
            {/* Sidebar for Desktop */}
            <aside className={`hidden lg:block ${isOpen ? 'w-0 -translate-x-96' : 'w-60 translate-x-0'} transition-all duration-200 ease-linear`}>
                <SideBar toggleSidebar={toggleSidebar}/>
            </aside>
            {/* Navbar and childres */}
            <div className='w-full h-screen overflow-y-auto'>
                <Nav toggleSidebar={toggleSidebar}/>
                <div>
                    {children}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}