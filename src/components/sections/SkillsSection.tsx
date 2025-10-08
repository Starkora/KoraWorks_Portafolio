
import { motion } from "framer-motion";
import React from "react";

const iconos: Record<string, React.ReactNode> = {
  "React": <svg width="20" height="20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline mr-2"><circle cx="128" cy="128" r="28" fill="#61DAFB"/><ellipse rx="100" ry="40" cx="128" cy="128" fill="none" stroke="#61DAFB" strokeWidth="8"/><ellipse rx="100" ry="40" cx="128" cy="128" fill="none" stroke="#61DAFB" strokeWidth="8" transform="rotate(60 128 128)"/><ellipse rx="100" ry="40" cx="128" cy="128" fill="none" stroke="#61DAFB" strokeWidth="8" transform="rotate(120 128 128)"/></svg>,
  "Next.js": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M8 16h8v8" stroke="#000" strokeWidth="2"/></svg>,
  "TypeScript": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><rect width="32" height="32" rx="6" fill="#3178C6"/><text x="7" y="22" fontSize="14" fill="#fff">TS</text></svg>,
  "Tailwind CSS": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><path d="M16 8c-4 0-6 2-8 6 2-4 4-6 8-6s6 2 8 6c-2-4-4-6-8-6z" fill="#38BDF8"/><path d="M8 18c2-4 4-6 8-6s6 2 8 6c-2-4-4-6-8-6s-6 2-8 6z" fill="#38BDF8"/></svg>,
  "Framer Motion": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><rect width="32" height="32" rx="6" fill="#fff"/><path d="M8 8h16v8H8z" fill="#EA4C89"/><path d="M8 16h8v8H8z" fill="#EA4C89"/></svg>,
  "Vite": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><path d="M16 4l12 24H4L16 4z" fill="#646CFF"/><path d="M16 12l6 12H10l6-12z" fill="#FFD62E"/></svg>,
  "Node.js": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><circle cx="16" cy="16" r="16" fill="#8CC84B"/><text x="7" y="22" fontSize="14" fill="#fff">Node</text></svg>,
  "Express": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><rect width="32" height="32" rx="6" fill="#fff"/><text x="5" y="22" fontSize="14" fill="#000">Ex</text></svg>,
  "MongoDB": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><ellipse cx="16" cy="16" rx="12" ry="16" fill="#47A248"/></svg>,
  "Firebase": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><polygon points="16,4 28,28 4,28" fill="#FFCA28"/></svg>,
  "REST APIs": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><rect width="32" height="32" rx="6" fill="#fff"/><text x="4" y="22" fontSize="14" fill="#000">API</text></svg>,
  "Git": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><circle cx="16" cy="16" r="16" fill="#F05032"/><text x="7" y="22" fontSize="14" fill="#fff">Git</text></svg>,
  "GitHub Actions": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M8 16h16" stroke="#000" strokeWidth="2"/><circle cx="8" cy="16" r="2" fill="#000"/><circle cx="24" cy="16" r="2" fill="#000"/></svg>,
  "Vercel": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><polygon points="16,6 28,26 4,26" fill="#fff"/></svg>,
  "Docker": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><rect width="32" height="32" rx="6" fill="#2496ED"/><text x="4" y="22" fontSize="14" fill="#fff">Docker</text></svg>,
  "CI/CD": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M8 16h16" stroke="#000" strokeWidth="2"/></svg>,
  "Figma": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><circle cx="10" cy="10" r="6" fill="#F24E1E"/><circle cx="22" cy="10" r="6" fill="#A259FF"/><circle cx="10" cy="22" r="6" fill="#FF7262"/><circle cx="22" cy="22" r="6" fill="#1ABCFE"/></svg>,
  "Adobe XD": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><rect width="32" height="32" rx="6" fill="#470137"/><text x="6" y="22" fontSize="14" fill="#fff">XD</text></svg>,
  "GSAP": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><rect width="32" height="32" rx="6" fill="#88CE02"/><text x="4" y="22" fontSize="14" fill="#fff">GSAP</text></svg>,
  "Three.js": <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="inline mr-2"><rect width="32" height="32" rx="6" fill="#000"/><text x="2" y="22" fontSize="14" fill="#fff">Three</text></svg>
};

const skills = [
  {
    categoria: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
  },
  {
    categoria: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"]
  },
  {
    categoria: "DevOps & Tools",
    items: ["Git", "GitHub Actions", "Vercel", "Docker", "CI/CD"]
  },
  {
    categoria: "Diseño & UI",
    items: ["Figma", "Adobe XD", "GSAP", "Three.js"]
  }
];

export const SkillsSection: React.FC = () => (
  <section id="skills" className="fixed inset-0 w-full h-screen flex flex-col items-center justify-start bg-black/50 z-10 overflow-y-auto">
    <div className="max-w-6xl w-full mx-auto px-2 sm:px-6 py-10 sm:py-16 pb-24 sm:pb-28">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 sm:mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
        {skills.map((cat, i) => (
          <motion.div
            key={cat.categoria}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-black/40 rounded-xl p-6 shadow-lg border-l-4 border-orange-500 flex flex-col items-center"
          >
            <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">{cat.categoria}</h3>
            <ul className="flex flex-wrap gap-3 justify-center">
              {cat.items.map((skill, idx) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.2 + idx * 0.07 }}
                  className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold shadow flex items-center"
                >
                  <motion.span
                    initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
                    animate={{
                      scale: 1,
                      rotate: [0, -10, 10, -8, 8, 0],
                      x: [0, -2, 2, -1, 1, 0],
                      opacity: 1
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2 + idx * 0.07,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                    className="inline-block mr-2"
                  >
                    {iconos[skill] ?? null}
                  </motion.span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
// ...no cerrar con paréntesis extra
);
