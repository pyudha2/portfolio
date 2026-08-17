"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { projectSchema, ProjectSchema } from "@/lib/validations/project";

export async function createProject(data: ProjectSchema) {
    const parsed = projectSchema.parse(data);
    const { images, ...rest } = parsed;

    await prisma.project.create({
        data: {
            ...rest,
            images: images
                ? { create: images.map((url, index) => ({ url, order: index })) }
                : undefined,
        },
    });

    revalidatePath("/admin/projects");
}

export async function updateProject(id: string, data: ProjectSchema) {
    const parsed = projectSchema.parse(data);
    const { images, ...rest } = parsed;

    await prisma.project.update({
        where: { id },
        data: {
            ...rest,
            images: {
                deleteMany: {},
                create: images ? images.map((url, index) => ({ url, order: index })) : [],
            },
        },
    });

    revalidatePath("/admin/projects");
}

export async function deleteProject(id: string) {
    await prisma.project.delete({ where: { id } });
    revalidatePath("/admin/projects");
}