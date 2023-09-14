'use client'
import React, { useEffect, useState } from 'react'

export default function Task({task}) {
    const [bgMain, setBgMain] = useState('bg-orange-900');
    const [bgDate, setBgDate] = useState('bg-orange-500');
    const [date, setDate] = useState(task.initiateDate);
    useEffect(() => {
        if (task.status == 'Reviewing') {
            setBgMain('bg-cyan-900');
            setBgDate('bg-cyan-500');
            setDate(task.reviewDate);
        }
        else if (task.status == 'Complete') {
            setBgMain('bg-green-900');
            setBgDate('bg-green-500');
            setDate(task.completeDate);
        }
    }, [task.status])
    
  return (
    <div className={`${bgMain} p-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-300`}>
        <span className={`${bgDate} px-1 py-0.5 text-gray-950 rounded-full text-xs font-bold tracking-widest`}>{date}</span>
        <h3 className='text-xl font-semibold tracking-wider mt-1 mb-2'>{task.title}</h3>
        <p>{task.discription}</p>
        <p>{task.status}</p>
    </div>
  )
}
