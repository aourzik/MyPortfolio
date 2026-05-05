"use client";

import React, { useState, useEffect, useRef } from 'react';

// On crée un composant principal qui contient les deux sections
export default function AboutTimeline() {
    return (
        <TimelineSection />
    );
}

/* ============ Section Timeline ============ */
const tlData = [
    { year: "2018", title: "Ergonome", org: "Santé Sécurité · UX Research", desc: "Des années à étudier comment les humains interagissent avec les systèmes complexes. Tests utilisateurs, analyses cognitives, recommandations terrain." },
    { year: "2023", title: "Le pivot", org: "Une décision, beaucoup de questions", desc: "Le constat : les meilleurs designs meurent si personne ne sait les coder. Je décide d'apprendre l'autre moitié du métier." },
    { year: "2025", title: "Holberton School", org: "Toulouse · Full-Stack", desc: "Bootcamp intensif. C, Python, JavaScript, algorithmes, systèmes, devOps. Apprendre à apprendre, vite et profondément." },
    { year: "Fin 2025", title: "Premiers projets", org: "Hbnb · Coroller · ReadMe", desc: "Du clone Airbnb façon Bridgerton aux apps mobiles, je construis ma boîte à outils sur des projets vrais — chacun avec ses contraintes." },
    { year: "2026 — Now", title: "Open to work", org: "Web Developer Full-Stack en Alternance", desc: "Je cherche une équipe où la qualité d'exécution compte autant que l'idée et où l'accompagnement et l'apprentissage sont valorisés." },
];

const TimelineSection = () => {
    const ref = useRef(null);
    const [fill, setFill] = useState(0);
    const [active, setActive] = useState(new Set());

    useEffect(() => {
        const onScroll = () => {
            if (!ref.current) return;
            const r = ref.current.getBoundingClientRect();
            const vh = window.innerHeight;
            const start = vh * 0.7;
            const end = vh * 0.2;
            const total = r.height;
            const passed = Math.max(0, start - r.top);
            const max = Math.max(1, total - (start - end));

            setFill(Math.min(100, (passed / max) * 100));

            const items = ref.current.querySelectorAll(".tl-item");
            const next = new Set();
            items.forEach((el, i) => {
                const er = el.getBoundingClientRect();
                if (er.top < vh * 0.75) next.add(i);
            });
            setActive(next);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section id="parcours" data-screen-label="02 Parcours">
            <div className="eyebrow reveal"><span className="dot"></span> 02 — PARCOURS</div>
            <h2 className="section-title reveal reveal-d1">
                D'<span style={{ fontStyle: "italic" }}>ergonome</span> à <span style={{ background: "linear-gradient(120deg, var(--mesh-c), var(--mesh-b))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>développeuse</span>.
            </h2>
            <p className="section-sub reveal reveal-d2">Une trajectoire non-linéaire — chaque étape éclaire la suivante.</p>

            <div className="timeline" ref={ref}>
                <div className="timeline-track">
                    {/* On utilise une variable CSS pour la hauteur du remplissage */}
                    <div className="timeline-fill" style={{ height: `${fill}%` }}></div>
                </div>
                {tlData.map((t, i) => (
                    <div key={i} className={`tl-item ${active.has(i) ? "in" : ""}`}>
                        <div className="tl-year">{t.year}</div>
                        <div className="tl-title">{t.title}</div>
                        <div className="tl-org">{t.org}</div>
                        <div className="tl-desc">{t.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};