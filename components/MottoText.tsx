"use client";
import React, { useState } from "react";
import styles from "./mottotext.module.scss";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

export const MottoText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
      >
        <p
          className="text-zinc-800 text-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Anak-anak Indonesia mampu untuk membuat mobil dengan kemampuan mereka
          sendiri.
        </p>
      </motion.div>

      <div className={styles.body}>
        <div className="text-zinc-500 text-center uppercase text-[7rem]">
          <p className="text-zinc-200">Esemka Bisa</p>
          <p>Indonesia Bisa</p>
        </div>
      </div>
    </div>
  );
};
