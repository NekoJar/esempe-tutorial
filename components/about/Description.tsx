"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { ReactNode, useLayoutEffect, useRef } from "react";

const phrases = [
  "Berawal dari sekelompok orang",
  "yang mempunyai cita-cita yang sama",
  "untuk membuktikan bahwa anak-anak Indonesia",
  "bisa dan mampu untuk membuat mobil sendiri",
];

export const Description = () => {
  return (
    <div className="relative text-white/80 text-[2.5vw] uppercase mt-[10vw] mr-[10vw] text-right">
      {phrases.map((phrase, i) => {
        return <AnimatedText key={i}>{phrase}</AnimatedText>;
      })}
    </div>
  );
};

const AnimatedText = ({ children }: { children: ReactNode }) => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(container.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=400px bottom",
        },
        opacity: 0,
        right: "-200px",
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <p ref={container} className="m-0 relative">
      {children}
    </p>
  );
};
