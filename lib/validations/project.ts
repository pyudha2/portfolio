import { z } from "zod";

export const projectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    imageUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    techUsed: z.string().optional(),
    order: z.number().int(),
});

export type ProjectInput = z.infer<typeof projectSchema>;