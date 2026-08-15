import { z } from "zod";

export const loginSchema = z.object({
    name: z.string().min(1, "Name wajib diisi"),
    password: z.string().min(1, "Password wajib diisi"),
});

export type LoginSchema = z.infer<typeof loginSchema>;