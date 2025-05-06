import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of project 1',
            image: 'https://via.placeholder.com/300x200',
            link: '#'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2',
            image: 'https://via.placeholder.com/300x200',
            link: '#'
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} className="btn">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 