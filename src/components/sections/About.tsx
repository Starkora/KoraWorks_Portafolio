'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend',
    description: 'React, Next.js, TypeScript, Tailwind CSS',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Backend',
    description: 'Node.js, Java, Express, Mysql',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'DevOps',
    description: 'Docker, AWS, Azure, Git',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    description: 'React Native',
    color: 'from-orange-500 to-red-500',
  },
];

export const About: React.FC = () => {
  return (
  <section id="about" className="fixed inset-0 w-full h-screen flex flex-col items-center justify-start bg-black/50 z-20 overflow-y-auto">
  <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 mt-12 sm:mt-16 pb-24 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
   
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Desarrollador apasionado por crear soluciones innovadoras
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">Mi Historia</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                Con más de 2 años de experiencia en desarrollo web, me especializo en crear 
                aplicaciones modernas y escalables. Mi pasión por la tecnología me impulsa 
                a estar siempre actualizado con las últimas tendencias del desarrollo.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Aquí verás mi trayectoria profesional, empresas y proyectos destacados.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, 
                contribuyendo a proyectos open source y compartiendo conocimiento con la comunidad.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '10+', label: 'Proyectos' },
                { number: '2+', label: 'Años' },
                { number: '10+', label: 'Tecnologías' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center glass-morphism p-4 rounded-xl"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-morphism p-6 rounded-2xl hover-lift cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">{skill.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
};