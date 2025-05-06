import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
                <h2>Web Developer & Designer</h2>
                <p>Creating beautiful and functional digital experiences</p>
                <div className="cta-buttons">
                    <Link to="/projects" className="btn primary">View My Work</Link>
                    <Link to="/contact" className="btn secondary">Contact Me</Link>
                </div>
            </div>
            <div className="hero-image">
                <img src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg" alt="Profile Background" />
            </div>
        </section>
    );
};

export default Hero; 