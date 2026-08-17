"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Project, ProjectImage } from "@prisma/client";

type ProjectWithImages = Project & {
    images?: ProjectImage[];
};

type Props = {
    project: ProjectWithImages;
    onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    const techList = Array.isArray(project.techUsed)
        ? (project.techUsed as string[])
        : [];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-100 flex items-center justify-center bg-ink/80 backdrop-blur-sm px-4"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-ink border border-slate/30 rounded-lg"
            >
                <button
                    onClick={onClose}
                    className="sticky top-4 float-right mr-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-steel/40 text-offwhite hover:bg-signal hover:text-ink transition-colors"
                    aria-label="Close"
                >
                    ✕
                </button>

                <div className="p-6 clear-both">
                    {project.type === "FULL" ? (
                        <>
                            {project.imageUrl && (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full aspect-video object-cover rounded-md mb-6"
                                />
                            )}
                            <h3 className="font-display font-bold text-2xl text-offwhite mb-3">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {techList.map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-[10px] text-slate border border-slate/30 rounded px-2 py-1"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="font-body text-slate leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <div className="flex gap-3">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono text-sm px-4 py-2 border border-signal text-signal rounded hover:bg-signal hover:text-ink transition-colors"
                                    >
                                        Live
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono text-sm px-4 py-2 border border-slate/40 text-slate rounded hover:border-offwhite hover:text-offwhite transition-colors"
                                    >
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="font-display font-bold text-2xl text-offwhite mb-3">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {techList.map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-[10px] text-slate border border-slate/30 rounded px-2 py-1"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="font-body text-slate leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <hr className="border-slate/20 mb-6" />
                            <p className="font-mono text-sm text-signal mb-4">Gambar</p>
                            <div className="grid grid-cols-2 gap-4">
                                {project.images
                                    ?.sort((a, b) => a.order - b.order)
                                    .map((img) => (
                                        <img
                                            key={img.id}
                                            src={img.url}
                                            alt={project.title}
                                            className="w-full h-auto rounded-md"
                                        />
                                    ))}
                            </div>
                        </>
                    )}
                </div>
            </motion.div >
        </motion.div >
    );
}