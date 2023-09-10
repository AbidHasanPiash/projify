import ProjectCard from "@/components/dashboard/ProjectCard";

export default function Dashboard() {
  return (
    <section>
      <div>
        <div className='w-full px-3 md:px-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 transition-all duration-200'>
          {/* Card */}
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>
    </section>
  )
}
