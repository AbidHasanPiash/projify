"use client"
import { useState } from "react";
import ProjectCard from "@/components/dashboard/ProjectCard";
import { useProjectContext } from "@/context/ProjectContext";

export default function Dashboard() {
  const {projects} = useProjectContext();
  return (
    <section>
      <div>
        <div className='w-full grid gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 transition-all duration-200'>
          {projects?.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}