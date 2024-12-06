import { motion, useAnimationControls, Variants } from 'motion/react';

const flipVariants:Variants = {
    initial:{
        rotate: 0,
    },
    flip:{
        rotate:180,

    }
}
const AnimationControls = () => {
    const animationControls = useAnimationControls();
    const handleClick = ()=>{
        animationControls.start('flip');
    }
  return (
    <motion.div layoutId='animationControls'  className="flex flex-col gap-10 w-fit">
    

    <motion.button
        whileHover={{
          backgroundColor: "var(--blue-800)",
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
          rotate: "2.5deg",
        }}
        transition={{
          ease: "easeInOut",
        }}
        onClick={handleClick}
        className="flex w-fit items-center rounded-md justify-center bg-blue-600 text-white px-5 py-2.5"
      >
        Click Me !
      </motion.button>
    <motion.div animate={animationControls} variants={flipVariants} initial="initial" className="size-20 bg-black">
      
    </motion.div>
    </motion.div>
  )
}

export default AnimationControls
