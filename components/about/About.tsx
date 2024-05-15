import React from "react";
import { Description } from "./Description";
import { DescriptionBottom } from "./DescriptionBottom";
import { Projects } from "./Projects";

export const About = () => {
  return (
    <div className="pt-32 pb-96 bg-black">
      <div className="px-20 text-white">
        <p className="uppercase text-[16rem] font-extrabold">History</p>
      </div>
      <Description />
      <div className="flex p-8 pb-96">
        <DescriptionBottom />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};
