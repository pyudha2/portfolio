"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Project } from "@prisma/client";
import { deleteProject } from "@/lib/actions/project";

type Props = {
    items: Project[];
    onEdit: (item: Project) => void;
};

export default function ProjectTable({ items, onEdit }: Props) {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        setDeletingId(id);
        await deleteProject(id);
        setDeletingId(null);
        router.refresh();
    };

    return (
        <div className="overflow-x-auto rounded-xl border border-neutral-800">
            <table className="w-full text-left text-sm text-white">
                <thead className="bg-neutral-900 text-neutral-400">
                    <tr>
                        <th className="px-4 py-3">Order</th>
                        <th className="px-4 py-3">Judul</th>
                        <th className="px-4 py-3">Tech Used</th>
                        <th className="px-4 py-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="border-t border-neutral-800">
                            <td className="px-4 py-3">{item.order}</td>
                            <td className="px-4 py-3">{item.title}</td>
                            <td className="px-4 py-3">{item.techUsed ?? "-"}</td>
                            <td className="px-4 py-3">
                                <div className="flex gap-3">
                                    <button onClick={() => onEdit(item)} className="text-blue-400 hover:underline">
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        disabled={deletingId === item.id}
                                        className="text-red-400 hover:underline disabled:opacity-50"
                                    >
                                        {deletingId === item.id ? "Menghapus..." : "Hapus"}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {items.length === 0 && (
                        <tr>
                            <td colSpan={4} className="px-4 py-6 text-center text-neutral-500">
                                Belum ada data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}