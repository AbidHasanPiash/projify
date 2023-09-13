import React from 'react'

export default function Task({task}) {
    let bgMain = '';
    let bgDate = '';
    let date = '';
    if (task.status == 'Processing') {
        bgMain = 'bg-orange-500/40';
        bgDate = 'bg-orange-500';
        date = task.initiateDate;
    }
    else if (task.status == 'Reviewing') {
        bgMain = 'bg-blue-500/40';
        bgDate = 'bg-blue-500';
        date = task.reviewDate;
    }
    else if (task.status == 'Complete') {
        bgMain = 'bg-green-500/40';
        bgDate = 'bg-green-500';
        date = task.completeDate;
    }
  return (
    <div className={`${bgMain} p-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-300`}>
        <span className={`${bgDate} px-1 py-0.5 text-gray-950 rounded-full text-xs font-bold tracking-widest`}>{date}</span>
        <h3 className='text-xl font-semibold tracking-wider mt-1 mb-2'>{task.title}</h3>
        <p>{task.discription}</p>
    </div>
  )
}
