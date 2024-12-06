import { AnimatePresence, motion } from 'motion/react';

import { useToggle } from '@/lib/hooks/useToggle';

const BasicsOfMotion = () => {
  const [isOpen, toggle] = useToggle();
  return (
    <div className="flex flex-col gap-10">
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [0, 150,-150, -150, 0] }}
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            transition={{
                duration:1,
                ease:"backInOut",
                times:[0,0.25,0.5,0.75,0.85,1]
            }}
            className="w-40 rounded-md aspect-square bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
        {/* La propriété `layout` permet a un element de pouvoir être animer quand sa position change, ainsi quand il retourne a sa position initiale ou quand il change de position il pourra le faire avec animation cela fonctionne super bien quand on a un `AnimatePresence` avec comme mode `popLayout` mais il fonctionne bien dans les autres modes mais pas aussi efficacement qu'avec `popLayout` 
        // Ce animation de l'element qui a comme props `layout` ne marche que si l'element n'as des propriété d'animation de framer-motion comme `initial`, `animate`,`exit`, while...,...
        */}
        <motion.button
          layout
          className="text-lg w-max text-white bg-blue-500 rounded-md py-3 px-5"
          onClick={toggle}
        >
          Show/Hide
        </motion.button>
    </div>
  );
};

export default BasicsOfMotion;
