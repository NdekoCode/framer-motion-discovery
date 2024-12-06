import { motion, useInView, Variants } from 'motion/react';
import { useEffect, useRef } from 'react';

const bgVariant: Variants = {
  initial:{
    backgroundColor: "red",
    opacity: 0,
  },
  visible:{
    backgroundColor: "green",
    opacity: 1,
  }
};
const ViewBasedAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("In view", isInView);
  }, [isInView]);
  return (
    <motion.div
      variants={bgVariant}
      initial="initial"
      ref={ref}
      whileInView={isInView ? 'visible':'initial'}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="h-80 w-full"
    ></motion.div>
  );
};

export default ViewBasedAnimation;
