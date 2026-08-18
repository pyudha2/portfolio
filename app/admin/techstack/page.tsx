import { prisma } from "@/lib/prisma";
import TechStackManager from "@/components/admin/TechStackManager";

export const dynamic = "force-dynamic";

export default async function TechStackPage() {
    const items = await prisma.techStack.findMany({ orderBy: { order: "asc" } });

    return (
        <main className="min-h-screen bg-neutral-950 px-6 py-10">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-6 text-2xl font-semibold text-white">Tech Stack</h1>
                <TechStackManager items={items} />
            </div>
        </main>
    );
}