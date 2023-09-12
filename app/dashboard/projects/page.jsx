'use client'
import { useSearchParams } from 'next/navigation';
import { useProjectContext } from '@/context/ProjectContext';

export default function page() {
    const searchParams = useSearchParams()
    const projectID = searchParams.get('projectID');
    const tab = searchParams.get('tab');
    const { projects } = useProjectContext();
    const selectedProject = projects.find((project) => project.title === projectID);
    if (!selectedProject) {
      return <div className='w-full text-4xl tracking-widest font-extralight'>Project not found</div>;
    }
    if (tab !== 'timeline' && tab !== 'board' && tab !== 'team') {
      return <div className='w-full text-4xl tracking-widest font-extralight'>Please select a valid tab</div>;
    }
  return (
    <div>
      {selectedProject.title}/{tab}
    </div>
  )
}
