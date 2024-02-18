import { AboutMe, Contact, Experience, HeroSection, Projects, Skills, Testimonial } from "@/components";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
}
