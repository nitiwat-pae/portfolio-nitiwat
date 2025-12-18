"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
    {
        degree: "Bachelor’s degree",
        institution: "Silpakorn University",
        period: "2013 - 2017",
        description: "Faculty of Engineering and Industrial technology at major of Management and Logistic. GPA 2.96",
    },
];

export default function Education() {
    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-2xl mx-auto grid md:grid-cols-1 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-8 rounded-2xl border border-white/5 hover:border-accent/50 transition-all group"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                <GraduationCap className="text-accent" size={24} />
                            </div>
                            <span className="text-accent text-sm font-semibold mb-2 block">{edu.period}</span>
                            <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                            <h4 className="text-muted-foreground text-sm mb-4">{edu.institution}</h4>
                            <p className="text-muted-foreground/80 text-sm leading-relaxed">
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
