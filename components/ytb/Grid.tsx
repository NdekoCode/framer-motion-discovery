"use client";
import { motion, Variants } from 'framer-motion';

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};
const gridItemVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const fadeUp = {
  initial: {
    opacity: 0,
    y: 100,
  },
  fade: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.25,
    },
  },
};

const fadeDown = {
  initial: {
    opacity: 0,
    y: -100,
  },
  fade: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};
const tapAndHover = {
  hover: {
    scale: 1.2,
    backgroundColor: "#d1d5db",
    color: "#000",
  },
  tap: {
    scale: 0.95,
  },
};
const Grid = () => {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 p-10 gap-10"
    >
      {/* Fade Up/Fade Down */}
      <motion.div
        variants={gridItemVariant}
        className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
      >
        {/* Fade Up */}
        <motion.div
          variants={fadeUp}
          className="size-20 aspect-square bg-stone-100 rounded-lg"
          initial="initial"
          animate="fade"
        />
        {/* Fade Down */}
        <motion.div
          variants={fadeDown}
          initial="initial"
          animate="fade"
          className="size-20 aspect-square bg-stone-100 rounded-full"
        />
      </motion.div>
      {/* Keyframes */}
      <motion.div
        variants={gridItemVariant}
        className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
      >
        <motion.div
          animate={{
            scale: [1, 2, 2, 1],
            rotate: [0, 90, 90, 0],
            borderRadius: ["0%", "50%", "50%", "0%"],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.25,
              ease: "easeInOut",
            },
          }}
          className="size-1/3 aspect-square shadow-md bg-rose-400"
        />
      </motion.div>
      {/* Hover and tap */}
      <motion.div
        variants={gridItemVariant}
        className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
      >
        <motion.button
          variants={tapAndHover}
          whileHover="hover"
          whileTap="tap"
          transition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
          className="py-4 px-2 rounded-md text-base bg-emerald-600 w-1/2 font-light tracking-wide text-white"
        >
          Subscribe
        </motion.button>
      </motion.div>
      {/* Drag and Drop */}
      <motion.div
        variants={gridItemVariant}
        className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
      >
        <motion.div
          drag
          dragConstraints={{
            top: -100,
            bottom: 100,
            left: -100,
            right: 100,
          }}
          dragTransition={{
            bounceStiffness: 600,
            bounceDamping: 20,
          }}
          className="size-1/3 bg-orange-500 rounded-3xl cursor-grab"
        />
      </motion.div>
      <motion.div
        variants={gridItemVariant}
        className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
      ></motion.div>
      <motion.div
        variants={gridItemVariant}
        className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
      ></motion.div>
    </motion.div>
  );
};
export default Grid;
