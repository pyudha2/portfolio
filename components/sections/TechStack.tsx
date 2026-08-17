"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { TechStack as TechStackType } from "@prisma/client";

type Props = {
    techStacks: TechStackType[];
};

const CATEGORY_ORDER = ["Web Developer", "Android Developer", "Networking"];

export default function TechStack({ techStacks = [] }: Props) {
    const grouped = techStacks.reduce<Record<string, TechStackType[]>>((acc, tech) => {
        const category = tech.category ?? "Other";
        if (!acc[category]) acc[category] = [];
        acc[category].push(tech);
        return acc;
    }, {});

    const categories = CATEGORY_ORDER.filter((cat) => grouped[cat]?.length);
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % categories.length);
    };

    const prev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + categories.length) % categories.length);
    };

    useEffect(() => {
        if (categories.length <= 1) return;
        const interval = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % categories.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [categories.length]);

    if (categories.length === 0) return null;

    const activeCategory = categories[index];
    const activeTechs = grouped[activeCategory].sort((a, b) => a.order - b.order);

    return (
        <section
            id="techstack"
            className="snap-section relative flex items-center justify-center px-6 pt-24"
        >
            <div className="max-w-4xl w-full">
                <p className="font-mono text-sm text-signal mb-3 text-center">
                    {"// tech stack"}
                </p>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-offwhite mb-10 text-center">
                    Tools I work with
                </h2>

                <div className="flex items-center justify-center gap-6">
                    <button
                        onClick={prev}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate/30 text-slate hover:border-signal hover:text-signal transition-colors shrink-0"
                        aria-label="Previous category"
                    >
                        ←
                    </button>

                    <div className="flex-1 overflow-hidden">
                        <p className="font-mono text-xs text-slate uppercase tracking-wider text-center mb-6">
                            {activeCategory}
                        </p>

                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeCategory}
                                custom={direction}
                                initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-wrap justify-center gap-3"
                            >
                                {activeTechs.map((tech) => (
                                    <div
                                        key={tech.id}
                                        className="group flex flex-col items-center justify-center w-16 h-16 border border-slate/20 rounded-lg bg-steel/10 hover:border-signal hover:scale-105 transition-all"
                                    >
                                        <img
                                            src={`https://cdn.simpleicons.org/${tech.icon}`}
                                            alt={tech.name}
                                            className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                        <span className="font-mono text-[9px] text-slate mt-1.5 group-hover:text-offwhite transition-colors text-center px-1">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={next}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate/30 text-slate hover:border-signal hover:text-signal transition-colors shrink-0"
                        aria-label="Next category"
                    >
                        →
                    </button>
                </div>

                <div className="flex items-center justify-center gap-2 mt-8">
                    {categories.map((cat, i) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setDirection(i > index ? 1 : -1);
                                setIndex(i);
                            }}
                            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-signal" : "w-1.5 bg-slate/30"
                                }`}
                            aria-label={`Go to ${cat}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}