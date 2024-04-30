"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/public/assets/Bima-transparent.png";

import React, { useRef } from "react";
import Image from "next/image";

export const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const heroImageAnimation = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const upperText = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const lowerText = useTransform(scrollYProgress, [0, 1], [0, 350]);

  return (
    <div
      className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700 to-zinc-800 w-[100%]"
      ref={container}
    >
      <div className="flex items-center justify-center p-64 pt-32">
        <motion.div
          style={{ y: heroImageAnimation }}
          className="z-[1] absolute flex justify-center"
        >
          <Image
            src={heroImage}
            alt="heroimg"
            className="w-[75%] h-auto opacity-100 drop-shadow-2xl"
          />
        </motion.div>
        <div>
          <motion.div className="absolute" style={{ y: upperText }}>
            <p className="text-[32rem] text-white uppercase font-semibold">
              Hello
            </p>
          </motion.div>
          <motion.div style={{ y: lowerText }}>
            <p className="text-[32rem] text-white/50 uppercase font-semibold">
              World
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
