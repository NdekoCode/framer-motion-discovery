/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

import { useToggle } from './hooks/useToggle';

function App() {
  const [open, onToggle] = useToggle();
  return (
    <div className="container px-5 mx-auto mt-10 lg:px-0">
      <h1 className="text-3xl font-bold my-0.5">Hello framer motion</h1>
      <div className="mt-20">
        <div className="flex gap-2 vstack">
          <motion.div
            className="mb-3 box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: open ? 100 : 0 }}
          >
            1
          </motion.div>
        </div>
        <Button onClick={onToggle}>Afficher / Masquer</Button>
      </div>
    </div>
  );
}
export const Button: FC<PropsWithChildren<{ onClick: () => void }>> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md"
      {...props}
    >
      {children}
    </button>
  );
};
export default App;
