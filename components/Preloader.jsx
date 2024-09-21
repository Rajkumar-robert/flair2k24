import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Preloader = ({ setLoading }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 100) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem("isLoaded", "false");
            
            setLoading(false);
          }, 500);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 30); 

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5000 }}
    >
      <motion.div
        className="text-8xl font-bold tracking-wide flex "
        key={count}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {count} 
        {/* <Image
          src={"/assets/images/spider-web.png"}
          width={80}
          height={50}
        ></Image> */}
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
