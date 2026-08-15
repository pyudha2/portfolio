"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Project } from "@prisma/client";
import { projectSchema, ProjectSchema } from "@/lib/validations/project";
import { createProject, updateProject } from "@/lib/actions/project";

type Props = {
    editing: Project | null;
    onClose: () => void;
};

export default function ProjectForm({ editing, onClose }: Props) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProjectSchema>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: editing?.title ?? "",
            description: editing?.description ?? "",
            imageUrl: editing?.imageUrl ?? undefined,
            liveUrl: editing?.liveUrl ?? undefined,
            repoUrl: editing?.repoUrl ?? undefined,
            techUsed: editing?.techUsed ?? undefined,
            order: editing?.order ?? 0,
        },
    });

    const onSubmit = async (data: ProjectSchema) => {
        setLoading(true);

        if (editing) {
            await updateProject(editing.id, data);
        } else {
            await createProject(data);
        }

        setLoading(false);
        router.refresh();
        onClose();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 rounded-xl border border-neutral-800 bg-neutral-900 p-6"
        >
            <div className="space-y-1">
                <input
                    type="text"
                    placeholder="Judul"
                    {...register("title")}
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                />
                {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
            </div>

            <div className="space-y-1">
                <textarea
                    placeholder="Deskripsi"
                    rows={4}
                    {...register("description")}
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                />
                {errors.description && (
                    <p className="text-sm text-red-500">{errors.description.message}</p>
                )}
            </div>

            <div className="space-y-1">
                <input
                    type="text"
                    placeholder="Image URL (opsional)"
                    {...register("imageUrl")}
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                />
            </div>

            <div className="space-y-1">
                <input
                    type="text"
                    placeholder="Live URL (opsional)"
                    {...register("liveUrl")}
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                />
            </div>

            <div className="space-y-1">
                <input
                    type="text"
                    placeholder="Repo URL (opsional)"
                    {...register("repoUrl")}
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                />
            </div>

            <div className="space-y-1">
                <input
                    type="text"
                    placeholder="Tech Used, pisah koma (opsional)"
                    {...register("techUsed")}
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                />
            </div>

            <div className="space-y-1">
                <input
                    type="number"
                    placeholder="Order"
                    {...register("order", { valueAsNumber: true })}
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                />
                {errors.order && <p className="text-sm text-red-500">{errors.order.message}</p>}
            </div>

            <div className="flex gap-2">
                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 disabled:opacity-50"
                >
                    {loading ? "Menyimpan..." : "Simpan"}
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="rounded-md border border-neutral-700 px-4 py-2 text-sm text-white hover:bg-neutral-800"
                >
                    Batal
                </button>
            </div>
        </form>
    );
}