"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
    {
        name: "Diploma of Uipath RPA Business Analyst",
        issuer: "Uipath",
        date: "2021",
        link: "https://drive.google.com/file/d/106wGFYAyUe6SGEqjVLwGss-R97hNwZO5/view?usp=sharing",
    },
    {
        name: "Diploma of Uipath RPA Advanced Developer",
        issuer: "Uipath",
        date: "2022",
        link: "https://drive.google.com/file/d/1FVkTcH3Idq1eEtSzSmHbX9TF8g_lJ8Tn/view?usp=sharing",
    }
];

export default function Certificates() {
    return (
        <section id="certificates" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-6 rounded-2xl border border-white/5 hover:border-accent/40 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white">
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Award size={24} />
                            </div>

                            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{cert.name}</h3>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            <span className="text-xs text-muted-foreground/60 mt-2 block">{cert.date}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
