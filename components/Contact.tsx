"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8 bg-card p-12 rounded-3xl border border-white/5 shadow-2xl text-center"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Let&apos;s talk about everything!</h3>
                            <p className="text-muted-foreground">
                                Feel free to reach out to me via email or LinkedIn. 👋
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
                            <a
                                href="mailto:ch.nitiwat@gmail.com"
                                className="flex flex-col items-center space-y-3 group"
                            >
                                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail size={24} className="text-primary" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Email</span>
                                <span className="text-sm font-semibold">ch.nitiwat@gmail.com</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/nitiwat-chunprapanusorn-688045195/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center space-y-3 group"
                            >
                                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Send size={24} className="text-primary" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Social media</span>
                                <span className="text-sm font-semibold">LinkedIn</span>
                            </a>

                            <a
                                href="https://www.google.com/maps/place/Bangkok/@13.7245447,100.4679575,11z/data=!3m1!4b1!4m6!3m5!1s0x311d6032280d61f3:0x10100b25de24820!8m2!3d13.7563309!4d100.5017651!16zL20vMGZuMmc?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center space-y-3 group"
                            >
                                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors cursor-default">
                                    <MapPin size={24} className="text-primary" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Location</span>
                                <span className="text-sm font-semibold">Bangkok, Thailand</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
