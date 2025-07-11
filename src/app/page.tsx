"use client"
import { useState } from "react";
import Slide from "../../components/Slide";
import { slides } from "../../data/slides";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [index, setIndex] = useState(0);
  const totalSlides = slides.length;
  const progressPercent = ((index + 1) / totalSlides) * 100;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div onClick={nextSlide} className="w-full h-screen overflow-hidden cursor-pointer bg-black">

        <div className="absolute left-14 top-1/3 h-1/3 mt-10 w-[1px] bg-gray-700 z-20 rounded">
        <motion.div
          className="bg-gray-200 w-full rounded"
          initial={false}
          animate={{ height: `${progressPercent}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Slide {...slides[index]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
