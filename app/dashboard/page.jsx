"use client"
import { useState } from "react";
import ProjectCard from "@/components/dashboard/ProjectCard";

export default function Dashboard() {
  const [projects, setProjects] = useState([
    {
      title:'RestoMan', 
      discriptios:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium facere quis enim reiciendis, veritatis.', 
      finishDate:'21-10-2023',
      team:[
        {name:'Tom', src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"},
        {name:'Bob', src:"https://i.pravatar.cc/150?u=a042581f4e29026704d"},
        {name:'Lee', src:"https://i.pravatar.cc/150?u=a04258114e29026302d"},
      ]
    },
    {
      title:'IBMS', 
      discriptios:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium facere quis enim reiciendis, veritatis.', 
      finishDate:'25-12-2023',
      team:[
        {name:'Lia', src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"},
        {name:'Tom', src:"https://i.pravatar.cc/150?u=a042581f4e29026704d"},
        {name:'Joy', src:"https://i.pravatar.cc/150?u=a04258114e29026302d"},
      ]
    },
    {
      title:'TipOff', 
      discriptios:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium facere quis enim reiciendis, veritatis.', 
      finishDate:'12-11-2023',
      team:[
        {name:'Leo', src:"https://i.pravatar.cc/150?u=a042581f4e29026024d"},
        {name:'Tom', src:"https://i.pravatar.cc/150?u=a042581f4e29026704d"},
        {name:'Joy', src:"https://i.pravatar.cc/150?u=a04258114e29026302d"},
      ]
    },
  ])
  return (
    <section>
      <div>
        <div className='w-full grid gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 transition-all duration-200'>
          {projects?.map((item, index)=>(
            <ProjectCard key={index} item={item}/>
          ))}
        </div>
      </div>
    </section>
  )
}
