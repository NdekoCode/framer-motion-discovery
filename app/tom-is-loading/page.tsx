'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import BasicsOfMotion from '@/components/tom-is-loading/BasicsOfMotion';

const page = () => {
    const { setTheme } = useTheme()
    useEffect(()=>{
      setTheme('light')
    },[])
  return (
    <div className="container mt-10">

    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-100">Framer motion with Tom Is Loading</h1>
      <BasicsOfMotion/>
    </div>
    </div>
  )
}

export default page
