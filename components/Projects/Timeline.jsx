import React from 'react'

export default function Timeline({selectedProject}) {
  return (
    <div className='flex flex-col items-center justify-center mb-20'>
        <section className='w-full lg:w-3/4'>
            <div className='sticky top-0 py-3 z-10 bg-gray-950'>
                {/* group-date  */}
                <h2 className='text-4xl text-gray-400 px-3 py-4 font-bold tracking-widest'>December 2023</h2>
            </div>
            {/* Timeline */}
            <div className='border-l-4 border-orange-500 ml-3 py-16 space-y-14'>
                <div className='relative'>
                    {/* dot */}
                    <div className='absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-orange-500'></div>
                    <div className='pl-10'>
                        {/* Timeline-date */}
                        <span className='text-xs font-bold opacity-40 tracking-widest'>12 December 2023</span>
                        {/* Timeline-titlw */}
                        <h3 className='text-3xl text-gray-400 font-semibold tracking-wider mb-2'>Task 1</h3>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.</p>
                    </div>
                </div>
            </div>
            <div className='border-l-4 border-orange-500 ml-3 py-16 space-y-14'>
                <div className='relative'>
                    {/* dot */}
                    <div className='absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-orange-500'></div>
                    <div className='pl-10'>
                        {/* Timeline-date */}
                        <span className='text-xs font-bold opacity-40 tracking-widest'>12 December 2023</span>
                        {/* Timeline-titlw */}
                        <h3 className='text-3xl text-gray-400 font-semibold tracking-wider mb-2'>Task 2</h3>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.</p>
                    </div>
                </div>
            </div>
            <div className='border-l-4 border-orange-500 ml-3 py-16 space-y-14'>
                <div className='relative'>
                    {/* dot */}
                    <div className='absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-orange-500'></div>
                    <div className='pl-10'>
                        {/* Timeline-date */}
                        <span className='text-xs font-bold opacity-40 tracking-widest'>12 December 2023</span>
                        {/* Timeline-titlw */}
                        <h3 className='text-3xl text-gray-400 font-semibold tracking-wider mb-2'>Task 3</h3>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.</p>
                    </div>
                </div>
            </div>
            <div className='border-l-4 border-orange-500 ml-3 py-16 space-y-14'>
                <div className='relative'>
                    {/* dot */}
                    <div className='absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-orange-500'></div>
                    <div className='pl-10'>
                        {/* Timeline-date */}
                        <span className='text-xs font-bold opacity-40 tracking-widest'>12 December 2023</span>
                        {/* Timeline-titlw */}
                        <h3 className='text-3xl text-gray-400 font-semibold tracking-wider mb-2'>Task 4</h3>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='w-full lg:w-3/4'>
            <div className='sticky top-0 py-3 z-10 bg-gray-950'>
                {/* group-date  */}
                <h2 className='text-4xl text-gray-400 px-3 py-4 font-bold tracking-widest'>Novembwe 2023</h2>
            </div>
            {/* Timeline */}
            <div className='border-l-4 border-orange-500 ml-3 py-16 space-y-14'>
                <div className='relative'>
                    {/* dot */}
                    <div className='absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-orange-500'></div>
                    <div className='pl-10'>
                        {/* Timeline-date */}
                        <span className='text-xs font-bold opacity-40 tracking-widest'>12 November 2023</span>
                        {/* Timeline-titlw */}
                        <h3 className='text-3xl text-gray-400 font-semibold tracking-wider mb-2'>Task 1</h3>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.</p>
                    </div>
                </div>
            </div>
            <div className='border-l-4 border-orange-500 ml-3 py-16 space-y-14'>
                <div className='relative'>
                    {/* dot */}
                    <div className='absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-orange-500'></div>
                    <div className='pl-10'>
                        {/* Timeline-date */}
                        <span className='text-xs font-bold opacity-40 tracking-widest'>12 November 2023</span>
                        {/* Timeline-titlw */}
                        <h3 className='text-3xl text-gray-400 font-semibold tracking-wider mb-2'>Task 2</h3>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.</p>
                    </div>
                </div>
            </div>
            <div className='border-l-4 border-orange-500 ml-3 py-16 space-y-14'>
                <div className='relative'>
                    {/* dot */}
                    <div className='absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-orange-500'></div>
                    <div className='pl-10'>
                        {/* Timeline-date */}
                        <span className='text-xs font-bold opacity-40 tracking-widest'>12 November 2023</span>
                        {/* Timeline-titlw */}
                        <h3 className='text-3xl text-gray-400 font-semibold tracking-wider mb-2'>Task 3</h3>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.</p>
                    </div>
                </div>
            </div>
            <div className='border-l-4 border-orange-500 ml-3 py-16 space-y-14'>
                <div className='relative'>
                    {/* dot */}
                    <div className='absolute top-5 -left-3.5 bg-blue-500 h-6 w-6 rounded-full border-4 border-orange-500'></div>
                    <div className='pl-10'>
                        {/* Timeline-date */}
                        <span className='text-xs font-bold opacity-40 tracking-widest'>12 November 2023</span>
                        {/* Timeline-titlw */}
                        <h3 className='text-3xl text-gray-400 font-semibold tracking-wider mb-2'>Task 4</h3>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eius. Minima itaque quis quisquam saepe ratione molestias natus expedita in eveniet! Nemo error officia sed? Facere veritatis labore id totam.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
