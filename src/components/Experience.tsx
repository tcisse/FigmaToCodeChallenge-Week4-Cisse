import React from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

export function Experience() {
  return (
    <div className="bg-black py-20">
      <h1 className="text-white text-center text-display-01 mb-20">
        My <span className="font-extrabold ">Experience</span>
      </h1>
      <div className="flex flex-col space-y-6 lg:px-0 md:px-5 px-5">
        <div className="border border-neutral w-full rounded-md p-5 max-w-6xl mx-auto hover:bg-zinc-800">
          <div className="flex md:flex-row flex-col justify-between mb-5">
            <div className="flex items-center space-x-2 md:mb-0 mb-3">
              <FcGoogle className="w-8 h-8" />
              <h2 className=" text-heading-04 font-semibold text-white">
                Lead Software Engineer at Google
              </h2>
            </div>
            <h3 className="text-sub-heading-02 text-zinc-300">
              Nov 2019 - Present
            </h3>
          </div>
          <p className="text-zinc-300 text-p-02">
            As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.
          </p>
        </div>
        <div className="border border-neutral w-full rounded-md p-5 max-w-6xl mx-auto hover:bg-zinc-800">
          <div className="flex md:flex-row flex-col justify-between mb-5">
            <div className="flex items-center space-x-2 md:mb-0 mb-3">
              <Image
                src="/assets/icons/youtube.svg"
                width={32}
                height={32}
                alt="youtube"
              />
              <h2 className=" text-heading-04 font-semibold text-white">
                Software Engineer at Youtube
              </h2>
            </div>
            <h3 className=" text-sub-heading-02 text-zinc-300">
              Nov 2019 - Present
            </h3>
          </div>
          <p className="text-zinc-300 text-p-02">
            At Youtube, I served as a Software Engineer, focusing on the design
            and implementation of backend systems for the social media giant's
            dynamic platform. Working on projects that involved large-scale data
            processing and user engagement features, I leveraged my expertise to
            ensure seamless functionality and scalability.
          </p>
        </div>
        <div className="border border-neutral w-full rounded-md p-5 max-w-6xl mx-auto hover:bg-zinc-800">
          <div className="flex md:flex-row flex-col justify-between mb-5">
            <div className="flex items-center space-x-2 md:mb-0 mb-3">
              <Image
                src="/assets/icons/apple.svg"
                width={32}
                height={32}
                alt="youtube"
              />
              <h2 className=" text-heading-04 font-semibold text-white">
                Junior Software Engineer at Apple
              </h2>
            </div>
            <h3 className=" text-sub-heading-02 text-zinc-300">
              Jan 2016 - Dec 2017
            </h3>
          </div>
          <p className="text-zinc-300 text-p-02">
            During my tenure at Apple, I held the role of Software Architect,
            where I played a key role in shaping the architecture of
            mission-critical software projects. Responsible for designing
            scalable and efficient systems, I provided technical leadership to a
            cross-functional team.
          </p>
        </div>
      </div>
    </div>
  );
}
