import React,{useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Card from '../../Components/ProjectCard/ProjectCard';

import './Projects.css';



const Projects = () => {  
    const projects = [
        { 
          id:1,
          title:"Programming actitvities management app",
          description:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
          details:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
          url:"",
        },
        { 
          id:2,
          title:"Programming actitvities management app",
          description:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
          details:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
          url:"",
        },
        { 
          id:3,
          title:"Programming actitvities management app",
          description:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
          details:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
          url:"",
        },
        { 
          id:4,
          title:"Programming actitvities management app",
          description:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
          details:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
          url:"",
        },

    ]
    const handleProjectClick = (project) => {
        console.log(project.title);
    }
    return (
      <div className="projects-container">
          {projects.map((project) => (
              <Card
                key={project.id}
                image={project.image}
                ImgT={project.ImgT}
                title={project.title}
                description={project.description}
                details={project.details}
                onClick={() => handleProjectClick(project)}
              />
            ))}
              
        </div>
    );
}


export default Projects;