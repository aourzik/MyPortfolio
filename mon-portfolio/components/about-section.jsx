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
                <div className="ph">PORTRAIT — TOULOUSE</div>
            </div>

            <div className="card b-bio reveal reveal-d2">
                <div className="label">Bio · 03'</div>
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
                    {["React", "Next.js", "Node", "Python", "MongoDB", "PostgreSQL", "Tailwind", "Figma", "React Native"].map(tech => (
                        <span key={tech} className="chip">{tech}</span>
                    ))}
                </div>
            </div>

            <div className="card b-loc reveal reveal-d2">
                <div className="map"></div>
                <div className="pin"></div>
                <div className="content">
                    <div className="label">Basée à</div>
                    <div className="value" style={{ fontSize: 26 }}>Toulouse</div>
                </div>
            </div>

            <div className="card b-quote reveal reveal-d3">
                <div className="q">« L'ergonomie n'est pas un vernis — c'est la structure même de l'expérience. »</div>
            </div>

            <div className="card b-stat reveal reveal-d2">
                <div className="label">Projets</div>
                <div className="value">12<span style={{ color: "var(--fg-2)", fontSize: "0.4em" }}>+</span></div>
            </div>

            <div className="card b-availability reveal reveal-d3">
                <div>
                    <div className="ind"><span className="live"></span><span className="lab">Disponible</span></div>
                    <div className="val">Mai 2026</div>
                </div>
            </div>
        </div>
    </section>
);


export default AboutSection;