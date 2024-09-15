"use client";
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

const ViewBasedAnimations = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });
  useEffect(() => {
    console.log("Is in view -> ", isInView);
  }, [isInView]);
  return (
    <div className="mt-auto">
      <motion.div
        className="h-40 w-40 bg-gray-300"
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      ></motion.div>
      <div
        ref={ref}
        className={cn(
          "h-[50vh] transition-all",
          isInView ? "bg-green-500" : "bg-violet-500"
        )}
      ></div>
    </div>
  );
};

export default ViewBasedAnimations;
