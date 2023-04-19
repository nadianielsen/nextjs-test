"use client"

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})
const Bannertext = () => {

const line1 = "Welcome to "
const line2 = "Movie"
const line3 = "Base"
const line4 = " a movie base for your"
const line5 = " desires"


const sentence = {
  hidden: { opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0,
  },
}
    return ( 
        <motion.h2 initial="hidden" animate="visible" variants={sentence} className={`${montserrat.className} w-[3%] text-3xl text-white p-5 font-semibold`}> 
            {line1.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
            ))}
            {line2.split("").map((char, index) => (
                <motion.span key={char + "-" + "-" + index} variants={letter}>{char}</motion.span>
            ))}
            {line3.split("").map((char, index) => (
                <motion.span className="text-red-600" key={char + "-" + index} variants={letter}>{char}</motion.span>
            ))}
            {line4.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
            ))}
            {line5.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
            ))}
        </motion.h2>
     );
}
 
export default Bannertext;