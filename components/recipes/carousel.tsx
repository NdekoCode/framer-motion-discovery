"use client";
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import { KeyboardEvent, useCallback, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type KeyHandler = (event: KeyboardEvent) => void;

function useKeypress(key: string, callback: KeyHandler): void {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        callback(event);
      }
    },
    [key, callback]
  );

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      handleKeyPress(event as unknown as KeyboardEvent);
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyPress]);
}

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
const collapseAspectRatio = 1 / 3;
const fullAspectRatio = 3 / 2;
const ImageMotion = motion(Image);
export default function Carousel() {
  const [index, setIndex] = useState(0);
  useKeypress('ArrowRight',()=>{
    if(index<images.length-1){
      setIndex(index+1)
    }
  })
  useKeypress('ArrowLeft',()=>{
    if(index>0){
      setIndex(index-1)
    }
  })
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
            <motion.div
              animate={{ x: `-${index * 100}%` }}
              initial={false}
              className="flex"
            >
              {images.map(
                (img, key) =>
                  img && (
                    <div className="shrink-0 w-full" key={key}>
                      <ImageMotion
                        height={750}
                        width={1480}
                        animate={{
                          opacity: index === key ? 1 : 0.18,
                        }}
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

        <div className="absolute left-1/2 -translate-x-1/2  bg-gray-900/25 backdrop-blur-md inset-x-0 rounded-full px-4 py-2 bottom-40 lg:bottom-20 flex h-14 justify-center items-center overflow-x-hidden gap-2">
          <motion.div
            className="flex aspect-[3/2] h-full mx-auto"
            initial={false}
            animate={{
              x: `-${(index * 100 * collapseAspectRatio) / fullAspectRatio}%`,
            }}
          >
            {images.map(
              (img, key) =>
                img && (
                  <button
                    className={cn(
                      "flex rounded-lg shrink-0 overflow-hidden hover:opacity-100 hover:bg-transparent transition-all duration-300  h-full",
                      index === key
                        ? "aspect-[3/2] mx-[10%] bg-transparent opacity-100"
                        : "bg-slate-900/50 mx-0 opacity-50 aspect-[2/3]"
                    )}
                    key={key}
                    onClick={() => setIndex(key)}
                  >
                    <ImageMotion
                      initial={false}
                      height={350}
                      width={350}
                      animate={{
                        opacity: index === key ? 1 : 0.95,
                      }}
                      alt={`Image ${index + 1}`}
                      src={img}
                      className="size-full basis-full object-cover"
                    />
                  </button>
                )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
