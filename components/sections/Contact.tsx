"use client";

import { motion } from "framer-motion";

const SOCIALS = [
    { label: "GitHub", href: "https://github.com/pyudha2" },
    { label: "LinkedIn", href: "https://linkedin.com/in/pranatayudhapratama" },
    { label: "Email", href: "mailto:pranatayudhapratama20@gmail.com" },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="snap-section relative flex flex-col items-center justify-center px-6"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-xl"
            >
                <p className="font-mono text-sm text-signal mb-3 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-signal shadow-[0_0_8px_2px_rgba(61,220,151,0.6)]" />
                    available for work
                </p>
                <h2 className="font-display font-bold text-3xl md:text-5xl text-offwhite mb-6">
                    Let&apos;s build something together.
                </h2>
                <p className="font-body text-slate mb-10">
                    Open buat kerja sama, proyek freelance, atau sekadar diskusi teknis.
                    Kirim pesan lewat email atau langsung mampir ke sosial media di bawah.
                </p>

                <a
                    href="pranatayudhapratama20@gmail.com"
                    className="inline-block font-mono text-sm px-6 py-3 border border-signal text-signal rounded hover:bg-signal hover:text-ink transition-colors"
                >
                    Say Hello
                </a>
            </motion.div>

            <div className="absolute bottom-8 flex flex-col items-center gap-3">
                <div className="flex gap-6">
                    {SOCIALS.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-slate hover:text-offwhite transition-colors"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>
                <p className="font-mono text-[10px] text-slate/60">
                    © {new Date().getFullYear()} Pranata Yudha Pratama. All rights reserved.
                </p>
            </div >
        </section >
    );
}