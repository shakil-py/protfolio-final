import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        { icon: faHtml5, name: 'HTML5' },
        { icon: faCss3Alt, name: 'CSS3' },
        { icon: faJs, name: 'JavaScript' },
        { icon: faReact, name: 'React' }
    ];

    return (
        <section className="skills" id="skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <FontAwesomeIcon icon={skill.icon} />
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 