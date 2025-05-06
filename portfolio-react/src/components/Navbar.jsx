import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="logo">Portfolio</div>
            <div className="menu">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
                <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar; 