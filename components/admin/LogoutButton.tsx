"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="rounded-md border border-neutral-700 px-4 py-2 text-sm text-white transition hover:bg-neutral-800"
        >
            Logout
        </button>
    );
}