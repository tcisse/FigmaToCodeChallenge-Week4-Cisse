import React from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

export function Header() {
  return (
    <nav className="hidden lg:block">

    <div className="flex justify-between items-center py-4 px-44">
      <Image src="/assets/logo.svg" width={139} height={40} alt="logo" />
      <ul className=" text-heading-04 font-semibold flex gap-6">
        <li>About Me</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact Me</li>
      </ul>
      <button className="bg-black text-white px-6 py-3 rounded-md flex justify-center items-center gap-2">
        Resume
        <FiDownload className="w-4 h-4 text-white" />
      </button>
    </div>
    </nav>
  );
}
