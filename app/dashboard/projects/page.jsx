'use client'
import { useSearchParams } from 'next/navigation';
import { useProjectContext } from '@/context/ProjectContext';

export default function page() {
    const searchParams = useSearchParams()
    const projectID = searchParams.get('projectID');
    const { projects } = useProjectContext();
    const selectedProject = projects.find((project) => project.title === projectID);
    if (!selectedProject) {
      return <div>Project not found</div>;
    }
  return (
    <div>{selectedProject.title}</div>
  )
}
