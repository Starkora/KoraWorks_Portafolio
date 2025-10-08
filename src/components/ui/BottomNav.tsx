"use client";

import React from "react";
import { FaHome, FaCodeBranch, FaBriefcase, FaStar, FaUser } from "react-icons/fa";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";

type Item = {
  href: string;
  label: string;
  icon: IconType;
};

const items: Item[] = [
  { href: "#home", label: "Home", icon: FaHome },
  { href: "#about", label: "Sobre mí", icon: FaUser },
  { href: "#projects", label: "Proyectos", icon: FaCodeBranch },
  { href: "#experience", label: "Experiencia", icon: FaBriefcase },
  { href: "#skills", label: "Skills", icon: FaStar },
];

type BottomNavProps = {
  onNavigate?: (sectionId: string) => void;
  activeSection?: string;
};

export const BottomNav: React.FC<BottomNavProps> = ({ onNavigate, activeSection }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    }
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-2 sm:bottom-4 z-40 flex justify-center px-2 sm:px-4"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Navegación inferior"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="rounded-full bg-black/50 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)] will-change-transform"
        style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" as any }}
      >
  <ul className="m-0 list-none pl-0 flex items-center gap-4 sm:gap-8 md:gap-10 px-3 sm:px-6 py-2 sm:py-3">
          {items.map((it) => {
            const Icon = it.icon;
            const isActive = activeSection === it.href.replace('#', '');
            return (
              <li key={it.href} className="list-none">
                <a
                  href={it.href}
                  onClick={(e) => handleClick(e, it.href)}
                  className={`group inline-flex items-center gap-2 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/30 ${isActive ? 'bg-orange-500/20 text-orange-500' : 'hover:bg-orange-500/20 hover:-translate-y-0.5'}`}
                  aria-label={it.label}
                >
                  <motion.span
                    className="inline-flex leading-none"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  >
                    <Icon size={20} color="#f97316" />
                  </motion.span>
                  <motion.span
                    className="hidden sm:inline text-sm md:text-base text-white/80"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  >
                    {it.label}
                  </motion.span>
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
};
