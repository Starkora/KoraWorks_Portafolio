"use client";

import { useState, useRef } from 'react';
// import { ParticleSystem } from './components/ui/ParticleSystem';
import { ParticlesTS } from '@/components/ui/ParticlesTS';
import { HomeSection } from '@/components/sections/HomeSection';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { motion, AnimatePresence } from 'framer-motion';
import { BottomNav } from './components/ui/BottomNav';
import { SectionProgressBar } from './components/ui/SectionProgressBar';

export default function Home() {
  const sections = [
    { id: 'home', label: 'Home', component: <HomeSection /> },
    { id: 'about', label: 'Sobre mí', component: <About /> },
    { id: 'projects', label: 'Proyectos', component: <Projects /> },
    { id: 'experience', label: 'Experiencia', component: <ExperienceSection /> },
    { id: 'skills', label: 'Skills', component: <SkillsSection /> },
  ];
  const [activeSection, setActiveSection] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);
  const prevSection = useRef('home');
  const getSectionIndex = (id: string) => sections.findIndex(s => s.id === id);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  // Sincronizar con BottomNav y disparar animación
  const handleNav = (sectionId: string) => {
    if (sectionId !== activeSection) {
      const prevIdx = getSectionIndex(activeSection);
      const nextIdx = getSectionIndex(sectionId);
      setSlideDirection(nextIdx > prevIdx ? 'right' : 'left');
      setIsAnimating(true);
      setTimeout(() => {
        prevSection.current = activeSection;
        setActiveSection(sectionId);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
  <main className="relative min-h-screen pb-24 overflow-hidden pt-[calc(env(safe-area-inset-top,0px)+3.5rem)]">
      {/* Barra de progreso superior */}
  <div className="fixed top-0 left-0 w-full z-50">
        <SectionProgressBar
          activeSection={activeSection}
          sections={sections.map(s => ({ id: s.id, label: s.label }))}
        />
      </div>
      {/* Fondo global de partículas estilo landing */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesTS />
      </div>

      {/* Animación slide dinámica entre secciones */}
      <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ x: isAnimating ? (slideDirection === 'right' ? 400 : -400) : 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isAnimating ? (slideDirection === 'right' ? -400 : 400) : 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
          >
            {sections.find(s => s.id === activeSection)?.component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BottomNav con navegación sincronizada */}
      <BottomNav onNavigate={handleNav} activeSection={activeSection} />
    </main>
  );
}