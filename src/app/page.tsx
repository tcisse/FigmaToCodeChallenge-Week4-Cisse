import { AboutMe, Experience, HeroSection, Projects, Skills } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
    </div>
  );
}
