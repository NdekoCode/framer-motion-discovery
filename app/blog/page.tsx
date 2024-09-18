'use client';

import React, {ChangeEvent} from 'react';
import {motion, useMotionValue} from "framer-motion";

const Blog = () => {
    const scale = useMotionValue(2);
    const [textValue, setTextValue] = React.useState<number>(scale.get())
    const onRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        scale.set(parseFloat(e.target.value))
        setTextValue(parseFloat(e.target.value))
    }
    return (
        <div className="flex flex-col gap-y-10">
            <h1 className="mb-3 text-3xl text-gray-900 font-bold">Our blog</h1>
            <motion.div style={{scale}} transition={{
                duration: 0.5,
                ease: "easeIn"
            }} className="h-10 w-10 rounded bg-gray-500 flex items-center justify-center">
                hello
            </motion.div>
            <div className="flex items-center flex-col gap-8 justify-center min-h-screen">
                <motion.button
                    className="bg-black text-white px-3 py-2 rounded-md"
                    style={{scale}}
                    transition={{type: 'spring', damping: 300}}

                >
                    Scale ⚖️
                </motion.button>
                <div
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 p-3 bg-white/10 rounded-xl flex items-center justify-center">
                    <input
                        type="range"
                        min={0.5}
                        max={5}
                        step={0.01}
                        defaultValue={1}
                        onChange={onRangeChange}
                    />
                    {textValue}
                </div>
            </div>
        </div>
    );
};

export default Blog;
