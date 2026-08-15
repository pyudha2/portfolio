import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { techStackSchema } from "@/lib/validations/techstack";

export async function GET() {
    const data = await prisma.techStack.findMany({
        orderBy: { order: "asc" },
    });

    return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const parsed = techStackSchema.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const created = await prisma.techStack.create({
        data: parsed.data,
    });

    return NextResponse.json(created, { status: 201 });
}