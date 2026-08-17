"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@prisma/client";
import ProjectModal from "@/components/ui/ProjectModal";

type Props = {
    projects: Project[];
};

export default function Projects({ projects = [] }: Props) {
    const sorted = [...projects].sort((a, b) => a.order - b.order);

    const pages: Project[][] = [];
    for (let i = 0; i < sorted.length; i += 2) {
        pages.push(sorted.slice(i, i + 2));
    }

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [selected, setSelected] = useState<Project | null>(null);

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % pages.length);
    };

    const prev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + pages.length) % pages.length);
    };

    useEffect(() => {
        if (pages.length <= 1) return;
        const interval = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % pages.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [pages.length]);

    if (pages.length === 0) return null;

    const activePage = pages[index];

    return (
        <section
            id="projects"
            className="snap-section relative flex items-center justify-center px-6 pt-24"
        >
            <div className="max-w-4xl w-full">
                <p className="font-mono text-sm text-signal mb-3 text-center">
                    {"// projects"}
                </p>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-offwhite mb-6 text-center">
                    Things I&apos;ve built
                </h2>

                <div className="flex items-center gap-4">
                    <button
                        onClick={prev}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate/30 text-slate hover:border-signal hover:text-signal transition-colors shrink-0"
                        aria-label="Previous"
                    >
                        ←
                    </button>

                    <div className="flex-1 overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {activePage.map((project) => (
                                    <button
                                        key={project.id}
                                        onClick={() => setSelected(project)}
                                        className="group text-left border border-slate/20 rounded-lg overflow-hidden bg-steel/10 hover:border-signal transition-colors"
                                    >
                                        <div className="aspect-16/10 max-h-48 bg-steel/30 overflow-hidden mx-auto">
                                            {project.imageUrl && (
                                                <img
                                                    src={project.imageUrl}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            )}
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center justify-between mb-2 gap-3">
                                                <h3 className="font-display font-semibold text-offwhite text-sm">
                                                    {project.title}
                                                </h3>
                                                <span className="font-mono text-[10px] text-signal border border-signal/40 rounded px-2 py-0.5 shrink-0">
                                                    {project.type}
                                                </span>
                                            </div>
                                            <p className="font-body text-sm text-slate line-clamp-2">
                                                {project.description}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={next}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate/30 text-slate hover:border-signal hover:text-signal transition-colors shrink-0"
                        aria-label="Next"
                    >
                        →
                    </button>
                </div>

                <div className="flex items-center justify-center gap-2 mt-8">
                    {pages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > index ? 1 : -1);
                                setIndex(i);
                            }}
                            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-signal" : "w-1.5 bg-slate/30"
                                }`}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <ProjectModal project={selected} onClose={() => setSelected(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}