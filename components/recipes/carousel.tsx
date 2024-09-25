"use client";
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const images = [
  "/assets/images/01.jpg",
  "/assets/images/02.jpg",
  "/assets/images/03.jpg",
  "/assets/images/04.jpg",
  "/assets/images/05.jpg",
  "/assets/images/06.jpg",
  "/assets/images/07.jpg",
  "/assets/images/08.jpg",
  "/assets/images/09.jpg",
  "/assets/images/10.jpg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-black">
      <div className="mx-auto relative flex h-screen max-w-7xl flex-col items-center justify-center">
        <div className="relative flex overflow-hidden">
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
              type: "tween",
            }}
          >
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map(
                (img, index) =>
                  img && (
                    <div className="shrink-0 w-full" key={index}>
                      <Image
                        height={750}
                        width={1480}
                        alt={`Image ${index + 1}`}
                        src={img}
                        className="aspect-[3/2] w-full basis-full object-cover"
                      />
                    </div>
                  )
              )}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/60 hover:bg-white/80"
                  onClick={() => setIndex(index - 1)}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/60 hover:bg-white/80"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </MotionConfig>
        </div>

        <motion.div className="absolute  inset-x-0 bg-gray-900/25 backdrop-blur-md rounded-full px-4 py-2 bottom-40 lg:bottom-20 flex h-14 justify-center items-center overflow-x-hidden gap-2">
              {images.map(
                (img, key) =>
                  img && (
                    <motion.button animate={{
                      x:`-${index*100}%`
                    }} className={cn("flex rounded-lg overflow-hidden hover:opacity-100 hover:bg-transparent transition-all duration-300 aspect-[3/2] h-full",index===key?"bg-transparent opacity-100":"bg-slate-900/50 opacity-50")} key={key} onClick={()=>setIndex(key)}>
                      <Image
                        height={350}
                        width={350}
                        alt={`Image ${index + 1}`}
                        src={img}
                        className="size-full basis-full object-cover"
                      />
                    </motion.button>
                  )
              )}
            </motion.div>
      </div>
    </div>
  );
}
