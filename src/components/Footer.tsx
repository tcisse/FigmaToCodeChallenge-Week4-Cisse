import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black py-7">
      <div className="flex justify-between items-center md:px-44 px-5">
        <Image
          src="/assets/logo-white.svg"
          width={139}
          height={40}
          alt="logo"
        />
        <div>
          <span className="text-white">@ 2019-2023 Personal</span>
          <p className="text-white text-end">Made In Figma</p>
        </div>
      </div>
    </footer>
  );
}
