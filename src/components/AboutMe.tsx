import React from "react";
import Image from "next/image";

export function AboutMe() {
  return (
    <div id="about-me" className="bg-white py-10">
      <div className="flex md:flex-row flex-col md:space-x-10 md:max-w-6xl md:px-0 px-5 mx-auto">
        <Image
          src="/assets/images/about-me.svg"
          width={524}
          height={572}
          alt="about-me"
        />
        <div>
          <h1 className="text-display-01 text-center mb-10">
            About <span className="font-extrabold">Me</span>
          </h1>
          <p className="text-zinc-500 mb-3">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="text-zinc-500 mb-3">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="text-zinc-500">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}
