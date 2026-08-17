"use client";

import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LABELS: Record<string, string> = {
    hero: "Home",
    about: "About",
    techstack: "Stack",
    projects: "Projects",
    contact: "Contact",
};

export default function Navbar() {
    const { active, sections } = useActiveSection();
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    const isTransparent = active === "hero";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${isTransparent ? "bg-transparent" : "bg-ink/80 backdrop-blur-md border-b border-slate/20"
                }`}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <button
                    onClick={() => scrollTo("hero")}
                    className="font-display font-semibold text-offwhite text-lg"
                >
                    Pranata Yudha Pratama
                </button>

                <div className="hidden md:flex items-center gap-8">
                    {sections.map((id) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`font-mono text-sm transition-colors ${active === id ? "text-signal" : "text-slate hover:text-offwhite"
                                }`}
                        >
                            {NAV_LABELS[id]}
                        </button>
                    ))}
                    <a
                        href="/cv_v2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm px-4 py-2 border border-signal text-signal rounded hover:bg-signal hover:text-ink transition-colors"
                    >
                        Resume
                    </a>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-offwhite"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col items-start gap-4 px-6 pb-6 bg-ink/95">
                    {sections.map((id) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`font-mono text-sm ${active === id ? "text-signal" : "text-slate"
                                }`}
                        >
                            {NAV_LABELS[id]}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}