"use client";

import React from 'react';

const Navbar = () => {
    return (
        <div className="nav-wrap">
            <nav className="nav">
                <span className="nav-brand">Aïny.</span>
                <div className="nav-links">
                    <a className="nav-link" href="#about">À propos</a>
                    <a className="nav-link" href="#parcours">Parcours</a>
                    <a className="nav-link" href="#projets">Projets</a>
                </div>
                <a className="cta" href="#contact">Contact ↗</a>
            </nav>
        </div>
    );
};

export default Navbar;