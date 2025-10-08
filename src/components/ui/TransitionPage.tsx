import { motion, AnimatePresence } from "framer-motion";

const transitionVariantsPage = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export const TransitionPage = ({ show }: { show: boolean }) => (
  <AnimatePresence mode="wait">
    {show && (
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#18181b]"
        variants={transitionVariantsPage}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.7, ease: "easeInOut" }}
      />
    )}
  </AnimatePresence>
);
