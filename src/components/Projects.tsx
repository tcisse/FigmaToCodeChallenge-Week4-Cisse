import React from "react";
import Image from "next/image";
import { FaRegShareFromSquare } from "react-icons/fa6";
import Link from "next/link";

export function Projects() {
  return (
    <div id="projects" className="bg-black py-20">
      <h1 className="text-white text-center text-display-01 mb-10">
        My <span className="font-extrabold ">Projects</span>
      </h1>
      <div className="md:max-w-6xl max-w-xs mx-auto md:space-y-20 space-y-10">
        <div className="flex md:flex-row flex-col items-center lg:space-x-24">
          <Image
            src="/assets/images/projet-1.svg"
            width={530}
            height={430}
            alt="project_1"
            className="rounded-xl md:mb-0 mb-5"
          />
          <div className="flex flex-col space-y-5">
            <span className="text-white text-heading-01 font-extrabold">
              01
            </span>
            <h1 className="text-white text-heading-02 font-bold">
              E-commerce Landinge page
            </h1>
            <p className="text-p-02 text-zinc-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ea
              officiis porro aliquam quas itaque ullam voluptas fugit, error
              tempora excepturi corrupti laboriosam neque dignissimos vitae ex
              facere laudantium illo?
            </p>
            <Link href="/">
              <Image
                src="/assets/icons/export.svg"
                width={32}
                height={32}
                alt="youtube"
                className="rounded-xl md:mb-0 mb-5"
              />
            </Link>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse items-center lg:space-x-24">
          <div className="flex flex-col space-y-5">
            <span className="text-white text-heading-01 font-extrabold">
              02
            </span>
            <h1 className="text-white text-heading-02 font-bold">
              Youtube Search
            </h1>
            <p className="text-p-02 text-zinc-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ea
              officiis porro aliquam quas itaque ullam voluptas fugit, error
              tempora excepturi corrupti laboriosam neque dignissimos vitae ex
              facere laudantium illo?
            </p>
            <Link
              className=" cursor-pointer ease-out duration-150 transition-all"
              href="https://youtube-search-plum.vercel.app/"
            >
              <Image
                src="/assets/icons/export.svg"
                width={32}
                height={32}
                alt="youtube"
              />
            </Link>
          </div>
          <Image
            src="/assets/images/project-4.png"
            width={530}
            height={430}
            alt="project_1"
            className="md:mb-0 mb-5 rounded-xl"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center lg:space-x-24">
          <Image
            src="/assets/images/projet-3.png"
            width={530}
            height={430}
            alt="project_1"
            className="md:mb-0 mb-5 rounded-xl"
          />
          <div className="flex flex-col space-y-5">
            <span className="text-white text-heading-01 font-extrabold">
              03
            </span>
            <h1 className="text-white text-heading-02 font-bold">
              Doctor Landinge page
            </h1>
            <p className="text-p-02 text-zinc-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ea
              officiis porro aliquam quas itaque ullam voluptas fugit, error
              tempora excepturi corrupti laboriosam neque dignissimos vitae ex
              facere laudantium illo?
            </p>
            <Link href="/">
              <Image
                src="/assets/icons/export.svg"
                width={32}
                height={32}
                alt="youtube"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
