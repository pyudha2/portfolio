import { prisma } from "@/lib/prisma";
import AnimatedSection from "../ui/AnimatedSection";

export default async function Projects() {
    const projects = await prisma.project.findMany({
        orderBy: { order: "asc" },
    });

    return (
        <section id="projects">
            <AnimatedSection>
                <h2>Projects</h2>
                <div>
                    {projects.map((project) => (
                        <div key={project.id}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {project.techUsed && <p>{project.techUsed}</p>}
                            <div>
                                {project.liveUrl && <a href={project.liveUrl}>Live Demo</a>}
                                {project.repoUrl && <a href={project.repoUrl}>Repository</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
}