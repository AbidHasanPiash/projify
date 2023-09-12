import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { TbTargetArrow } from 'react-icons/tb';
import { HiUserGroup, HiPlus, HiOutlineLockClosed } from 'react-icons/hi';
import { FaClipboardList } from 'react-icons/fa';
import { BsArrowBarLeft } from 'react-icons/bs';
import {Avatar, useDisclosure, Tooltip, Button} from "@nextui-org/react";
import ProfileModal from './ProfileModal';
import { useProjectContext } from '@/context/ProjectContext';

export default function SideBar({toggleSidebar}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {projects} = useProjectContext();
  return (
    <div className='w-60 h-screen bg-gray-900 text-gray-400 flex flex-col justify-between space-y-1.5 overflow-y-auto'>
        <div className='p-6 space-y-4'>
            <div onClick={onOpen} className='flex items-center space-x-3 cursor-pointer'>
                <div className='rounded-full w-10 h-10 flex items-center justify-center'>
                    <Avatar isBordered className='dark ring-orange-500' src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                </div>
                <div>
                    <p className='font-bold text-gray-300'>Abid Hasan</p>
                    <p className='text-xs tracking-widest'>Leader</p>
                </div>
            </div>
            <Button isIconOnly color="danger" aria-label="Like" variant='transparent' onClick={toggleSidebar} className='lg:hidden fixed h-10 w-10 rounded-full bg-gray-700 text-white flex items-center justify-center left-56 top-2'>
                <BsArrowBarLeft/>
            </Button>
            <ProfileModal isOpen={isOpen} onClose={onClose}/>
        </div>
        <div className='h-full flex flex-col space-y-4'>
            <ul>
                <li> 
                    <Link href={'/dashboard/target'}>
                    <Button radius="none" variant="none" className='group w-full flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'>
                        <span className='group-hover:text-orange-500'><TbTargetArrow size={22}/> </span>
                        <span className='group-hover:text-gray-300'>Target</span>
                    </Button>
                    </Link>
                </li>
                <li> 
                    <Button radius="none" variant="none" className='group w-full flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'>
                        <span className='group-hover:text-orange-500'><FaClipboardList size={22}/> </span>
                        <span className='group-hover:text-gray-300'>All task</span>
                    </Button>
                </li>
                <li> 
                    <Button radius="none" variant="none" className='group w-full flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'>
                        <span className='group-hover:text-orange-500'><HiUserGroup size={22}/> </span>
                        <span className='group-hover:text-gray-300'>Team</span>
                    </Button>
                </li>
            </ul>
            <div>
                <div className='flex w-full items-center justify-between px-6 py-2.5'>
                    <h1 className='text-lg font-bold flex items-center space-x-1'>
                        <span className='text-gray-300'>My lists</span> 
                        <Tooltip color={'success'} Delay={0} closeDelay={0} content={'Privat for you'}>
                            <span>
                                <HiOutlineLockClosed size={14}/>
                            </span>
                        </Tooltip>
                    </h1>
                    <Button isIconOnly color="danger" aria-label="Like" variant='transparent' className='p-0 m-0 hover:text-orange-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-700'>
                        <HiPlus/>
                    </Button>
                </div>
                <ul>
                    <li>
                        <Button radius="none" variant="none" className='w-full flex items-center justify-start py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>Personal</Button>
                    </li>
                    <li>
                        <Button radius="none" variant="none" className='w-full flex items-center justify-start py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>Work</Button>
                    </li>
                </ul>
            </div>
            <div>
                <div className='flex w-full items-center justify-between px-6 py-2.5'>
                    <h1 className='text-lg font-bold flex items-center space-x-1'>
                        <span className='text-gray-300'>Projects</span>
                    </h1>
                    <Button isIconOnly color="danger" aria-label="Like" variant='transparent' className='p-0 m-0 hover:text-orange-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-700'>
                        <HiPlus/>
                    </Button>
                </div>
                <ul>
                {projects?.map((item, index) => (
                    <li key={index}>
                        <Button radius="none" variant="none" className='w-full flex items-center justify-start py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>
                            <span>{item.title}</span>
                        </Button>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
