import { motion } from "framer-motion";

interface SectionProgressBarProps {
  activeSection: string;
  sections: { id: string; label: string }[];
}

export const SectionProgressBar: React.FC<SectionProgressBarProps> = ({ activeSection, sections }) => {
  const activeIndex = sections.findIndex(s => s.id === activeSection);
  const progress = (activeIndex + 1) / sections.length;

  return (
    <div
      className="w-full px-3 sm:px-6 md:px-8 pt-2 sm:pt-3 pb-2 flex flex-col items-center backdrop-blur-md bg-black/20 sm:bg-transparent"
      style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 0.25rem)' }}
    >
      <div className="flex justify-between w-full max-w-6xl mb-2 items-center gap-2">
        <span className="text-base sm:text-lg font-bold text-orange-400 whitespace-nowrap">Esteban Cardenas</span>
        <div className="flex-1 min-w-0 flex justify-center gap-3 sm:gap-6 md:gap-8 overflow-x-auto whitespace-nowrap">
          {sections.map((s) => (
            <span
              key={s.id}
              className={`text-[10px] sm:text-xs font-bold tracking-wide ${activeSection === s.id ? 'text-orange-500' : 'text-slate-400'}`}
            >
              {s.label}
            </span>
          ))}
        </div>
        <span className="text-base sm:text-lg font-bold text-orange-500 whitespace-nowrap">KoraDev</span>
      </div>
      <div className="w-full max-w-6xl h-1.5 sm:h-2 bg-slate-800 rounded-full relative overflow-hidden">
        <motion.div
          className="h-full bg-orange-500 rounded-full absolute left-0 top-0"
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
    </div>
  );
};
