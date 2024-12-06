"use client";;
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import AnimationControls from '@/components/tom-is-loading/AnimationControls';
import BasicsOfMotion from '@/components/tom-is-loading/BasicsOfMotion';
import Gestures from '@/components/tom-is-loading/Gestures';
import ScrollAnimation from '@/components/tom-is-loading/ScrollAnimation';

const page = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);
  return (
    <div className="container mt-10">
          <ScrollAnimation/>
      <div className="flex flex-col gap-10 min-h-svh">
        <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-100">
          Framer motion with Tom Is Loading
        </h1>
          <BasicsOfMotion />
          <Gestures />
          <AnimationControls />
          {/* <ViewBasedAnimation/> */}
      </div>
    </div>
  );
};

export default page;
