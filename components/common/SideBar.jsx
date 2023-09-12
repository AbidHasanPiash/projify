'use client'
import Link from 'next/link';
import { CiViewTimeline, CiViewBoard, CiInstagram } from 'react-icons/ci';
import { HiPlus, HiOutlineLockClosed } from 'react-icons/hi';
import { PiArrowLineLeftDuotone } from 'react-icons/pi';
import {Avatar, useDisclosure, Tooltip, Button} from "@nextui-org/react";
import ProfileModal from './ProfileModal';
import { useProjectContext } from '@/context/ProjectContext';
import { useSearchParams } from 'next/navigation';

export default function SideBar({toggleSidebar}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const searchParams = useSearchParams()
    const projectID = searchParams.get('projectID');
    const {projects} = useProjectContext();
    const selectedProject = projects.find((project) => project.title === projectID);
    const selectedTab = [
        {name:'timeline', icon:<CiViewTimeline size={22}/>},
        {name:'board', icon:<CiViewBoard size={22}/>},
        {name:'team', icon:<CiInstagram size={22}/>},
    ]
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
                <PiArrowLineLeftDuotone/>
            </Button>
            <ProfileModal isOpen={isOpen} onClose={onClose}/>
        </div>
        <div className='h-full flex flex-col space-y-4'>
            {/* Project tab */}
            <ul>
                {selectedTab.map((tab, index)=>(
                    <li key={index}>{selectedProject ? 
                        <Link 
                            href={`/dashboard/projects?projectID=${encodeURIComponent(selectedProject.title)}&tab=${encodeURIComponent(tab.name)}`} 
                            className='group w-full flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'
                        >
                            <span className='group-hover:text-orange-500'>{tab.icon}</span>
                            <span className='group-hover:text-gray-300 text-gray-400 text-sm'>{tab.name}</span>
                        </Link>
                        :
                        <Tooltip size={'sm'} Delay={0} closeDelay={0} showArrow placement="right" content="Please select a project" classNames={{
                            base: "py-2 px-4 shadow-xl text-gray-300 bg-green-500 text-gray-900",
                            arrow: "bg-green-700",
                            }}>
                            <div className='group w-full flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'>
                                <span className='group-hover:text-orange-500'>{tab.icon}</span>
                                <span className='group-hover:text-gray-300 text-gray-400 text-sm'>{tab.name}</span>
                            </div>
                        </Tooltip>
                        }
                    </li>
                ))}
            </ul>
            {/* My list */}
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
                    <li className='w-full flex items-center justify-start py-2.5 px-6 cursor-pointer hover:bg-gray-700 hover:text-gray-300 text-gray-400 text-sm'>
                        Personal
                    </li>
                    <li className='w-full flex items-center justify-start py-2.5 px-6 cursor-pointer hover:bg-gray-700 hover:text-gray-300 text-gray-400 text-sm'>
                        Work
                    </li>
                </ul>
            </div>
            {/* Project */}
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
                {projects?.map((project, index) => (
                    <li key={index}>
                    <Link href={`/dashboard/projects?projectID=${encodeURIComponent(project.title)}&tab=timeline`}>
                        <div className='group w-full flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700'>
                            <span className={'group-hover:text-gray-300 text-gray-400 text-sm'}>{project.title}</span>
                        </div>
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
