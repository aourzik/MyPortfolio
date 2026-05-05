"use client";

import React, { useState, useEffect, useRef } from 'react';


/* ============ Section Bento About ============ */
const AboutSection = () => (
    <section id="about" data-screen-label="01 About">
        <div className="eyebrow reveal"><span className="dot"></span> 01 — À PROPOS</div>
        <h2 className="section-title reveal reveal-d1">
            Une <span style={{ background: "linear-gradient(120deg, var(--mesh-c), var(--mesh-d))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>double lecture</span> du web.
        </h2>

        <div className="bento">
            <div className="card b-portrait reveal reveal-d1">
                <img 
                src="/Ainy.png" 
                alt="Portrait de Aïny Ourzik" 
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.9
                        }}
                />
                <div className="ph" style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>PORTRAIT — Aïny OURZIK</div>
            </div>

            <div className="card b-bio reveal reveal-d2">
                <div className="label">Bio · Parcours</div>
                <div className="body">
                    Initialement <span className="em">ergonome</span>, je traque les frictions
                    d'usage depuis dix ans. En reconversion via la <span className="em">Holberton School</span>,
                    je transforme cette obsession en code propre et interfaces vivantes.
                </div>
            </div>

            <div className="card b-stack reveal reveal-d1">
                <div className="label">Stack</div>
                <div className="value" style={{ fontSize: 28, marginTop: 8 }}>Full-Stack toolbox</div>
                <div className="chips">
                    {["React", "Next.js", "Node", "Python", "MongoDB", "PostgreSQL", "Tailwind", "Figma", "React Native", "C", "Git", "Github", "HTML", "CSS", "Javascript", "Claude Design"].map(tech => (
                        <span key={tech} className="chip">{tech}</span>
                    ))}
                </div>
            </div>

            <div className="card b-loc reveal reveal-d2" style={{ position: 'relative', overflow: 'hidden' }}>
    {/* Carte Interactive */}
                <iframe
                    title="Map Toulouse"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184764.12073867663!2d1.291361546257348!3d43.60067930491871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x408f909890a8510!2sToulouse!5e0!3m2!1sfr!2sfr!4v1715678901234!5m2!1sfr!2sfr"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        border: 0,
                        filter: 'grayscale(1) invert(0.9) sepia(0.5) hue-rotate(330deg) brightness(0.8)', // Filtre pour l'accorder au thème
                        opacity: 0.6,
                        pointerEvents: 'auto' // Permet de zoomer/déplacer
                    }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>

            {/* Ton contenu par-dessus */}
            <div className="content" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
                <div className="label">Basée à</div>
                <div className="value" style={{ fontSize: 26, color: 'var(--color-sand)' }}>Toulouse</div>
            </div>

            {/* Le petit point de localisation stylisé */}
            <div className="pin" style={{ zIndex: 2 }}></div>
            </div>

            <div className="card b-quote reveal reveal-d3">
                <div className="q">« L'ergonomie n'est pas un vernis — c'est la structure même de l'expérience. »</div>
            </div>

            <div className="card b-stat reveal reveal-d2">
                <div className="label">Projets</div>
                <div className="value">6<span style={{ color: "var(--fg-2)", fontSize: "0.4em" }}>+</span></div>
            </div>

            <div className="card b-availability reveal reveal-d3">
                <div>
                    <div className="ind"><span className="live"></span><span className="lab">Disponible</span></div>
                    <div className="val">Juillet 2026</div>
                </div>
            </div>
        </div>
    </section>
);


export default AboutSection;