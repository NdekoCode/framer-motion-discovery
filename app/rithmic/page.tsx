"use client";
import { motion, Variants } from 'motion/react';

const showHiddenVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      // Ici je dis quand l'element va etre visible je veux ajouter un retard d'animation de 0.25s sur chaque element enfant de l'element parent
      staggerChildren: 0.25,
    },
  },
};
const gridItemVariant = {
  hidden: {
    opacity: 0,
    y: -25,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
const page = () => {
  return (
    <div className="dark">
      <div className="container">
        <h1 className="text-3xl text-gray-700 dark:text-gray-100">
          Learn Framer Motion with Rithmic
        </h1>
        <div className="flex flex-col overflow-x-hidden gap-10">
          <motion.div
            variants={showHiddenVariant}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 p-10 gap-10"
          >
            {/* On ne met pas les propriétés `initial` et `animate` sur les enfant car ceux qui sont appliquer sur le parent vont automatiquement être appliquer sur les enfant, donc les enfants vont heriter de ces proprieter grace aux parents */}
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            >
                {/* FADE UP AND FADE IN ANIMATION WITH FRAMER MOTION */}

                {/* FADE UP ANIMATION WITH FRAMER MOTION */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.25,
                }}
                className="size-20 rounded-lg bg-slate-100"
              ></motion.div>

                {/* FADE IN ANIMATION WITH FRAMER MOTION */}
              <motion.div
                className="size-20 rounded-full bg-slate-100"
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              ></motion.div>
            </motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            ></motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            ></motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            ></motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            ></motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default page;
