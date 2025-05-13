import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Shakil</span></h1>
                <h2>Full Stack Developer</h2>
                <p>Passionate about creating innovative web solutions and user-friendly applications</p>
                <div className="cta-buttons">
                    <Link to="/projects" className="btn primary">View My Work</Link>
                    <Link to="/contact" className="btn secondary">Contact Me</Link>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/profile.jpg" alt="Shakil's Profile" />
            </div>
        </section>
    );
};

export default Hero; 