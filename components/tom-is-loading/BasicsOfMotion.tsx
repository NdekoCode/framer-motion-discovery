"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const BasicsOfMotion = () => {
  const [isShown, setIsShown] = useState(true);
  return (
    <>
      <motion.button
        layout
        className="p-3 bg-blue-500 text-white w-max rounded"
        onClick={() => setIsShown(!isShown)}
      >
        Show/hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isShown && (
          <motion.div
            initial={{
              scale: 0,
              y: 0,
              rotate: "0deg",
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [150, -150, -150, 0],
            }}
            exit={{
              scale: 0,
              rotate: "0deg",
            }}
            transition={{
              duration: 0.5,
            }}
            className="size-80 rounded-xl bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BasicsOfMotion;
