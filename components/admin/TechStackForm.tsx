"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { TechStack } from "@prisma/client";
import { techStackSchema, TechStackSchema } from "@/lib/validations/techstack";
import { createTechStack, updateTechStack } from "@/lib/actions/techstack";

type Props = {
    editing: TechStack | null;
    onClose: () => void;
};

export default function TechStackForm({ editing, onClose }: Props) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TechStackSchema>({
        resolver: zodResolver(techStackSchema),
        defaultValues: {
            name: editing?.name ?? "",
            icon: editing?.icon ?? undefined,
            category: editing?.category ?? undefined,
            order: editing?.order ?? 0,
        },
    });

    const onSubmit = async (data: TechStackSchema) => {
        setLoading(true);

        if (editing) {
            await updateTechStack(editing.id, data);
        } else {
            await createTechStack(data);
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
                    placeholder="Nama"
                    {...register("name")}
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-1">
                <input
                    type="text"
                    placeholder="Icon (opsional)"
                    {...register("icon")}
                    className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                />
            </div>

            <div className="space-y-1">
                <input
                    type="text"
                    placeholder="Kategori (opsional)"
                    {...register("category")}
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