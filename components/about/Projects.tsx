"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Esemka mobil",
    src: "Esemka_Bima.jpg",
  },
  {
    title: "Profesionalitas yang tinggi",
    src: "Factory.jpg",
  },
  {
    title: "Pemuda Pemudi Tangguh",
    src: "worker.jpg",
  },
  {
    title: "Untuk indonesia yang lebih maju",
    src: "mobil_bak.jpg",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: imageContainer.current,
        pin: true,
        start: "top-=100px",
        end: "bottom+=550px",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative text-white mt-[25vh] p-[10%]">
      <div className="flex h-[700px] justify-between gap-[5%]">
        <div ref={imageContainer} className="relative h-full w-[40%]">
          <Image
            src={`/assets/${projects[selectedProject].src}`}
            fill={true}
            alt="ProjectImage"
            priority={true}
            className="object-cover"
          />
        </div>
        <div className="flex h-full w-[20%] text-[1.6vw] last-of-type:items-end last-of-type:text-[1vw]">
          <p>
            Seiring berjalannya waktu ESEMKA akhirnya berpindah ke jalur
            Industri untuk dapat lebih mengembangkan diri beserta variasi
            produknya.
          </p>
        </div>
        <div className="flex h-full w-[20%] text-[1.6vw] last-of-type:items-end last-of-type:text-[1vw]">
          <p>
            ESEMKA membentuk suatu badan usaha berbentuk perseroan terbatas yang
            diberi nama PT. Solo Manufaktur Kreasi yang 100% sahamnya dimiliki
            oleh swasta nasional.
          </p>
        </div>
      </div>

      <div className="flex flex-col relative mt-[800px] pb-[200px]">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              onMouseEnter={() => {
                setSelectedProject(i);
              }}
              className="w-full uppercase text-[3vw] border-b border-white flex justify-end"
            >
              <h2 className="m-0 mt-[40px] mb-[20px] cursor-default">
                {project.title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
