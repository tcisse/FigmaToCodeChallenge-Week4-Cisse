import React from "react";
import { FaGitAlt, FaSass } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNestjs, SiStorybook, SiSocketdotio } from "react-icons/si";

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
      <h1 className="text-center text-display-01 mb-20">
        My <span className="font-extrabold">Skills</span>{" "}
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-2 md:max-w-6xl mx-auto md:gap-10 gap-5">
        {skills.map((index) => (
          <div
            key={index.name}
            className="md:w-[186px] w-[150px] md:h-[186px] h-[150px] border-2 bg-white hover:bg-slate-400 border-black flex flex-col justify-center items-center rounded-md"
          >
            <div className="mb-5">{index.icon}</div>
            <p className="text-heading-05 font-bold">{index.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
