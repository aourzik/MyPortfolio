"use client";

import React, { useEffect } from 'react';
import Navbar from '@/components/app';
import Hero from '@/components/hero';
import Background from '@/components/background';
import AboutSection from '@/components/about-section';
import AboutTimeline from '@/components/about-timeline';
import ProjectsFooter from '@/components/projects-footer';
import Footer from '@/components/footer';

export default function Home() {

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        // Si l'élément est visible à l'écran
        if (e.isIntersecting) {
          e.target.classList.add("in"); // On lui donne la classe qui rend visible
        }
      });
    }, {
      threshold: 0.1,      // Déclenche quand 10% de l'élément est visible
      rootMargin: "0px 0px -50px 0px" // Optionnel: déclenche un peu avant qu'il arrive
    });

    // On dit à l'observateur de surveiller tous les éléments ".reveal"
    const elements = document.querySelectorAll(".reveal");
    elements.forEach(el => io.observe(el));

    // NETTOYAGE : On arrête de surveiller quand on quitte la page
    return () => io.disconnect();
  }, []);

  return (
    <main className="shell">
      <Background />
      <Navbar />
      <Hero />
      <AboutSection />
      <AboutTimeline />
      <ProjectsFooter />
      <Footer />
    </main>
  );
}