'use client';

import {motion, useMotionValue, useSpring} from "framer-motion";
import React from "react";

const About = () => {
    const scale = useMotionValue(1);
    const scaleSpring = useSpring(scale);

    const onRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        scaleSpring.set(parseFloat(e.target.value));
    }
    return (
        <div className="flex flex-col gap-y-10">
            <h1 className="mb-3 text-3xl text-gray-900 font-bold">About us</h1>

            <motion.div animate={{
                scale: [1.2, 0.5, 1.3, 0.7, 1.4],
                rotate: [0, 0, 180, 180, 0, 0],
                borderRadius: ['0%', '0%', '50%', '50%', '0%', '0%']
            }} transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 1,
                duration: 2,
                ease: "easeInOut"
            }} className="size-40 bg-gray-700 flex items-center justify-center rounded"><span
                className="text-xl font-medium text-gray-100">Hello</span></motion.div>
            <div className="flex flex-col gap-y-10 h-full mt-auto">


                <motion.button
                    className="bg-black text-white w-max px-3 py-2 rounded-md"
                    style={{scale: scaleSpring}}
                    transition={{type: 'spring', damping: 300}}

                >
                    Scale ⚖️
                </motion.button>
                <div className="w-max mt-auto">
                    <input type="range" min={0.5} max={10} defaultValue={1}
                           onChange={onRangeChange}/>
                </div>
            </div>
        </div>
    );
};
export default About;