"use client";
import React, { useRef } from "react";
import Picture1 from "@/public/assets/parallax-suv-esemka.jpg";
import Picture2 from "@/public/assets/Factory.jpg";
import Picture3 from "@/public/assets/pakde-transformed.jpeg";
import Picture4 from "@/public/assets/Factory.jpg";
import Picture5 from "@/public/assets/worker.jpg";
import Picture6 from "@/public/assets/mobil_bak.jpg";
import Picture7 from "@/public/assets/mobil_bak.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./zoomgallery.module.scss";
import Image from "next/image";

export const ZoomGallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale1,
    },
    {
      src: Picture2,
      scale: scale2,
    },
    {
      src: Picture3,
      scale: scale3,
    },
    {
      src: Picture4,
      scale: scale2,
    },
    {
      src: Picture5,
      scale: scale3,
    },
    {
      src: Picture6,
      scale: scale4,
    },
    {
      src: Picture7,
      scale: scale5,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map((picture, i) => {
          return (
            <motion.div
              key={i}
              style={{ scale: picture.scale }}
              className={styles.el}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={picture.src}
                  fill
                  alt="picture"
                  placeholder="blur"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
