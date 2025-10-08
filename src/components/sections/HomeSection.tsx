import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDownload } from 'react-icons/fa';




const HomeSection: React.FC = () => {
    const fullText = 'puedes optimizarlo!';
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let i = 0;
        let writing = true;
        const interval = setInterval(() => {
            if (writing) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
                if (i === fullText.length) {
                    writing = false;
                    setTimeout(() => {}, 900);
                }
            } else {
                setTypedText(fullText.slice(0, i - 1));
                i--;
                if (i === 0) {
                    writing = true;
                }
            }
        }, 200); // Más lento
        return () => clearInterval(interval);
    }, []);

    return (
    <section id="home" className="fixed inset-0 w-full h-screen flex items-start sm:items-center justify-center bg-black/50 z-20 overflow-y-auto sm:overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-2 max-w-8xl w-full px-4 sm:px-8 items-start sm:items-center justify-center mx-auto mt-8 sm:mt-0 py-6 sm:py-16 pb-24 sm:pb-28">
                {/* Columna izquierda: imagen y bloque principal */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mx-auto md:ml-16 lg:ml-32 w-full sm:w-auto">
                    <img src="/gifs/Home2.gif" alt="Home gif" className="hidden sm:block max-w-[220px] sm:max-w-[320px] w-full h-auto rounded-2xl shadow-xl bg-transparent mb-4 sm:mb-2" />
                    <div className="flex flex-col items-start justify-center w-full sm:w-auto">
                        <h1 className="text-[clamp(28px,8vw,48px)] font-bold text-white mb-3 sm:mb-4 leading-tight text-left sm:text-justify">
                            Si puedes pensarlo, <span className="text-orange-500">{typedText}<span className="animate-pulse">|</span></span>
                        </h1>
                        <p className="text-slate-200 text-sm sm:text-lg mb-5 sm:mb-8 text-left">
                            Como desarrollador frontend y creador de contenido, me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                            <button className="bg-transparent text-white border-2 border-white rounded-full px-6 py-2 text-base hover:border-orange-500 hover:text-orange-500 transition w-full sm:w-auto">
                                Ver proyectos
                            </button>
                            <button className="bg-transparent text-orange-500 border-2 border-orange-500 rounded-full px-6 py-2 text-base hover:bg-orange-500 hover:text-white transition w-full sm:w-auto">
                                Contácta conmigo
                            </button>
                        </div>
                    </div>
                </div>
                {/* Columna derecha: tagline, experiencia, skills, redes, CV, testimonio */}
                <div className="flex flex-col items-center justify-center pl-0 md:pl-8 max-w-lg mx-auto text-center w-full">
                    <p className="text-orange-400 text-base sm:text-lg font-semibold mb-2">
                        Transformo ideas en experiencias digitales memorables.
                    </p>
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 items-center justify-center">
                        <div className="flex flex-col items-center min-w-[80px]">
                            <span className="text-xl sm:text-2xl font-bold text-white">+2</span>
                            <span className="text-xs text-slate-400">Años de experiencia</span>
                        </div>
                        <div className="flex flex-col items-center min-w-[80px]">
                            <span className="text-xl sm:text-2xl font-bold text-white">+10</span>
                            <span className="text-xs text-slate-400">Proyectos</span>
                        </div>
                        <div className="flex flex-col items-center min-w-[80px]">
                            <span className="text-xl sm:text-2xl font-bold text-white">Top</span>
                            <span className="text-xs text-slate-400">Stack: React, Node, TailwindCSS</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 items-center justify-center">
                        <motion.a whileHover={{ scale: 1.2, color: '#ff8800' }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/esteban-eduardo-cardenas-p%C3%A9rez-545238241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4ZYD2dekRSS1d5NO6m8Z7g%3D%3D" target="_blank" rel="noopener" className="text-slate-300 hover:text-orange-500 text-xl sm:text-2xl transition">
                            <FaLinkedin />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#ff8800' }} whileTap={{ scale: 0.9 }} href="https://github.com/Starkora" target="_blank" rel="noopener" className="text-slate-300 hover:text-orange-500 text-xl sm:text-2xl transition">
                            <FaGithub />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#ff8800' }} whileTap={{ scale: 0.9 }} href="https://twitter.com" target="_blank" rel="noopener" className="text-slate-300 hover:text-orange-500 text-xl sm:text-2xl transition">
                            <FaTwitter />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#ff8800' }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/estebankora/" target="_blank" rel="noopener" className="text-slate-300 hover:text-orange-500 text-xl sm:text-2xl transition">
                            <FaInstagram />
                        </motion.a>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 items-center justify-center">
                        <motion.span whileHover={{ scale: 1.3, rotate: 10 }} whileTap={{ scale: 0.9 }} title="React"><FaReact className="text-cyan-400 text-lg sm:text-xl" /></motion.span>
                        <motion.span whileHover={{ scale: 1.3, rotate: 10 }} whileTap={{ scale: 0.9 }} title="Node.js"><FaNodeJs className="text-green-400 text-lg sm:text-xl" /></motion.span>
                        <motion.span whileHover={{ scale: 1.3, rotate: 10 }} whileTap={{ scale: 0.9 }} title="HTML5"><FaHtml5 className="text-orange-400 text-lg sm:text-xl" /></motion.span>
                        <motion.span whileHover={{ scale: 1.3, rotate: 10 }} whileTap={{ scale: 0.9 }} title="CSS3"><FaCss3Alt className="text-blue-400 text-lg sm:text-xl" /></motion.span>
                        <motion.span whileHover={{ scale: 1.3, rotate: 10 }} whileTap={{ scale: 0.9 }} title="JavaScript"><FaJsSquare className="text-yellow-300 text-lg sm:text-xl" /></motion.span>
                    </div>
                    <a
                        href="/cv/cv.pdf"
                        download
                        className="flex items-center gap-2 bg-black/60 text-white border-2 border-white rounded-full px-5 py-2 text-base mb-4 hover:border-orange-500 hover:text-orange-500 transition mx-auto justify-center"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <FaDownload /> Descargar CV
                    </a>
                    <blockquote className="text-slate-400 italic border-l-4 border-orange-500 pl-4 mb-4">
                        “Trabajar conmigo será una experiencia inolvidable, siempre aportando soluciones creativas y eficientes.”
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export { HomeSection };
