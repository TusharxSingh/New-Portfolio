import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { ProjectsTeaser } from "@/components/ProjectsTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <ProjectsTeaser />
      <Contact />
    </>
  );
}
