"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Process Improvement Manager",
        company: "Dhipaya Life Assurance (Insurance Industry)",
        period: "Nov 2023 – Present",
        description: [
            "Delivered RPA 27 processes using Power Automate in 2024 - 2025.",
            "Managed small working team with agile and scrum methodology to achieve on-time product delivery using Jira.",
            "Managed 3 window servers for scheduled robot execution.",
            "Managed 1 SQL database server to store robot data.",
            "Setup software development procedures starting to make team works together with highest performance and security using Gitlab and Power Platform CLI.",
            "Setup Center of Excellence session to share knowledge to team.",
            "Applied Generative AI in daily life such as ChatGPT, Gemini, Claude and others.",
        ],
    },
    {
        role: "RPA Developer (Contract)",
        company: "FWD Insurance (Insurance Industry)",
        period: "May 2023 – Oct 2023",
        description: [
            "Applied RPA Uipath to automate processes in the insurance domain, focusing on efficiency and accuracy.",
            "Integrated APIs and SQL to enhance automation workflows and ensure seamless operation.",
            "Applied agile and scrum methodology to daily work.",
        ],
    },
    {
        role: "Senior RPA Developer (Contract)",
        company: "Teohong Silom (Telecom Industry)",
        period: "Dec 2022 – Apr 2023",
        description: [
            "Designed RPA solutions for telecom clients, including nationwide internet performance tracking and IP management systems.",
            "Utilized RPA Kryon, Python and SQL to optimize workflow automation and integrate with customer-provided APIs.",
        ],
    },
    {
        role: "RPA Developer (Contract)",
        company: "Dhipaya Insurance (Insurance Industry)",
        period: "Jun 2022 – Nov 2022",
        description: [
            "Developed and deployed automation workflows, managing the full RPA lifecycle from requirement gathering to production.",
            "Leveraged Python, SQL, VB.Net and C# to create efficient and scalable automation solutions.",
        ],
    },
    {
        role: "RPA Business Analyst",
        company: "UTAC Thai Limited (Semiconductor Industry)",
        period: "Jul 2021 – May 2022",
        description: [
            "Collaborated with cross-functional teams to gather requirements and design TO-BE workflows for automation.",
            "Acted as an RPA Developer to implement monthly automation targets and support ongoing process enhancements.",
        ],
    },
    {
        role: "Logistic Analyst Executive",
        company: "Thai Roong Ruang (Sugar Industry)",
        period: "Jan 2021 – Jun 2021",
        description: [
            "Improved warehouse layouts and logistics processes, reducing costs and maximizing storage efficiency.",
            "Automated routine reporting tasks using RPA UiPath and created custom dashboards with Google Data Studio.",
        ],
    },
    {
        role: "Operation Support Executive",
        company: "DHL Supply Chain (Logistic Industry)",
        period: "Jan 2020 – Dec 2020",
        description: [
            "Improved warehouse processes like handling, storing, picking, packing spare parts to customer.",
            "Automated stock daily report using RPA Uipath and VBA script.",
            "Coordinated to IT team to develop Warehouse Management System that including any features like receiving, tracking and customer issue cares.",
        ],
    },
    {
        role: "Material Handling Engineer",
        company: "Mitsubishi Motors Thailand (Automotive Industry)",
        period: "Sep 2018 – Dec 2019",
        description: [
            "Improved handling components from supplier to warehouse and production lines.",
            "Re-allocated warehouse layout to enhance picking process faster.",
            "Solved a critical problem in limited time to prevent downtime KPI.",
        ],
    },
    {
        role: "Material Handling Engineer",
        company: "Triumph Motorcycles Thailand (Automotive Industry)",
        period: "Dec 2017 – Aug 2018",
        description: [
            "Improved racks layout by using AutoCAD application to enhance picking components to production lines faster.",
            "Coordinated to supplier for maintaining forklifts, racks and sliding shelfs.",
        ],
    },
];

export default function WorkHistory() {
    return (
        <section id="work" className="py-20 bg-secondary/30 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work History</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                            {/* Timeline Dot (Desktop) */}
                            <div className="hidden md:flex absolute left-[50%] top-8 w-8 h-8 bg-card border border-primary rounded-full -translate-x-1/2 items-center justify-center z-10">
                                <Briefcase size={14} className="text-primary" />
                            </div>

                            <div className={`md:flex items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                <div className="md:w-[45%] mb-4 md:mb-0" />
                                <div className="md:w-[45%] bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors shadow-lg">
                                    <span className="text-primary text-sm font-semibold mb-2 block">{exp.period}</span>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                                    <h4 className="text-muted-foreground text-sm mb-4">{exp.company}</h4>
                                    <ul className="text-muted-foreground/80 text-sm leading-relaxed list-disc list-inside space-y-1">
                                        {Array.isArray(exp.description) ? (
                                            exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))
                                        ) : (
                                            <p>{exp.description}</p>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
