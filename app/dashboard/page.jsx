'use client'
import React, { useState } from 'react';
import Nav from "@/components/common/Nav";
import SideBar from "@/components/common/SideBar";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((p)=>!p);
  };
  return (
    <section className='flex'>
      {/* Sidebar for Mobile */}
      <aside className={`md:hidden ${isOpen ? 'w-2/3 md:w-60 translate-x-0' : 'w-0 -translate-x-96'} fixed transition-all duration-300 ease-in-out`}>
        <SideBar toggleSidebar={toggleSidebar}/>
      </aside>
      {/* Sidebar for Desktop */}
      <aside className={`hidden md:block ${isOpen ? 'w-0 -translate-x-96' : 'w-2/3 md:w-60 translate-x-0'} transition-all duration-300 ease-in-out`}>
        <SideBar toggleSidebar={toggleSidebar}/>
      </aside>
      <div>
        <Nav toggleSidebar={toggleSidebar}/>
      </div>
    </section>
  )
}
