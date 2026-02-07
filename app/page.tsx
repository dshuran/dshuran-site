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
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Дима. Все права защищены.
        </div>
      </footer>
    </>
  );
}
