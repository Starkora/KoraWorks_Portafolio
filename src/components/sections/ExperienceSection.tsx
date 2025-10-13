





import React, { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: '2025',
    title: 'Junior Software Developer',
    company: 'Inetum Perú',
    description: 'Función principal es apoyar en el desarrollo, prueba y mantenimiento de soluciones de software, siguiendo las especificaciones técnicas y los estándares establecidos por la organización.',
  },
  {
    year: '2024',
    title: 'Junior Functional Tester (QA)',
    company: 'Inetum Perú',
    description: 'Garantizar la calidad, funcionalidad y rendimiento del software a través del diseño, implementación, prueba y mantenimiento de aplicaciones.',
  },
  {
    year: '2021',
    title: 'Freelance Frontend Developer',
    company: 'Autónomo',
    description: 'Desarrollo de sitios web y aplicaciones web personalizadas para clientes, utilizando tecnologías modernas de frontend como React, Typescript, Tailwind CSS y Next.js.',
  }
];

export const ExperienceSection: React.FC = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(experiences.length / perPage);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section id="experience" className="fixed inset-0 w-full h-screen flex flex-col items-center justify-start bg-black/50 z-20 overflow-y-auto">
      <div className="max-w-6xl w-full mx-auto px-2 sm:px-6 py-10 sm:py-16 pb-24 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative max-w-2xl mx-auto pt-2 w-full">
            {/* Timeline Curved Line (SVG) */}
            <motion.svg
              className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-12 sm:w-16 pointer-events-none z-0"
              viewBox="0 0 64 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <defs>
                <linearGradient id="timeline-gradient" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" />
                  <stop offset="0.5" stopColor="#a21caf" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path d="M32 0 Q48 250 32 500 Q16 750 32 1000" stroke="url(#timeline-gradient)" strokeWidth="8" fill="none" />
            </motion.svg>
            {experiences.slice(page * perPage, page * perPage + perPage).map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-full sm:w-7/12 max-w-md ${index % 2 === 0 ? 'pr-8 sm:pr-16 text-right' : 'pl-8 sm:pl-16'}`}>
                  <div className={`glass-morphism p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col ${index % 2 === 0 ? 'items-end' : 'items-start'} justify-start`}>
                    <div className="text-xs sm:text-sm text-blue-400 font-semibold mb-0 mt-[-8px] sm:mt-[-12px]">{item.year}</div>
                    <h4 className="text-base sm:text-xl font-bold text-white mb-1 mt-1">{item.title}</h4>
                    <div className="text-purple-400 font-medium mb-2 text-xs sm:text-base">{item.company}</div>
                    <p className="text-gray-300 text-xs sm:text-sm">{item.description}</p>
                  </div>
                </div>
                {/* Timeline Dot animado */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-gray-900 z-10"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </div>
          {/* Flechas de navegación */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-2 mb-2">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className="px-6 py-2 rounded-full bg-orange-500 text-white font-bold text-lg shadow hover:bg-orange-600 transition disabled:opacity-40 flex items-center gap-2"
            >
              <span>↑</span> Anterior
            </button>
            <span className="text-orange-400 font-bold">Página {page + 1} de {totalPages}</span>
            <button
              onClick={handleNext}
              disabled={page === totalPages - 1}
              className="px-6 py-2 rounded-full bg-orange-500 text-white font-bold text-lg shadow hover:bg-orange-600 transition disabled:opacity-40 flex items-center gap-2"
            >
              Siguiente <span>↓</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
