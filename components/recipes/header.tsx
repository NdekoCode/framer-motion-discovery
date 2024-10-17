"use client";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);
const useBoundedScroll = (bounds: number) => {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((current) => {
      const previous = scrollY.getPrevious();
      const diff = current - previous!;
      const newScrollYBounded = scrollYBounded.get() + diff;
      console.log("newScrollYBounded", newScrollYBounded);
      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });

    // Assurez-vous de gérer l'abonnement lors du désabonnement
    return () => unsubscribe();
  }, [bounds, scrollY, scrollYBounded]);
  return { scrollYBounded };
};
export default function Header() {
  const bounds = 50;
  const { scrollYBounded } = useBoundedScroll(bounds);
  // const height = useTransform(scrollY, (v) => Math.max(80 - 0.1 * v, 50));
  const height = useTransform(scrollYBounded, [0, bounds], [80, bounds]);
  const opacity = useTransform(scrollYBounded, [0, bounds], [1, 0]);
  const scale = useTransform(scrollYBounded, [0.95, 1], [1, 1.2]);
  const blurOpacity = useTransform(scrollYBounded, [0, bounds], [1, 0.1]);
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600">
      <div className="z-0 flex-1 overflow-y-auto">
        <motion.header
          style={{
            height,
            backgroundColor: useMotionTemplate`rgba(255,255,255,${blurOpacity})`,
          }}
          className="flex fixed backdrop-blur-md transition-all duration-300 inset-x-0 bg-white h-20"
        >
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-8">
            <motion.p
              style={{ scale }}
              className="flex origin-left transition-transform duration-300 items-center text-xl font-semibold uppercase"
            >
              <span className="-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]">
                The
              </span>
              <span className="-ml-1 text-2xl tracking-[-.075em]">
                Daily Bugle
              </span>
            </motion.p>
            <motion.nav
              style={{ opacity }}
              className="flex space-x-4 transition-opacity duration-300 text-xs font-medium text-slate-400"
            >
              <a href="#">News</a>
              <a href="#">Sports</a>
              <a href="#">Culture</a>
            </motion.nav>
          </div>
        </motion.header>

        <main className="px-8 pt-28">
          <h1 className="h-10 w-4/5 rounded bg-slate-200 text-2xl font-bold" />
          <div className="mt-8 space-y-6">
            {[...Array(2).keys()].map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-200" />
                <p className="h-4 rounded bg-slate-200" />
                <p className="h-4 w-4/6 rounded bg-slate-200" />
              </div>
            ))}
            <div className="h-64 rounded bg-slate-200"></div>
            {[...Array(90).keys()].map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-200" />
                <p className="h-4 rounded bg-slate-200" />
                <p className="h-4 w-4/6 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
