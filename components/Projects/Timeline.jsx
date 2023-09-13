'use client'
import React, { useState } from 'react'

export default function Timeline({selectedProject}) {
    const [Task, setTask] = useState([
        {
            phase:'Phase 1', 
            data:[
                {
                    title: 'Task 1',
                    finalDate: '12 December 2023',
                    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
                },
                {
                    title: 'Task 2',
                    finalDate: '12 December 2023',
                    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
                },
                {
                    title: 'Task 3',
                    finalDate: '12 December 2023',
                    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
                },
                {
                    title: 'Task 4',
                    finalDate: '12 December 2023',
                    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
                },
            ]
        },
        {
            phase:'Phase 2', 
            data:[
                {
                    title: 'Task 1',
                    finalDate: '12 December 2023',
                    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
                },
                {
                    title: 'Task 2',
                    finalDate: '12 December 2023',
                    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
                },
                {
                    title: 'Task 3',
                    finalDate: '12 December 2023',
                    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
                },
                {
                    title: 'Task 4',
                    finalDate: '12 December 2023',
                    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
                },
            ]
        },
    ])
  return (
    <div>
        <h1 className='sticky top-0 py-7 h-20 z-20 bg-gray-950 text-4xl text-gray-400 px-3 font-bold tracking-widest'>Processing</h1>
        <div className='grid md:grid-cols-2'>
            <div>
            {Task.map((task, index)=>(
                <section key={index} className='col-span-1'>
                    <div className='sticky top-20 py-3 z-10 bg-gray-950'>
                        <h2 className='text-4xl text-gray-400 px-3 py-4 font-bold tracking-widest'>{task.phase}</h2>
                    </div>
                    {/* Timeline */}
                    {task.data.map((d, i)=> (
                        <div key={i} className='border-l-4 border-orange-500 ml-3 py-10'>
                            <div className='relative'>
                                {/* dot */}
                                <div className='absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-orange-500'></div>
                                <div className='ml-6 p-2 rounded-lg bg-gray-900 border border-gray-700'>
                                    <span className='text-xs font-bold opacity-40 tracking-widest'>{d.finalDate}</span>
                                    <h3 className='text-3xl text-gray-400 font-semibold tracking-wider mb-2'>{d.title}</h3>
                                    <p className='text-gray-500'>{d.discription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            ))}
            </div>
            <div>
                <div className='sticky top-20 py-3 z-10 bg-gray-950'>
                    <h2 className='text-4xl text-gray-400 px-3 py-4 font-bold tracking-widest'>Complete</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
