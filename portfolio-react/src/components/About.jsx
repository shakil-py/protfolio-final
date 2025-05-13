import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>I'm a Full Stack Developer with a passion for creating efficient, scalable, and user-friendly web applications. With expertise in both front-end and back-end technologies, I strive to build solutions that make a real impact.</p>
                        <p>My journey in web development has equipped me with skills in modern frameworks and tools, allowing me to tackle complex problems with innovative solutions.</p>
                        <div className="social-links">
                            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 