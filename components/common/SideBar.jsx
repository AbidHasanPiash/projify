import Image from 'next/image'
import React from 'react'
import { BsPersonBoundingBox } from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import { HiUserGroup, HiPlus, HiOutlineLockClosed } from 'react-icons/hi';
import { FaClipboardList } from 'react-icons/fa';
import { LuPanelLeftClose } from 'react-icons/lu';

export default function SideBar({toggleSidebar}) {
  return (
    <div className='w-60 h-screen bg-gray-900 text-gray-400 flex flex-col justify-between space-y-1.5 overflow-y-auto'>
        <div className='p-6 space-y-4'>
            <div>
                <div className='flex items-center space-x-3'>
                    <div className='rounded-full w-10 h-10 ring-2 ring-gray-300 flex items-center justify-center'>
                        <BsPersonBoundingBox size={25}/>
                    </div>
                    <div>
                        <p className='font-bold text-gray-300'>Abid Hasan</p>
                        <p className='text-xs tracking-widest'>Leader</p>
                    </div>
                </div>
                <button onClick={toggleSidebar} className='md:hidden fixed h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center left-56 top-6'>
                    <LuPanelLeftClose size={22}/>
                </button>
            </div>
            <button className='w-full py-2 ring-1 ring-orange-500 text-orange-500 text-sm rounded-full'>RestoMan</button>
        </div>
        <div className='h-full flex flex-col space-y-4'>
            <ul>
                <li className='group flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'> 
                    <span className='group-hover:text-orange-500'><TbTargetArrow size={22}/> </span>
                    <span className='group-hover:text-gray-300'>Target</span>
                </li>
                <li className='group flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'> 
                    <span className='group-hover:text-orange-500'><FaClipboardList size={22}/> </span>
                    <span className='group-hover:text-gray-300'>All task</span>
                </li>
                <li className='group flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'> 
                    <span className='group-hover:text-orange-500'><HiUserGroup size={22}/> </span>
                    <span className='group-hover:text-gray-300'>Team</span>
                </li>
            </ul>
            <div>
                <div className='flex items-center justify-between cursor-pointer px-6 py-2.5 hover:bg-gray-700 transition-all duration-200'>
                    <h1 className='text-lg font-bold flex items-center space-x-1'>
                        <span className='text-gray-300'>My lists</span> 
                        <HiOutlineLockClosed size={14}/>
                    </h1>
                    <span className='hover:text-orange-500'>
                        <HiPlus/>
                    </span>
                </div>
                <ul>
                    <li className='py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>Personal</li>
                    <li className='py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>Work</li>
                </ul>
            </div>
            <div>
                <div className='flex items-center justify-between cursor-pointer px-6 py-2.5 hover:bg-gray-700 transition-all duration-200'>
                    <h1 className='text-lg font-bold text-gray-300'> Projects </h1>
                    <span className='hover:text-orange-500'>
                        <HiPlus/>
                    </span>
                </div>
                <ul>
                    <li className='py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>RestoMan</li>
                    <li className='py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>IBMS</li>
                    <li className='py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>TipOFF</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
