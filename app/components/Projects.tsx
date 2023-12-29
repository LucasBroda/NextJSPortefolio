import React from 'react';
import ProjectsCard from './ProjectsCard';

const myProjects = [
    {
        id: 1,
        imgUrl: "/SiteGP.jpg",
        title: "Website I made during my internship",
        description: "Little website for an event called Grand Prix de Triathlon, made With Angular",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        imgUrl: "/TWITTER.jpg",
        title: "Replica of X",
        description: "Replica of X(still in progress), made with React",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        imgUrl: "/discord-server.jpg",
        title: "Replica of Discord",
        description: "Replica of Discord(still in progress), made with React/TailwindCSS",
        tag: ["All", "Web"]
    },
    {
        id: 4,
        imgUrl: "/PORTEFOLIO.jpg",
        title: "Portfolio",
        description: "A Portefolio I made only using HTML and CSS",
        tag: ["All", "Web"]
    },
    {
        id: 5,
        imgUrl: "/PORTEFOLIONEXTJS.jpg",
        title: "Current Portefolio",
        description: "The current portefolio you are on, made with NextJS",
        tag: ["All", "Web"]
    }
]

const Projects = () => {
    return (
        <>
        <div id='projects'>
        <h2 className='text-center text-4xl font-bold  mt-28 mb-8'>Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md-gap-12'>
            {myProjects.map((project) => 
                <ProjectsCard key={project.id} title={project.title} description={project.description} imgUrl={project.imgUrl} tag={project}/>
            )}
        </div>
        </div>
        </>
    )}

export default Projects;