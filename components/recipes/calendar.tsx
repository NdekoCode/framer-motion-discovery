"use client";
import {
  addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, getDate, isSameDay, isSameMonth,
  parse, startOfMonth, startOfWeek, subMonths
} from 'date-fns';
import { AnimatePresence, motion, MotionConfig, Variants } from 'framer-motion';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const sliderVariant: Variants = {
  none: {
    x: 0,
  },
  left: {
    x: -100,
  },
  right: {
    x: 100,
  },
};
export default function Calendar() {
  const [monthString, setMonthString] = useState(format(new Date(), "yyyy-MM"));
  const month = parse(monthString, "yyyy-MM", new Date());

  function nextMonth() {
    const next = addMonths(month, 1);

    setMonthString(format(next, "yyyy-MM"));
  }

  function previousMonth() {
    const previous = subMonths(month, 1);

    setMonthString(format(previous, "yyyy-MM"));
  }
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(month)),
    end: endOfWeek(endOfMonth(month)),
  });
  return (
    <MotionConfig
      transition={{
        duration: 3,
        type: "ease",
        ease: "easeIn",
      }}
    >
      <div className="flex min-h-screen items-start bg-stone-800 pt-16 text-stone-900">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white  overflow-hidden relative">
          <div className="py-8 ">
            <div className="flex flex-col justify-center rounded text-center">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={monthString}
                  initial={{ x: "100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: "-100%" }}
                >
                  <header className="relative flex justify-between px-8">
                    <button
                      className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                      onClick={previousMonth}
                    >
                      <ChevronLeftIcon className="h-4 w-4" />
                    </button>
                    <p className="absolute inset-0 flex items-center justify-center font-semibold">
                      {format(month, "MMMM yyyy")}
                    </p>
                    <button
                      className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                      onClick={nextMonth}
                    >
                      <ChevronRightIcon className="h-4 w-4" />
                    </button>
                  </header>
                  <div className="grid grid-cols-7 px-8 gap-2 mt-5">
                    <div className="grid col-span-7 grid-cols-7 gap-2 mb-5">
                      <span className="font-medium text-gray-500">Sun</span>
                      <span className="font-medium text-gray-500">Mon</span>
                      <span className="font-medium text-gray-500">Tue</span>
                      <span className="font-medium text-gray-500">Wed</span>
                      <span className="font-medium text-gray-500">Th</span>
                      <span className="font-medium text-gray-500">Fr</span>
                      <span className="font-medium text-gray-500">Sat</span>
                    </div>
                    {days.map((day, key) => (
                      <span
                        className={cn(
                          "p-3  font-semibold aspect-square rounded cursor-pointer bg-gray-50 hover:bg-gray-300 transition-colors duration-300",
                          isSameDay(day, new Date()) ? "bg-gray-300" : "",
                          isSameMonth(day, month)
                            ? "text-stone-700"
                            : "text-stone-300"
                        )}
                        key={key}
                      >
                        {getDate(day)}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
