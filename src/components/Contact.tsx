import React from "react";
import { FaFacebook, FaReddit, FaTwitter } from "react-icons/fa";
import { BiLogoDiscord } from "react-icons/bi";
import { motion } from "framer-motion";
import { container, item } from "../../animation";

const socialMediaIcons = [
  { icon: <FaFacebook className="w-5 h-5" />, name: "Facebook" },
  { icon: <FaReddit className="w-5 h-5" />, name: "Reddit" },
  { icon: <FaTwitter className="w-5 h-5" />, name: "Twitter" },
  { icon: <BiLogoDiscord className="w-5 h-5" />, name: "Discord" },
];

export function Contact() {
  return (
    <div id="contact" className="py-10 bg-white">
      <div className="md:max-w-6xl max-w-xs mx-auto flex md:flex-row items-center flex-col md:space-x-10">
        <div className="w-full flex flex-col space-y-5 mb-5">
          <input
            type="text"
            placeholder="Your name"
            className="border border-black rounded px-3 py-2.5 w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="border border-black rounded px-3 py-2.5 w-full"
          />
          <input
            type="text"
            placeholder="Your website (If exists)"
            className="border border-black rounded px-3 py-2.5 w-full"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="How can I help?"
            className="border border-black rounded px-3 py-2.5 w-full"
          ></textarea>
          <div className="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-6">
            <button className="bg-black py-4 px-3 w-44 text-white text-button-text-01 font-semibold rounded-md">
              Get In Touch
            </button>
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
        <div>
          <h1 className="mb-5 md:text-display-01 text-display-02 font-extrabold">
            Let’s <span className="invisible-text font-extrabold">talk</span>{" "}
            for Something special
          </h1>
          <p className="text-p-02 text-zinc-500 mb-5">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <motion.ul variants={container} initial="hidden" animate="show" className="">
            <motion.li variants={item} className="md:text-heading-03 text-heading-05 font-semibold mb-4">
              Youremail@gmail.com
            </motion.li>
            <motion.li variants={item} className="md:text-heading-03 text-heading-05 font-semibold">
              1234567890
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
