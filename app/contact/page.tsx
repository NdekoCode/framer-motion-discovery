'use client';
import React from 'react';
import {motion, useMotionValue, useTransform} from 'framer-motion';
import SimpleCard from "@/components/SimpleCard";

const Contact = () => {
    const x = useMotionValue(0);
    const backgroundColor = useTransform(x, [-100,0, 100], ["#000", "#0ff","#dee"])
    const borderRadius  =useTransform(x, [-100, 0, 100], ["50%", "0%", "50%"])
    const scale = useTransform(x,[-100,0,100],[1,1,2.5])
    return (
        <div className="flex flex-col gap-y-10">
            <h1 className="mb-3 text-3xl text-gray-900 font-bold">Contact Us</h1>
            <motion.div
                drag={"x"}
                style={{x, backgroundColor, borderRadius, scale}}
                dragConstraints={{left: 0, right: 0}}
                className="p-3 size-20 flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
                Solid
            </motion.div>

            <motion.div initial={{
                "--x":"0px"
            }} animate={{
                "--x":"100px"
            }}
                        transition={{
                            repeat:Infinity,
                            repeatType:'reverse',
                            repeatDelay:0.35,

                        }}
                        className=" size-20 flex items-center justify-center rounded translate-x-[var(--x)] bg-gray-500 flex items-center justify-center">
                hello
            </motion.div>
            <SimpleCard/>
        </div>
    );
};

export default Contact;
