import {motion} from "framer-motion";

const SimpleCard = () => {
    return (
        <div
            className="w-[150px] overflow-hidden flex relative flex-col aspect-[2/4] text-white bg-[#41352a] rounded-2xl">
            <div className="h-full fadeout">
                <motion.div animate={{
                    opacity: [0, 1, 1, 1, 0],
                    scaleX: [1.5, 1.5, 2.5, 2.5, 2.5,1.5],
                    scaleY: [0.75, 0.75, 0.75, 1.5, 1.5],
                }}
                            transition={{
                                repeat: Infinity,
                                repeatDelay: 1,
                                duration: 3,
                            }}
                            className="text-[80px] origin-top-left [font-family:monospace] leading-[0.8] inset-1 absolute break-all">
                    responsive
                </motion.div>
            </div>
            <p className="mt-auto p-2">Make your animations work on all devices</p>
        </div>
    );
};

export default SimpleCard;