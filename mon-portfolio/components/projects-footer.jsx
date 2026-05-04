"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Claude l'utilise sûrement pour tes animations
import { LucideIconName } from 'lucide-react'; // Si Claude utilise des icônes


const projectsData = [
    {
        n: "01",
        title: "Hbnb — Duchess & Duke",
        desc: "Un clone d'Airbnb transposé dans l'univers des Bridgerton. Réservations de manoirs, calendriers, paiements simulés — le tout dans une esthétique Régence.",
        tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
        role: "Full-Stack",
        year: "2025",
        duration: "6 sem.",
        repo: "github.com/ainy/hbnb",
        // c1 est ta couleur fixe (vieux rose foncé), les autres varient
        c1: "#5b3a3a", c2: "#FFE289", c3: "#C98C8C", c4: "#E5D0CD",
    },
    {
        n: "02",
        title: "Coroller Illustrations & Crochet",
        desc: "Site vitrine pour une créatrice indépendante : galerie d'œuvres, boutique et carnet d'inspiration. Esthétique douce, animations soignées.",
        tags: ["Next.js", "Sanity CMS", "GSAP", "Stripe"],
        role: "Design + Dev",
        year: "2025",
        duration: "4 sem.",
        repo: "github.com/ainy/coroller",
        c1: "#5b3a3a", c2: "#C98C8C", c3: "#FFE289", c4: "#d9b3b3",
    },
    {
        n: "03",
        title: "ReadMe",
        desc: "Application mobile pour recenser et partager ses lectures entre amis. Bibliothèque perso, recommandations, fil social — un Goodreads à taille humaine.",
        tags: ["React Native", "Firebase", "Expo", "Zustand"],
        role: "Mobile · Full-Stack",
        year: "2025",
        duration: "5 sem.",
        repo: "github.com/ainy/readme",
        c1: "#5b3a3a", c2: "#8d7373", c3: "#E5D0CD", c4: "#C98C8C",
    }
];

const ProjectScreen = ({ p }) => (
    <div className="proj-screen">
        <div className="bar"><span></span><span></span><span></span><div className="url">{p.repo}</div></div>
        <div className="canvas">
            <div className="ln s"></div>
            <div className="ln m"></div>
            <div className="ln s"></div>
            <div className="grid">
                <div className="tile"></div><div className="tile"></div><div className="tile"></div>
                <div className="tile"></div><div className="tile"></div><div className="tile"></div>
            </div>
        </div>
    </div>
);

const ProjectsStacked = () => (
    <div className="projects-stack">
        {projectsData.map((p, i) => (
            <div key={p.n} className="proj-card" style={{
                "--c1": p.c1, "--c2": p.c2, "--c3": p.c3, "--c4": p.c4,
                top: `${110 + i * 30}px`,
            }}>
                <div className="proj-info">
                    <div className="proj-num">PROJET — {p.n} / 0{projectsData.length}</div>
                    <h3 className="proj-title">{p.title}</h3>
                    <p className="proj-desc">{p.desc}</p>
                    <div className="proj-meta">
                        <div className="proj-tags">
                            {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                        <div className="proj-actions">
                            <a href="#" className="primary">Voir le projet ↗</a>
                            <a href="#">Code</a>
                        </div>
                    </div>
                </div>
                <div className="proj-visual">
                    <ProjectScreen p={p} />
                    <div className="proj-detail-overlay">
                        <div className="item"><span className="k">Rôle</span><span className="v">{p.role}</span></div>
                        <div className="item"><span className="k">Année</span><span className="v">{p.year}</span></div>
                        <div className="item"><span className="k">Durée</span><span className="v">{p.duration}</span></div>
                        <div className="item"><span className="k">Stack</span><span className="v">{p.tags.slice(0, 2).join(", ")}</span></div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const ProjectsHorizontal = () => (
    <div className="proj-row">
        {projectsData.map(p => (
            <div key={p.n} className="proj-card-h" style={{ "--c1": p.c1, "--c2": p.c2, "--c3": p.c3, "--c4": p.c4 }}>
                <div className="vis"><ProjectScreen p={p} /></div>
                <div className="body">
                    <div className="proj-num">PROJET {p.n}</div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tags">
                        {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const ProjectsGrid = () => (
    <div className="proj-row" style={{ flexWrap: "wrap", overflowX: "visible", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))" }}>
        {projectsData.map(p => (
            <div key={p.n} className="proj-card-h" style={{ "--c1": p.c1, "--c2": p.c2, "--c3": p.c3, "--c4": p.c4, flex: "none" }}>
                <div className="vis"><ProjectScreen p={p} /></div>
                <div className="body">
                    <div className="proj-num">PROJET {p.n}</div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tags">
                        {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const Projects = ({ layout }) => (
    <section id="projets" data-screen-label="03 Projets">
        <div className="eyebrow reveal"><span className="dot"></span> 03 — PROJETS SÉLECTIONNÉS</div>
        <h2 className="section-title reveal reveal-d1">
            Trois <span style={{ fontStyle: "italic" }}>terrains</span> d'<span style={{ background: "linear-gradient(120deg, var(--mesh-c), var(--mesh-d))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>expérimentation</span>.
        </h2>
        <p className="section-sub reveal reveal-d2">
            De l'application web full-stack au mobile, chaque projet répond à une contrainte différente.
        </p>

        {layout === "stacked" && <ProjectsStacked />}
        {layout === "horizontal" && <ProjectsHorizontal />}
        {layout === "grid" && <ProjectsGrid />}
    </section>
);


// Ajoute ça tout en bas de projects-footer.jsx
// Remplace ton composant ProjectsFooter par celui-ci
const ProjectsFooter = () => (
    <>
        {/* On précise ici le style que l'on veut afficher */}
        <Projects layout="stacked" />
    </>
);

export default ProjectsFooter;
