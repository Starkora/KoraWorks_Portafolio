import { motion } from "framer-motion";
import { useState } from "react";

const proyectos = [
  {
    titulo: "Kairos Finanzas Personales",
    descripcion: "Sistema web de gestión financiera.",
    tecnologias: ["React", "Express", "JavaScript"],
    imagen: "/image_projects/Proyecto_Kairos.png",
    link: "https://kairos-seven-rust.vercel.app/login",
    github: "https://github.com/Starkora/Kairos/tree/master/web"
  },
  {
    titulo: "Kairos App Móvil",
    descripcion: "Plataforma móvil para gestión financiera personal.",
    tecnologias: ["React-Native-Puro", "TypeScript", "Gradle", "Java", "Metro"],
    imagen: "/gifs/dev-room.gif",
    link: "",
    github: "https://github.com/Starkora/Kairos_App"
  },
  {
    titulo: "Portfolio Next.js",
    descripcion: "Portafolio personal con SSR y animaciones.",
    tecnologias: ["React", "TypeScript", "Vite"],
    imagen: "/image_projects/Portafolio_Personal.png",
    link: "https://kora-works-portafolio.vercel.app/",
    github: "https://github.com/Starkora/KoraWorks_Portafolio"
  },
  {
    titulo: "E-commerce Moderno",
    descripcion: "Tienda online con carrito y pagos integrados.",
    tecnologias: ["React", "Redux", "Stripe"],
    imagen: "/gifs/Home.gif",
    link: "https://tudemo.com/ecommerce",
    github: "https://github.com/Starkora/E-commerce-Esmeralda"
  },
  {
    titulo: "App de Tareas",
    descripcion: "Gestor de tareas con drag & drop y notificaciones.",
    tecnologias: ["React", "Firebase", "Tailwind"],
    imagen: "/gifs/dev-room.gif",
    link: "https://tudemo.com/tareas",
    github: "https://github.com/tuusuario/app-tareas"
  },
  {
    titulo: "Blog Personal",
    descripcion: "Blog con editor markdown y comentarios en tiempo real.",
    tecnologias: ["Next.js", "MongoDB", "Vercel"],
    imagen: "/gifs/Home2.gif",
    link: "https://tudemo.com/blog",
    github: "https://github.com/tuusuario/blog-personal"
  },
  {
    titulo: "Portfolio Animado",
    descripcion: "Portafolio con animaciones y efectos visuales avanzados.",
    tecnologias: ["React", "GSAP", "Three.js"],
    imagen: "/gifs/Home.gif",
    link: "https://tudemo.com/portfolio-animado",
    github: "https://github.com/tuusuario/portfolio-animado"
  },
  {
    titulo: "API RESTful",
    descripcion: "API para gestión de usuarios y autenticación JWT.",
    tecnologias: ["Node.js", "Express", "MongoDB"],
    imagen: "/gifs/dev-room.gif",
    link: "https://tudemo.com/api",
    github: "https://github.com/tuusuario/api-restful"
  }
];

export function Projects() {
  const [pagina, setPagina] = useState(1);
  const porPagina = 3;
  const totalPaginas = Math.ceil(proyectos.length / porPagina);
  const proyectosPagina = proyectos.slice((pagina - 1) * porPagina, pagina * porPagina);

    return (
      <section id="projects" className="fixed inset-0 w-full h-screen flex flex-col items-center justify-start bg-black/50 z-10 overflow-y-auto">
        <div className="max-w-6xl w-full mx-auto px-2 sm:px-6 py-10 sm:py-16 pb-24 sm:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-24">
            {proyectosPagina.map((project) => (
              <motion.div
                key={project.titulo}
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px #ff8800" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 flex flex-col items-center p-6 gap-4 hover:border-orange-500 transition"
              >
                <img src={project.imagen} alt={project.titulo} className="w-full h-32 object-cover rounded mb-2 shadow" />
                <h3 className="text-xl font-bold text-orange-400 mb-1 text-center">{project.titulo}</h3>
                <p className="text-slate-300 text-sm mb-2 text-center">{project.descripcion}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-2">
                  {project.tecnologias.map(t => (
                    <span key={t} className="bg-orange-500/20 text-orange-500 px-2 py-1 rounded-full text-xs font-bold">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <a href={project.link} target="_blank" rel="noopener" className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold hover:bg-orange-600 transition">Demo</a>
                  <a href={project.github} target="_blank" rel="noopener" className="bg-slate-800 text-white px-4 py-1 rounded-full text-xs font-semibold hover:bg-orange-500 transition">Código</a>
                </div>
              </motion.div>
            ))}
          </div>
          {proyectos.length > porPagina && totalPaginas > 1 && (
            <div className="flex gap-2 justify-center items-center mt-8"
            >
              <button
                onClick={() => setPagina(p => Math.max(1, p - 1))}
                disabled={pagina === 1}
                className="px-4 py-2 rounded-full bg-slate-800 text-white font-bold hover:bg-orange-500 disabled:opacity-40"
              >Anterior</button>
              <span className="text-orange-400 font-bold mx-2">Página {pagina} de {totalPaginas}</span>
              <button
                onClick={() => setPagina(p => Math.min(totalPaginas, p + 1))}
                disabled={pagina === totalPaginas}
                className="px-4 py-2 rounded-full bg-slate-800 text-white font-bold hover:bg-orange-500 disabled:opacity-40"
              >Siguiente</button>
            </div>
          )}
        </div>
      </section>
    );
}