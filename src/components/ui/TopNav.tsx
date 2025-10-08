import { motion } from "framer-motion";

export const TopNav = () => (
  <motion.nav
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 80, damping: 12, duration: 0.7 }}
    layout
  className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-lg flex items-center justify-between px-8 py-3"
  >
    <motion.div layout className="flex items-center gap-3">
      <motion.span layout initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">K</motion.span>
      <motion.span layout initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-2xl font-bold text-orange-400 tracking-wide">KoraWorks</motion.span>
    </motion.div>
    {/* Puedes agregar aquí un botón de tema, redes, etc. */}
  </motion.nav>
);
