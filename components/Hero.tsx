import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl text-accent font-medium mb-2">
                            Hello, I&apos;m
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            A Creative <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                Solution Consultant
                            </span>
                        </h1>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                        I have a professional background in end-to-end automation software development (RPA) and I am passionate about creating innovative solutions to improve business processes.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#work"
                            className="px-8 py-3 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-all"
                        >
                            View Work
                        </a>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 animate-pulse" />
                        <div className="absolute inset-4 rounded-full bg-background border border-white/10 flex items-center justify-center overflow-hidden">
                            <Image
                                src="/assets/my-photo.jpg"
                                alt="Profile Photo"
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>
                        {/* Decoration Rings */}
                        <div className="absolute -inset-8 border border-white/5 rounded-full z-[-1]" />
                        <div className="absolute -inset-16 border border-white/5 rounded-full z-[-2]" />
                    </div>
                </div>
            </div>

            <a
                href="#work"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
            >
                <ArrowDown size={24} />
            </a>
        </section>
    );
}
