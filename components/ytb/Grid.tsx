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
      ease:"easeOut",
      delay:0.25
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
      ease:"easeOut",
      delay:0.4
    },
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
        <motion.div variants={fadeDown}
          initial="initial"
          animate="fade" className="size-20 aspect-square bg-stone-100 rounded-full" />
      </motion.div>
      <motion.div
        variants={gridItemVariant}
        className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
      ></motion.div>
      <motion.div
        variants={gridItemVariant}
        className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
      ></motion.div>
      <motion.div
        variants={gridItemVariant}
        className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
      ></motion.div>
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
