import React from "react";
import Image from "next/image";
import { FaFacebook, FaReddit, FaTwitter } from "react-icons/fa";
import { BiLogoDiscord } from "react-icons/bi";

const socialMediaIcons = [
  { icon: <FaFacebook className="w-5 h-5" />, name: "Facebook" },
  { icon: <FaReddit className="w-5 h-5" />, name: "Reddit" },
  { icon: <FaTwitter className="w-5 h-5" />, name: "Twitter" },
  { icon: <BiLogoDiscord className="w-5 h-5" />, name: "Discord" },
];

export function HeroSection() {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-10 md:mt-10 md:px-56 px-5 md:mb-20 mb-10">
      <div className="lg:max-w-xl">
        <div className="text-outlined-01 mb-10">
          Hello I’am <span className="font-extrabold">Evren Shah.</span>{" "}
          <span className="font-extrabold">Frontend</span> <span className="invisible-text">Developer</span> Based In{" "}
          <span className="font-extrabold">India.</span>
        </div>
        <p className="text-p-02 text-zinc-500 md:mb-28 mb-10">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </p>
        <div>
          <div className="flex flex-row gap-5">
            {socialMediaIcons.map((index) => (
              <div
                key={index.name}
                className="icon-hover hover:bg-black w-14 h-14 border-2 bg-white border-black flex justify-center items-center rounded-md"
              >
                <div className="icon">{index.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image src="/assets/images/hero.png" width={889} height={596} alt="" />
    </div>
  );
}
