'use client'
import React, { useState } from 'react'
import Task from './Task';

export default function Timeline({selectedProject}) {
    const [Tasks, setTasks] = useState([
        {
            title: 'Task 1',
            project: 'RestoMan',
            initiateDate: '12 December 2023',
            assignTo:['Tom', 'Amy'],
            reviewDate: '12 December 2023',
            completeDate: '12 December 2023',
            status: 'Complete',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
        },
        {
            title: 'Task 2',
            project: 'RestoMan',
            initiateDate: '12 December 2023',
            assignTo:['Tom', 'Amy'],
            reviewDate: '12 December 2023',
            completeDate: '12 December 2023',
            status: 'Processing',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
        },
        {
            title: 'Task 3',
            project: 'RestoMan',
            initiateDate: '12 December 2023',
            assignTo:['Tom', 'Amy'],
            reviewDate: '12 December 2023',
            completeDate: '12 December 2023',
            status: 'Reviewing',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
        },
        {
            title: 'Task 4',
            project: 'RestoMan',
            initiateDate: '12 December 2023',
            assignTo:['Tom', 'Amy'],
            reviewDate: '12 December 2023',
            completeDate: '12 December 2023',
            status: 'Processing',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
        },
        {
            title: 'Task 5',
            project: 'RestoMan',
            initiateDate: '12 December 2023',
            assignTo:['Tom', 'Amy'],
            reviewDate: '12 December 2023',
            completeDate: '12 December 2023',
            status: 'Processing',
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.',
        },
    ]);
    const processingTasks = Tasks.filter((task) => task.status === 'Processing');
    const reviewingTasks = Tasks.filter((task) => task.status === 'Reviewing');
    const completeTasks = Tasks.filter((task) => task.status === 'Complete');
  return (
    <div className='pb-3 md:pb-6'>
        <div className='grid md:grid-cols-3 gap-3 md:gap-6'>
            <section className='h-fit rounded-lg bg-gray-900'>
                <div className='sticky top-0 mb-3 py-3 z-10 bg-gray-900'>
                    <h2 className='text-2xl text-gray-400 px-3 py-4 font-bold tracking-widest'>Processing</h2>
                </div>
                {/* Timeline */}
                {processingTasks.map((task, i) => (
                    <div key={i} className={`${i === processingTasks.length -1 ? 'mx-3.5':'border-l-2 border-orange-500/40 mx-3'} pb-10`}>
                        <div className='relative ml-6'>
                        {/* dot */}
                        <div className='absolute top-0 -left-8 bg-orange-500 h-3.5 w-3.5 rounded-full'></div>
                        <Task task={task}/>
                        </div>
                    </div>
                ))}
            </section>
            <section className='h-fit rounded-lg bg-gray-900'>
                <div className='sticky top-0 mb-3 py-3 z-10 bg-gray-900'>
                    <h2 className='text-2xl text-gray-400 px-3 py-4 font-bold tracking-widest'>Reviewing</h2>
                </div>
                {/* Timeline */}
                {reviewingTasks.map((task, i) => (
                    <div key={i} className='m-3 pb-10'>
                        <Task task={task}/>
                    </div>
                ))}
            </section>
            <section className='h-fit rounded-lg bg-gray-900'>
                <div className='sticky top-0 mb-3 py-3 z-10 bg-gray-900'>
                    <h2 className='text-2xl text-gray-400 px-3 py-4 font-bold tracking-widest'>Complete</h2>
                </div>
                {/* Timeline */}
                {completeTasks.map((task, i) => (
                    <div key={i} className='m-3 pb-10'>
                        <Task task={task}/>
                    </div>
                ))}
            </section>
        </div>
    </div>
  )
}
