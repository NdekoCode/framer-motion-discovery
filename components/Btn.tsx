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
                scale: 1.5,
            }}
            transition={{
                repeat: 2,
                ease: "easeInOut",
                repeatType: 'reverse'
            }}
            {...props}
        >
            {children}
        </motion.button>
    );
};