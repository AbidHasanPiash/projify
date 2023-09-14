'use client'
import React, { useEffect, useState } from 'react'
import {Avatar, AvatarGroup, Tooltip} from "@nextui-org/react";
import { HiPencilSquare } from "react-icons/hi2";
import { HiPencil, HiTrash, HiBadgeCheck } from "react-icons/hi";

export default function Task({task}) {
    const [bgMain, setBgMain] = useState('bg-orange-900');
    const [bgSecond, setBgSecond] = useState('bg-orange-500');
    const [date, setDate] = useState(task.initiateDate);
    useEffect(() => {
        if (task.status == 'Reviewing') {
            setBgMain('bg-violet-900');
            setBgSecond('bg-violet-500');
            setDate(task.reviewDate);
        }
        else if (task.status == 'Complete') {
            setBgMain('bg-green-900');
            setBgSecond('bg-green-500');
            setDate(task.completeDate);
        }
    }, [task.status])
    
  return (
    <div className={`${bgMain} p-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-300`}>
        <div className='flex items-start justify-between'>
            <div>
                <span className={`${bgSecond} px-1 py-0.5 text-gray-950 rounded-full text-xs font-bold tracking-widest`}>{date}</span>
                <h3 className='text-xl font-semibold tracking-wider mt-1 mb-2'>{task.title}</h3>
            </div>
            <div>
                <span className='text-2xl font-mono'># {task.number}</span>
            </div>
        </div>
        <p>{task.discription}</p>
        <div className='pt-2.5 flex items-center justify-between'>
            <AvatarGroup isBordered className="dark px-3" size="sm">
                {task.assigned?.map((t, i)=>(
                    <Tooltip key={i} color={'success'} content={t.name}>
                    <Avatar size="sm" src={t.src}/>
                    </Tooltip>
                ))}
            </AvatarGroup>
            <div className='flex space-x-3'>
                <span className={`${bgSecond} py-0.5 px-3 text-gray-950 rounded-full flex items-end justify-end`}>
                    <HiBadgeCheck/>
                </span>
                <div className={`${bgSecond} py-0.5 px-3 text-gray-950 rounded-full flex items-end justify-end space-x-4`}>
                    <HiPencilSquare/>
                    <HiTrash/>
                </div>
            </div>
        </div>
    </div>
  )
}
