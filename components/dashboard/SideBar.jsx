import Image from 'next/image'
import React from 'react'
import { BsPersonBoundingBox } from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import { FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

export default function SideBar() {
  return (
    <aside className='w-60 h-screen bg-gray-900 text-gray-400 flex flex-col justify-between space-y-1.5'>
        <div className='p-6 space-y-4'>
            <div className='flex items-center space-x-3'>
                <div className='rounded-full w-10 h-10 ring-2 ring-gray-300 flex items-center justify-center'>
                    <BsPersonBoundingBox size={25}/>
                </div>
                <div>
                    <p className='font-bold text-gray-300'>Abid Hasan</p>
                    <p className='text-xs tracking-widest'>Leader</p>
                </div>
            </div>
            <button className='w-full py-2 ring-1 ring-orange-500 text-orange-500 text-sm rounded-full'>Project Name</button>
        </div>
        <div className='h-full flex flex-col px-6 space-y-4'>
            <div>
                <ul className='space-y-3'>
                    <li className='flex items-center space-x-2 cursor-pointer'> <TbTargetArrow size={22}/> <span>Target</span></li>
                    <li className='flex items-center space-x-2 cursor-pointer'> <FaClipboardList size={22}/> <span>All task</span></li>
                </ul>
            </div>
        </div>
        <div className='p-6 flex items-center justify-center'>
            <button className='w-full py-2 flex items-center justify-center space-x-3 hover:ring-1 ring-orange-500 hover:text-orange-500 text-sm rounded-full'>
                <span>Log out</span> <FaSignOutAlt/>
            </button>
        </div>
    </aside>
  )
}
