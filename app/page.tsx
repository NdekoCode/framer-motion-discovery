/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import {motion} from 'framer-motion';
import {FC, PropsWithChildren} from 'react';

import {useToggle} from '@/lib/hooks/useToggle';
import {Btn} from "@/components/Btn";

function Home() {
    const [open, onToggle] = useToggle();
    return (
        <div className="container px-5 mx-auto mt-10 lg:px-0">
            <h1 className="text-3xl font-bold my-0.5">Hello framer motion</h1>
            <div className="mt-20">
                <div className="flex gap-2 vstack">
                    <motion.div
                        className="mb-3 box"
                        initial={{opacity: 0}}
                        animate={{opacity: open ? 1 : 0, x: open ? 100 : 0, rotate: open ? 0 : 45}}
                        whileTap={{scale: 1.05}}
                    >
                        1
                    </motion.div>
                </div>
                <Btn onClick={onToggle}>Afficher / Masquer</Btn>
            </div>
        </div>
    );
}

export default Home;
