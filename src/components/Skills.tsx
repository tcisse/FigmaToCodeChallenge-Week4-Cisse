"use client";

import React from "react";
import { FaGitAlt, FaSass } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNestjs, SiStorybook, SiSocketdotio } from "react-icons/si";
import { motion } from "framer-motion";
import { container, item } from "../../animation";

const skills = [
  { icon: <FaGitAlt className="w-12 h-12" />, name: "Git" },
  { icon: <IoLogoJavascript className="w-12 h-12" />, name: "Javascript" },
  { icon: <FaSass className="w-12 h-12" />, name: "Sass/Scss" },
  { icon: <SiNestjs className="w-12 h-12" />, name: "Nest.Js" },
  { icon: <SiStorybook className="w-12 h-12" />, name: "Storybook" },
  { icon: <SiNestjs className="w-12 h-12" />, name: "Nest.Js" },
  { icon: <FaGitAlt className="w-12 h-12" />, name: "Git" },
  { icon: <SiStorybook className="w-12 h-12" />, name: "Storybook" },
  { icon: <SiSocketdotio className="w-12 h-12" />, name: "Socket.io" },
  { icon: <FaSass className="w-12 h-12" />, name: "Sass/Scss" },
];

export function Skills() {
  return (
    <div id="skills" className="md:mb-20 mb-10">
      <h1 className="text-center md:text-display-01 text-display-02 mb-20">
        My <span className="font-extrabold">Skills</span>
      </h1>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-5 grid-cols-2 md:max-w-6xl max-w-xs mx-auto md:gap-10 gap-5"
      >
        {skills.map((index) => (
          <motion.li
            variants={item}
            key={index.name}
            className="icon-hover md:w-[186px] w-[150px] md:h-[186px] h-[150px] border-2 bg-white hover:bg-black hover:text-white border-black flex flex-col justify-center items-center rounded-md"
          >
            <div className="mb-5 icon">{index.icon}</div>
            <p className="text-heading-05 font-bold">{index.name}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
