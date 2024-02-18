import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";

export function Header() {
  return (
    <div>
      <nav className="hidden lg:block">
        <div className="flex justify-between items-center py-4 px-44">
          <Image src="/assets/logo.svg" width={139} height={40} alt="logo" />
          <ul className=" text-heading-04 font-semibold flex gap-6">
            <Link href="#about-me">About Me</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Project</Link>
            <Link href="#contact">Contact Me</Link>
          </ul>
          <button className="bg-black text-white px-6 py-3 rounded-md flex justify-center items-center gap-2">
            Resume
            <FiDownload className="w-4 h-4 text-white" />
          </button>
        </div>
      </nav>
      {/* Mobile version */}
      <nav className="px-5 md:hidden block py-4">
        <div className="flex flex-row justify-between items-center">

        <Image src="/assets/logo.svg" width={139} height={40} alt="logo" />

        <IoMdMenu className="w-8 h-8" />
        </div>
      </nav>
    </div>
  );
}
