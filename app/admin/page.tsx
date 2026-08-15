import Link from "next/link";
import { prisma } from "@/lib/prisma";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminDashboard() {
    const [techStackCount, projectCount] = await Promise.all([
        prisma.techStack.count(),
        prisma.project.count(),
    ]);

    return (
        <main className="min-h-screen bg-neutral-950 px-6 py-10">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-white">Admin Dashboard</h1>
                    <LogoutButton />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Link
                        href="/admin/techstack"
                        className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-600"
                    >
                        <p className="text-sm text-neutral-400">Tech Stack</p>
                        <p className="mt-2 text-3xl font-bold text-white">{techStackCount}</p>
                        <p className="mt-1 text-sm text-neutral-500">Kelola tech stack →</p>
                    </Link>

                    <Link
                        href="/admin/projects"
                        className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-600"
                    >
                        <p className="text-sm text-neutral-400">Projects</p>
                        <p className="mt-2 text-3xl font-bold text-white">{projectCount}</p>
                        <p className="mt-1 text-sm text-neutral-500">Kelola project →</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}