'use client'
import React from 'react'
import { FaReact, FaLaravel, FaUnity ,FaFigma, FaGithub   } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SiMysql,SiNextdotjs,SiTypescript  } from "react-icons/si";



const techList = {
  icons: [
    {icon: FaReact},
    {icon: SiNextdotjs},
    {icon: SiTypescript},
    {icon: FaFlutter},
    {icon: FaGithub},
    {icon: FaLaravel},
    {icon: SiMysql},
    {icon: FaUnity},
    {icon: TbBrandCSharp},
    {icon: FaFigma},
  ]
}



export default function Tech() {
  return (
    <div className='h-[300px] items-center justify-center'>
      <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: "easeOut"}}
      className='flex flex-row items-center justify-center gap-4 flex-wrap w-full h-full'
      >
        {techList.icons.map((item, index) => (
          <motion.span
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8}}
          >
          <item.icon style={{ color: "#ffffff" }} className="w-[60px] h-[60px]" />
        </motion.span>
        ))}
        </motion.div>
    </div>
  )
}
