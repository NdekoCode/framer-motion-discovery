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
const Grid = () => {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 p-10 gap-10"
    >
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
      <motion.div
        variants={gridItemVariant}
        className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
      ></motion.div>
    </motion.div>
  );
};

export default Grid;
