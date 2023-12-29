import React from 'react';
import ProjectsCard from './ProjectsCard';

const myProjects = [
    {
        id: 1,
        imgUrl: "/SiteGP.jpg",
        title: "Website I made during my internship",
        description: "Little website for an event called Grand Prix de Triathlon, made With Angular",
        gitUrl: "https://github.com/LucasBroda/SiteGrandGP",
        viewUrl: ""
    },
    {
        id: 2,
        imgUrl: "/X.jpg",
        title: "Replica of X",
        description: "Replica of X(still in progress), made with React",
        gitUrl: "https://github.com/LucasBroda/SelfMadeX",
        viewUrl: ""
    },
    {
        id: 3,
        imgUrl: "/discord-server.jpg",
        title: "Replica of Discord",
        description: "Replica of Discord(still in progress), made with React/TailwindCSS",
        gitUrl: "https://github.com/LucasBroda/DiscordWithTailwind",
        viewUrl: ""
    },
    {
        id: 4,
        imgUrl: "/PORTEFOLIO.jpg",
        title: "Portfolio",
        description: "A Portefolio I made only using HTML and CSS",
        gitUrl: "https://github.com/LucasBroda/Portefolio_V2",
        viewUrl: "https://lucasbroda.github.io/Portefolio_V2/"
    },
    {
        id: 5,
        imgUrl: "/PORTEFOLIONEXTJS.jpg",
        title: "Current Portefolio",
        description: "The current portefolio you are on, made with NextJS",
        gitUrl: "https://github.com/LucasBroda/NextJSPortefolio",
        viewUrl: ""
    }
]

const Projects = () => {
    return (
        <>
        <div id='projects'>
        <h2 className='text-center text-4xl font-bold  mt-28 mb-8'>Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md-gap-12'>
            {myProjects.map((project) => 
                <ProjectsCard key={project.id} title={project.title} description={project.description} imgUrl={project.imgUrl} gitUrl={project.gitUrl} viewUrl={project.viewUrl}/>
            )}
        </div>
        </div>
        </>
    )}

export default Projects;