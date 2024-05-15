"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { ReactNode, useLayoutEffect, useRef } from "react";

const phrases = [
  "seiring dengan dicetuskannya kota Solo ",
  "sebagai Kota Vokasi oleh Bapak Joko Widodo",
  "Banyaknya SMK yang berdiri, mendorong",
  "semangat komunitas ESEMKA untuk",
  "semakin cepat mewujudkan ",
  "cita-cita mereka.",
];

export const DescriptionBottom = () => {
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
        left: "-200px",
        ease: "power3.Out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <p ref={container} className="m-0 relative text-start">
      {children}
    </p>
  );
};
