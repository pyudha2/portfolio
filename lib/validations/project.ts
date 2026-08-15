import { z } from "zod";

export const projectSchema = z.object({
    title: z.string().min(1, "Judul wajib diisi"),
    description: z.string().min(1, "Deskripsi wajib diisi"),
    imageUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    techUsed: z.string().optional(),
    order: z.number().int(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;