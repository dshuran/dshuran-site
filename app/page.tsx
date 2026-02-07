import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WorkExperience } from "@/components/WorkExperience";
import { PetProjects } from "@/components/PetProjects";
import { Contact } from "@/components/Contact";
import { getProjectsByType } from "@/lib/projects";

export default function Home() {
  const petProjects = getProjectsByType("pet");

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <PetProjects projects={petProjects} />
        <Contact />
      </main>
    </>
  );
}
