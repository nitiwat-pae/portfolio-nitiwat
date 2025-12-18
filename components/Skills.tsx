"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        name: "Automation - RPA",
        skills: ["UiPath", "Power Automate", "Kryon"],
    },
    {
        name: "Programming Languages",
        skills: ["Python", "JavaScript", "SQL", "C#", "VB.Net"],
    },
    {
        name: "Web & Cloud",
        skills: ["NextJS", "Supabase", "Docker", "REST API"],
    },
    {
        name: "Tools & Version Control",
        skills: ["Github", "Gitlab", "Git bash", "Jira"],
    },
    {
        name: "Process Improvement",
        skills: ["Lean Principles", "7 Wastes", "Process Mapping", "Workflow Optimization", "BPR"],
    },
    {
        name: "Generative AI & Ops",
        skills: ["Generative AI in Daily Work", "Operational Excellence"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-secondary/30 relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 hover:border-accent/50 transition-all"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="bg-card rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-primary">{category.name}</h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                        className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
