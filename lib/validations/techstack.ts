import { z } from "zod";

export const techStackSchema = z.object({
    name: z.string().min(1, "Name is required"),
    icon: z.string().optional(),
    category: z.string().optional(),
    order: z.number().int(),
});

export type TechStackInput = z.infer<typeof techStackSchema>;