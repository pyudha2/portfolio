"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { techStackSchema, TechStackSchema } from "@/lib/validations/techstack";

export async function createTechStack(data: TechStackSchema) {
    const parsed = techStackSchema.parse(data);
    await prisma.techStack.create({ data: parsed });
    revalidatePath("/admin/techstack");
    revalidatePath("/");
}

export async function updateTechStack(id: string, data: TechStackSchema) {
    const parsed = techStackSchema.parse(data);
    await prisma.techStack.update({ where: { id }, data: parsed });
    revalidatePath("/admin/techstack");
    revalidatePath("/");
}

export async function deleteTechStack(id: string) {
    await prisma.techStack.delete({ where: { id } });
    revalidatePath("/admin/techstack");
    revalidatePath("/");
}