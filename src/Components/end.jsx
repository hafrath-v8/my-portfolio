import React from 'react';
import { motion } from 'framer-motion';

const End = () => {
  return (
    <div className='w-full overflow-hidden relative'>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        {/* Duplicate content to create seamless loop */}
        <h5 className='text-[130px] lg:text-[200px] md:text-[170px] font-bold tracking-wider mr-10'>
          HAFRATHAFRATHAFRATHAFRATHAFRAT
        </h5>
        <h5 className='text-[130px] lg:text-[200px] md:text-[170px] font-bold tracking-wider mr-10'>
          HAFRATHAFRATHAFRATHAFRATHAFRAT
        </h5>
      </motion.div>
    </div>
  );
};

export default End;
