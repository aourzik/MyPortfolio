"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Claude l'utilise sûrement pour tes animations
import { LucideIconName } from 'lucide-react'; // Si Claude utilise des icônes

const Footer = () => (
    <footer id="contact" data-screen-label="04 Contact">
        <div className="eyebrow reveal"><span className="dot"></span> 04 — ON SE PARLE ?</div>
        <h2 className="foot-cta reveal reveal-d1">
            <span style={{ fontStyle: "normal", fontFamily: "var(--font-sans)" }}>Construisons</span><br />
            <span className="grad">quelque chose</span><br />
            ensemble.
        </h2>
        <div className="foot-row">
            <div>© 2026 — AÏNY OURZIK</div>
            <div className="links">
                <a href="mailto:hello@ainy.dev">EMAIL</a>
                <a href="#">GITHUB</a>
                <a href="#">LINKEDIN</a>
                <a href="#">CV.PDF</a>
            </div>
            <div>TOULOUSE — FR</div>
        </div>
    </footer>
);

export default Footer;