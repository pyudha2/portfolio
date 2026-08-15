"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { projectSchema, ProjectSchema } from "@/lib/validations/project";

export async function createProject(data: ProjectSchema) {
    const parsed = projectSchema.parse(data);
    await prisma.project.create({ data: parsed });
    revalidatePath("/admin/projects");
}

export async function updateProject(id: string, data: ProjectSchema) {
    const parsed = projectSchema.parse(data);
    await prisma.project.update({ where: { id }, data: parsed });
    revalidatePath("/admin/projects");
}

export async function deleteProject(id: string) {
    await prisma.project.delete({ where: { id } });
    revalidatePath("/admin/projects");
}