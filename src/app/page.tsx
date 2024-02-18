import { AboutMe, Experience, HeroSection, Skills } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Skills />
      <Experience />
      <AboutMe />
    </div>
  );
}
