import { prisma } from "@/lib/prisma";
import ProjectManager from "@/components/admin/ProjectManager";

export default async function ProjectsPage() {
    const items = await prisma.project.findMany({ orderBy: { order: "asc" } });

    return (
        <main className="min-h-screen bg-neutral-950 px-6 py-10">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-6 text-2xl font-semibold text-white">Projects</h1>
                <ProjectManager items={items} />
            </div>
        </main>
    );
}