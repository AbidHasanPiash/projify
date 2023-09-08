import React from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { RiMenu5Fill } from 'react-icons/ri';

export default function Nav({toggleSidebar}) {
  return (
    <nav className='h-10 w-fit m-6 px-6 space-x-6 flex items-center rounded-full bg-gray-900'>
      <div>
        <button onClick={toggleSidebar} className='cursor-pointer hover:text-orange-400'>
          <RiMenu5Fill size={20}/>
        </button>
      </div>
      <div className='flex'>
        <div className='border-r pr-6 mr-6 border-gray-500'>
          <h1 className='text-gray-200 font-bold'>Dashboard</h1>
        </div>
        <div className='text-xs flex items-center space-x-6 border-r pr-6 mr-6 border-gray-500'>
          <span>12 tasks</span>
          <span>4 members</span>
        </div>
        <div className='flex items-center'>
          <span><HiOutlineDotsHorizontal size={20}/></span>
        </div>
      </div>
    </nav>
  )
}
