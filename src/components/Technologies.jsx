import { motion } from "framer-motion";
import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconVariants = (duration) => ({
  intial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      erase: "Linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div initial="initial"
        animate="animate"
        variants={{duration: 1.5}}
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div className="p-4"
        initial="initial"
        animate="animate"
        variants={{duration: 1.5}}
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={{duration: 1.5}}
        className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={{duration: 1.5}}
        className="p-4">
          <FaDocker className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={{duration: 1.5}}
        className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        
        initial="initial"
        animate="animate"
        variants={{duration: 1.5}}className="p-4">
          <BiLogoPostgresql className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
