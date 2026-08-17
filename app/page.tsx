import { prisma } from "@/lib/prisma";
import Navbar from "@/components/layout/Navbar";
import DotNav from "@/components/layout/DotNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default async function Home() {
  const [techStacks, projects] = await Promise.all([
    prisma.techStack.findMany({
      orderBy: { order: "asc" },
    }),
    prisma.project.findMany({
      orderBy: { order: "asc" },
      include: { images: true },
    }),
  ]);

  return (
    <>
      <Navbar />
      <DotNav />
      <main>
        <Hero />
        <About />
        <TechStack techStacks={techStacks} />
        <Projects projects={projects} />
        <Contact />
      </main>
    </>
  );
}