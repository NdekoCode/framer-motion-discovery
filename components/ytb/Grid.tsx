"use client";
import { motion, useScroll, Variants } from 'framer-motion';

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

const svgIconVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252,211,77,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252,211,77,1)",
    transition: {
      default: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      },
      fill: {
        duration: 1,
        ease: "easeIn",
        delay: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      },
    },
  },
};
const Grid = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  return (
    <div>
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
        {/* Scroll animation */}
        <motion.div
          variants={gridItemVariant}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div className="size-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className="size-full bg-gray-400 rounded-xl origin-bottom"
              style={{ scaleY: completionProgress }}
            />
          </motion.div>
        </motion.div>
        {/* SVG Animation */}
        <motion.div
          variants={gridItemVariant}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path
              variants={svgIconVariant}
              initial="hidden"
              animate="visible"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
      <section className="flex flex-col gap-10 mb-10 text-slate-100 container">
        <h1 className="text-5xl tracking-wide  text-slate-100 text-center">
          Just keep scrolling{" "}
        </h1>
        <p className="text-slate-300 font-thin text-4xl w-1/2 mx-auto">
         Framer dolor sit amet consectetur adipisicing elit. Amet modi
          nisi quo eaque magni corporis delectus quam maiores veniam expedita in
          architecto ex, tempore distinctio fugit ducimus hic reprehenderit
          exercitationem!
        </p>
        <p className="text-slate-300 font-thin text-4xl w-1/2 mx-auto">
          Motion, ipsum dolor sit amet consectetur adipisicing elit. Amet modi
          nisi quo eaque magni corporis delectus quam maiores veniam expedita in
          architecto ex, tempore distinctio fugit ducimus hic reprehenderit
          exercitationem!
        </p>
      </section>
    </div>
  );
};
export default Grid;
