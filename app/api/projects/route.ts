import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { projectSchema } from "@/lib/validations/project";

export async function GET() {
    const data = await prisma.project.findMany({
        orderBy: { order: "asc" },
        include: { images: { orderBy: { order: "asc" } } },
    });

    return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const parsed = projectSchema.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const { images, ...projectData } = parsed.data;

    const created = await prisma.project.create({
        data: {
            ...projectData,
            images: images
                ? {
                    create: images.map((url, index) => ({ url, order: index })),
                }
                : undefined,
        },
        include: { images: true },
    });

    revalidatePath("/");

    return NextResponse.json(created, { status: 201 });
}