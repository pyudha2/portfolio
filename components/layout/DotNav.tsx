"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

const DOT_LABELS: Record<string, string> = {
    hero: "Home",
    about: "About",
    techstack: "Stack",
    projects: "Projects",
    contact: "Contact",
};

export default function DotNav() {
    const { active, sections } = useActiveSection();

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center">
            {sections.map((id, index) => (
                <div key={id} className="flex flex-col items-center">
                    <button
                        onClick={() => scrollTo(id)}
                        className="group relative flex items-center justify-center w-4 h-4"
                        aria-label={`Go to ${DOT_LABELS[id]}`}
                    >
                        <span
                            className={`rounded-full transition-all duration-300 ${active === id
                                ? "w-3 h-3 bg-signal shadow-[0_0_8px_2px_rgba(61,220,151,0.6)]"
                                : "w-2 h-2 bg-slate/50 group-hover:bg-slate"
                                }`}
                        />
                        <span className="absolute right-6 whitespace-nowrap font-mono text-xs text-slate opacity-0 group-hover:opacity-100 transition-opacity">
                            {DOT_LABELS[id]}
                        </span>
                    </button>

                    {index < sections.length - 1 && (
                        <div className="w-px h-10 bg-slate/20 relative overflow-hidden">
                            <div
                                className={`w-full bg-signal transition-all duration-500 ${sections.indexOf(active) > index ? "h-full" : "h-0"
                                    }`}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}