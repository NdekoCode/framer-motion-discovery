"use client";
import { motion, useAnimationControls, useInView, useScroll, Variants } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

import ScrollBlock from '@/components/ScrollBlock';

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
const containerGradient: Variants = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const svgVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252,211,77,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252,211,77,1)",
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
  const { scrollYProgress } = useScroll();
  // On creer une reference que l'on va ecouter quand il sera present dans la vue (Quand il sera visible dans la vue(ecran) de l'utilisateur)
  const containerRef = useRef<HTMLDivElement>(null);
  // On creer une valeurs qui changera quand l'element HTML referencer par `containerRef` sera visible dans la vue de l'utilisateur, on lui passe l'element a observer mais on dit que on veut que cela soit detecter une seule fois
  const isInView = useInView(containerRef, { once: true });
  // On definit un controlleur manuelle des animations framer-motion
  const mainControl = useAnimationControls();

  const { setTheme } = useTheme()
  useEffect(()=>{
    setTheme('dark')
  },[])
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <div className="dark">
      <div className="container mt-10">
        <div className="flex flex-col overflow-x-hidden gap-10">
        <h1 className="text-3xl text-gray-700 dark:text-gray-100">
          Learn Framer Motion with Rithmic
        </h1>
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
            >
              <motion.div
                className="size-1/3 bg-rose-400"
                animate={{
                  scale: [1, 2, 2, 1],
                  rotate: [0, 90, 90, 0],
                  borderRadius: ["10%", "10%", "50%", "10%"],
                }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 0.35,
                  delay: 0.4,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            >
              <motion.button
                className="py-3 bg-emerald-500 w-1/2 text-white rounded-lg will-change-transform tracking-wide"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  bounceDamping: 10,
                  bounceStiffness: 200,
                  duration: 0.35,
                }}
              >
                Send me
              </motion.button>
            </motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 text-xl text-gray-100 aspect-square overflow-hidden flex items-center justify-center rounded-lg gap-10 "
            >
              <motion.div
                className="size-1/3 bg-orange-500 rounded-lg cursor-grab"
                drag
                dragConstraints={{
                  top: -125,
                  left: -125,
                  right: 125,
                  bottom: 125,
                }}
                dragTransition={{
                  bounceDamping: 10,
                  bounceStiffness: 600,
                }}
              />
            </motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            >
              <motion.div className="w-40 aspect-square bg-gray-50/20 overflow-hidden rounded-xl">
                <motion.div
                  className="size-full origin-bottom bg-gray-400 rounded-xl"
                  style={{
                    scaleY: scrollYProgress,
                  }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              variants={gridItemVariant}
              className="bg-slate-800 aspect-square flex items-center justify-center rounded-lg gap-10"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                variants={svgVariant}
                initial="hidden"
                animate="visible"
                viewBox="0 0 24 24"
                className="w-1/2 stroke-amber-500 stroke-[0.5]"
              >
                <motion.path
                  variants={svgVariant}
                  transition={{
                    default: {
                      duration: 1.5,
                      delay: 0.25,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                    fill: {
                      duration: 2,
                      delay: 2,
                      ease: "easeIn",
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </motion.svg>
            </motion.div>
          </motion.div>
          <section className="flex flex-col gap-10" ref={containerRef}>
            <motion.h1
              variants={containerGradient}
              initial="hidden"
              transition={{ delay: 0.3 }}
              className="text-4xl text-gray-100 font-semibold"
              animate={mainControl}
            >
              Just keep scrolling
            </motion.h1>
            <ScrollBlock containerRef={containerRef}/>
          </section>
        </div>
      </div>
    </div>
  );
};
export default page;
