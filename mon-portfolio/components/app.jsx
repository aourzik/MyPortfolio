"use client";

import React from 'react';

const Navbar = () => {
    // Fonction pour remonter tout en haut
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="nav-wrap">
            <nav className="nav">
                <a
                    className="nav-brand"
                    href="#"
                    onClick={scrollToTop}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                    Aïny.
                </a>

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