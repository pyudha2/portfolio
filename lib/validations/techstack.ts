import { z } from "zod";

export const techStackSchema = z.object({
    name: z.string().min(1, "Nama wajib diisi"),
    icon: z.string().optional(),
    category: z.string().optional(),
    order: z.number().int(),
});

export type TechStackSchema = z.infer<typeof techStackSchema>;