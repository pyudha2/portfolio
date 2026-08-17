"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["hero", "about", "techstack", "projects", "contact"] as const;
export type SectionId = (typeof SECTIONS)[number];

export function useActiveSection() {
    const [active, setActive] = useState<SectionId>("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id as SectionId);
                    }
                });
            },
            { threshold: 0.6 }
        );

        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return { active, sections: SECTIONS };
}