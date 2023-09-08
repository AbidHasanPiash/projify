'use client'
import React, { useState } from 'react';
import Nav from "@/components/common/Nav";
import SideBar from "@/components/common/SideBar";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsOpen((p)=>!p);
  };
  return (
    <section className='flex'>
        <aside className={`${isOpen ? 'w-1/2 md:w-60 translate-x-0' : 'w-0 -translate-x-96'} transition-all duration-300 ease-in-out`}>
          <SideBar/>
        </aside>
        <div className={`flex-1 ${isOpen ? '' : 'w-full'}`}>
          <Nav toggleSidebar={toggleSidebar}/>
        </div>
    </section>
  )
}
