"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SPECS = [
    { label: "education", value: "Telecommunication Engineering" },
    { label: "focus", value: "Fullstack, Mobile, Network" },
    { label: "based_in", value: "Indonesia" },
    { label: "status", value: "Available for work" },
];

export default function About() {
    return (
        <section
            id="about"
            className="snap-section flex items-center justify-center px-6 pt-18"
        >
            <div className="max-w-5xl w-full grid md:grid-cols-2 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="border border-slate/30 rounded-lg p-6 bg-steel/10 max-w-xs mx-auto w-full"
                >
                    <div className="relative w-full aspect-square rounded-md bg-steel/30 mb-4 flex items-center justify-center">
                        <Image
                            src="/photo.webp"
                            alt="Pranata Yudha Pratama"
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            priority
                            className="object-cover"
                            style={{ objectPosition: "50% 20%" }}
                        />
                    </div>
                    <p className="font-mono text-xs text-signal">● online</p>
                    <p className="font-display font-semibold text-offwhite mt-1">Pranata Yudha Pratama</p>
                    <p className="font-mono text-xs text-slate mt-1">Rembang, Indonesia</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <p className="font-mono text-sm text-signal mb-3">{"// about"}</p>
                    <h2 className="font-display font-bold text-3xl md:text-2xl text-offwhite mb-4">
                        Building across the full stack — from screen to network.
                    </h2>
                    <p className="font-body text-slate leading-relaxed mb-4 text-justify">
                        Ketertarikan saya di teknologi bermula dari rasa penasaran gimana
                        caranya sebuah sistem bisa &quot;ngobrol&quot; satu sama lain dari situ
                        saya belajar web development, lanjut ke Android, sampai akhirnya
                        jatuh cinta sama network engineering. Sekarang saya aktif membangun
                        proyek fullstack dengan Next.js & TypeScript, mengembangkan aplikasi
                        Android, sekaligus merancang topologi jaringan menggunakan
                        Cisco Packet Tracer dan Atoll. Kombinasi ketiganya bikin saya nyaman
                        kerja di mana pun stack-nya berada — di layar, di device, atau di
                        infrastruktur.
                    </p>

                    <div className="space-y-2">
                        {SPECS.map((spec) => (
                            <div key={spec.label} className="flex gap-3 font-mono text-sm">
                                <span className="text-slate">{spec.label}:</span>
                                <span className="text-offwhite">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}