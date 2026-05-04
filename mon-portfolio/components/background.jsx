"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Claude l'utilise sûrement pour tes animations
import { LucideIconName } from 'lucide-react'; // Si Claude utilise des icônes

// Mesh background + 3D decorative orbs
const Background = () => (
    <>
        <div className="mesh-stage">
            <div className="mesh-blob b1"></div>
            <div className="mesh-blob b2"></div>
            <div className="mesh-blob b3"></div>
            <div className="mesh-blob b4"></div>
            <div className="mesh-blob b5"></div>
        </div>
        <div className="grain"></div>

        {/* Glass orbs scattered */}
        <div className="orb" style={{ width: 120, height: 120, top: "26vh", right: "8vw", opacity: 0.9 }}></div>
        <div className="orb" style={{ width: 64, height: 64, top: "78vh", left: "6vw", opacity: 0.8 }}></div>
        <div className="orb" style={{ width: 200, height: 200, top: "182vh", right: "-40px", opacity: 0.7 }}></div>
        <div className="orb" style={{ width: 90, height: 90, top: "320vh", left: "12vw", opacity: 0.85 }}></div>
        <div className="orb" style={{ width: 150, height: 150, top: "440vh", right: "10vw", opacity: 0.75 }}></div>

        {/* Fluid blobs (SVG) */}
        <svg className="blob-fluid" style={{ top: "60vh", left: "-6vw", width: 280 }} viewBox="0 0 200 200">
            <defs>
                <defs>
                    <linearGradient id="fblob1" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#FFE289" stopOpacity="0.6" /> {/* Sable */}
                        <stop offset="1" stopColor="#C98C8C" stopOpacity="0.3" /> {/* Rose */}
                    </linearGradient>
                </defs>
            </defs>
            <path fill="url(#fblob1)" d="M44.6,-58.1C57.3,-49.4,66,-34.2,68.7,-18.3C71.4,-2.4,68.1,14.2,60.1,28.1C52.1,42,39.4,53.2,24.6,59.8C9.8,66.5,-7.1,68.6,-22.3,63.6C-37.4,58.7,-50.9,46.7,-59.6,31.6C-68.4,16.5,-72.4,-1.7,-68.2,-17.6C-64.1,-33.5,-51.8,-47.1,-37.4,-55.6C-23,-64.1,-6.5,-67.4,8.7,-69.7C24,-72,48,-66.7,44.6,-58.1Z" transform="translate(100 100)" />
        </svg>
        <svg className="blob-fluid" style={{ top: "240vh", right: "-4vw", width: 320 }} viewBox="0 0 200 200">
            <defs>
                <defs>
                    <linearGradient id="fblob2" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0" stopColor="#C98C8C" stopOpacity="0.5" /> {/* Rose */}
                        <stop offset="1" stopColor="#E5D0CD" stopOpacity="0.2" /> {/* Lin */}
                    </linearGradient>
                </defs>
            </defs>
            <path fill="url(#fblob2)" d="M37.6,-52.3C49.3,-44.2,59.5,-33.5,65.1,-20.4C70.7,-7.3,71.6,8.2,66.2,21.5C60.7,34.8,49,46,35.1,55C21.2,64,5.2,70.8,-10.7,70.2C-26.5,69.6,-42.2,61.5,-53.6,49.4C-65,37.3,-72.1,21.2,-72.8,4.7C-73.5,-11.8,-67.8,-28.7,-57.6,-37.9C-47.4,-47.1,-32.7,-48.6,-19.5,-55.2C-6.4,-61.8,5.2,-73.5,16.8,-73.4C28.4,-73.2,40.2,-66.2,37.6,-52.3Z" transform="translate(100 100)" />
        </svg>
    </>
);

export default Background;
