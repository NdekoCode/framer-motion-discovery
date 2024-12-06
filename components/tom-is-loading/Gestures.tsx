import { motion } from 'motion/react';

const Gestures = () => {
  return (
    <div className="flex flex-col gap-10">
      <motion.button
        whileHover={{
          backgroundColor: "var(--blue-800)",
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
          rotate: "2.5deg",
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="flex w-fit items-center rounded-md justify-center bg-blue-600 text-white px-5 py-2.5"
      >
        Click Me !
      </motion.button>
      <motion.button
        whileHover={{
          backgroundColor: "var(--slate-900)",
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
          rotate: "2.5deg",
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="flex w-fit items-center rounded-md justify-center bg-slate-700 text-white px-5 py-2.5"
      >
        Click Me !
      </motion.button>
    </div>
  );
};

export default Gestures;
