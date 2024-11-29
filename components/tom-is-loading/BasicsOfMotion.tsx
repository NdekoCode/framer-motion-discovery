import { AnimatePresence, motion } from 'motion/react';

import { useToggle } from '@/lib/hooks/useToggle';

const BasicsOfMotion = () => {
  const [isOpen, toggle] = useToggle();
  return (
    <div className="flex flex-col gap-10">
      <AnimatePresence mode="popLayout">
      {isOpen && <motion.div initial={{rotate:'0deg'}} animate={{rotate:'180deg'}} exit={{rotate:'0deg'}} className="w-40 rounded-md aspect-square bg-black"></motion.div>}
      </AnimatePresence>
{/* La proprieter `layout` permet a un element de pouvoir etre animer quand sa position change, ainsi quand il retourne a sa position ou quand il change de position il pourra le faire avec animation cela fonctionne super bien quand on a un `AnimatePresence` avec comme mode `popLayout` mais il fonctionne bien dans les autres modes mais pas aussi efficacement qu'avec `popLayout` */}
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
