"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/lib/validations/login";

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginSchema) => {
        setLoading(true);
        setError(null);

        const res = await signIn("credentials", {
            name: data.name,
            password: data.password,
            redirect: false,
        });

        setLoading(false);

        if (res?.error) {
            setError("Name atau password salah");
            return;
        }

        router.push("/admin");
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-sm space-y-4 rounded-xl bg-neutral-900 p-8"
            >
                <h1 className="text-xl font-semibold text-white">Admin Login</h1>

                <div className="space-y-1">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name")}
                        className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                    />
                    {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                </div>

                <div className="space-y-1">
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                        className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-white outline-none focus:border-neutral-500"
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message}</p>
                    )}
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-md bg-white py-2 font-medium text-black transition hover:bg-neutral-200 disabled:opacity-50"
                >
                    {loading ? "Masuk..." : "Masuk"}
                </button>
            </form>
        </main>
    );
}