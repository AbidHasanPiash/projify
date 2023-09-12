import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export const useProjectContext = () => {
  return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
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
  ]);
  
  // Function to add a new project
  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  // Function to update a project
  const updateProject = (updatedProject) => {
    const updatedProjects = projects.map((project) =>
      project.title === updatedProject.title ? updatedProject : project
    );
    setProjects(updatedProjects);
  };

  // Function to delete a project
  const deleteProject = (title) => {
    const updatedProjects = projects.filter((project) => project.title !== title);
    setProjects(updatedProjects);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};