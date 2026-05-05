"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Claude l'utilise sûrement pour tes animations
import { LucideIconName } from 'lucide-react'; // Si Claude utilise des icônes


/* ============ 3D Carousel ============ */
const projects3D = [
    { name: "Hbnb — Duchess & Duke", tech: "REACT · PYTHON · SQLLITE", c1: "#7c3aed", c2: "#d946ef" },
    { name: "Coroller Illustrations", tech: "REACT · NODEJS · SQL", c1: "#ec4899", c2: "#a855f7" },
    { name: "ReadMe", tech: "FLUTTER · NODEJS", c1: "#3b82f6", c2: "#8b5cf6" },
];

const Carousel3D = () => {
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setIdx(i => (i + 1) % projects3D.length), 4200);
        return () => clearInterval(t);
    }, []);
    const radius = 280;
    return (
        <div className="carousel-stage">
            <div className="carousel" style={{ transform: `rotateY(${-idx * (360 / projects3D.length)}deg)` }}>
                {projects3D.map((p, i) => {
                    const angle = (i * 360) / projects3D.length;
                    return (
                        <div key={i} className="carousel-card" style={{
                            transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                            "--c1": p.c1, "--c2": p.c2,
                        }}>
                            <div className="frame">
                                <div className="chrome">
                                    <span></span><span></span><span></span>
                                    <div className="url">{p.name.toLowerCase().replace(/[^a-z]/g, "")}.app</div>
                                </div>
                                <div className="body">
                                    <div className="mock">
                                        <div className="row med"></div>
                                        <div className="row short"></div>
                                        <div className="grid2">
                                            <div className="tile"></div>
                                            <div className="tile"></div>
                                            <div className="tile"></div>
                                            <div className="tile"></div>
                                        </div>
                                    </div>
                                    <div className="label">
                                        <div className="tech">{p.tech}</div>
                                        <div className="name">{p.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="carousel-controls">
                {projects3D.map((_, i) => (
                    <div key={i} className={`carousel-dot ${i === idx ? "active" : ""}`} onClick={() => setIdx(i)}></div>
                ))}
            </div>
        </div>
    );
};

/* ============ Hero ============ */
const HeroA = () => (
    <section className="hero" data-screen-label="Hero">
        <div>
            <div className="eyebrow reveal"><span className="dot"></span> Portfolio · 2026 — Disponible</div>
            <h1 className="hero-title reveal reveal-d1">
                <span className="it">La</span> <span className="grad">créativité</span><br />
                <span className="sans">&</span> <span className="it">l'ergonomie</span><br />
                <span className="stroke">au service</span><br />
                <span>du <span className="it">web.</span></span>
            </h1>
            <p className="hero-sub reveal reveal-d2">
                Aïny Ourzik — Web Developer Full Stack. Ancienne ergonome, je conçois des
                interfaces où chaque pixel a une raison d'être.
            </p>
            <div className="hero-meta reveal reveal-d3">
                <div className="pill"><span className="live"></span> OPEN TO WORK</div>
                <div className="pill">TOULOUSE — FR</div>
                <div className="pill">EST. 2025</div>
            </div>
        </div>
        <Carousel3D />
    </section>
);

const HeroB = () => (
    <section className="hero" data-screen-label="Hero" style={{ gridTemplateColumns: "1fr" }}>
        <div style={{ textAlign: "center", maxWidth: 1200, margin: "0 auto" }}>
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
                <span className="dot"></span> Aïny Ourzik · Web Dev Full Stack
            </div>
            <h1 className="hero-title reveal reveal-d1" style={{ textAlign: "center", marginTop: 30 }}>
                <span className="it">Créativité</span><br />
                <span className="stroke">&amp;</span> <span className="grad">ergonomie</span>
            </h1>
            <p className="hero-sub reveal reveal-d2" style={{ margin: "32px auto 0", textAlign: "center" }}>
                Au service du développement web. Interfaces sensibles, code soigné,
                attention obsessive aux détails.
            </p>
            <div className="hero-meta reveal reveal-d3" style={{ justifyContent: "center", marginTop: 40 }}>
                <div className="pill"><span className="live"></span> OPEN TO WORK</div>
                <div className="pill">TOULOUSE — FR</div>
            </div>
            <div style={{ marginTop: 60 }}><Carousel3D /></div>
        </div>
    </section>
);

/* ============ Le composant principal qui exporte ============ */
const Hero = () => {
    return <HeroA />;
};

export default Hero;
