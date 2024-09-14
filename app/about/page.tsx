'use client';

import {motion} from "framer-motion";

const About = () => {
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
        </div>
    );
};
export default About;