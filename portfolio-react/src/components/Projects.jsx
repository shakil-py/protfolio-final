import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
            image: '/images/project1.jpg',
            link: '#',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express']
        },
        {
            title: 'Task Management App',
            description: 'A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: '/images/project2.jpg',
            link: '#',
            technologies: ['React', 'Firebase', 'Material-UI']
        },
        {
            title: 'Portfolio Website',
            description: 'A modern portfolio website showcasing projects and skills, built with React and styled with CSS.',
            image: '/images/project3.jpg',
            link: '#',
            technologies: ['React', 'CSS', 'React Router']
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
                            <div className="technologies">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <a href={project.link} className="btn">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 