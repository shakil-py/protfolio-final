import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        {
            category: 'Frontend',
            items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Redux']
        },
        {
            category: 'Backend',
            items: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'SQL']
        },
        {
            category: 'Tools & Others',
            items: ['Git', 'Docker', 'AWS', 'Firebase', 'Webpack', 'Jest']
        }
    ];

    return (
        <section className="skills" id="skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-category">
                            <h3>{skillGroup.category}</h3>
                            <div className="skill-items">
                                {skillGroup.items.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 