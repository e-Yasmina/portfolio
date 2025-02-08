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
          image:"./ActImages/image1.png",
          ImgT:"Calculator",
        },
    ]
    const handleProjectClick = (project) => {
        console.log(project.title);
    }
    return (
        <>
          {projects.map((project) => (
              <Card
                key={project.id}
                image={project.image}
                ImgT={project.ImgT}
                title={project.title}
                description={project.description}
                onClick={() => handleProjectClick(project)}
              />
            ))}
              
        </>
    );
}


export default Projects;