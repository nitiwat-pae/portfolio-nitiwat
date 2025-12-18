"use client";

import { motion } from "framer-motion";
import { Gamepad2, Plane, Music } from "lucide-react";
import { Coffee } from "lucide-react";

const hobbies = [
    {
        name: "Home Cafe",
        icon: Coffee,
        description: "Making a cup of coffee, tea and matcha.",
    },
    {
        name: "Gaming",
        icon: Gamepad2,
        description: "Immersive storytelling and strategy games.",
    },
    {
        name: "Traveling",
        icon: Plane,
        description: "Exploring new cultures and cuisines.",
    },
    {
        name: "Music",
        icon: Music,
        description: "Playing guitar and discovering new genres.",
    },
];

export default function Hobbies() {
    return (
        <section id="hobbies" className="py-20 bg-secondary/30 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Hobbies & Interests</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-6 rounded-2xl border border-white/5 text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                <hobby.icon size={32} />
                            </div>
                            <h3 className="font-bold mb-2">{hobby.name}</h3>
                            <p className="text-sm text-muted-foreground">{hobby.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
