import {FC, PropsWithChildren} from "react";
import {motion} from 'framer-motion'

export const Btn: FC<PropsWithChildren<{ onClick: () => void }>> = ({
                                                                        children,
                                                                        ...props
                                                                    }) => {
    return (
        <motion.button
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md"
            animate={{
                scaleX: 2,
                scaleY: 2,
                y: "50%"
            }}
            transition={{
                delay: 2,
                repeat: Infinity,
                delayRepeat: 0.5,
                repeatType: 'reverse',
                ease: "easeIn",
                // type: 'spring'
            }}
            {...props}
        >
            {children}
        </motion.button>
    );
};