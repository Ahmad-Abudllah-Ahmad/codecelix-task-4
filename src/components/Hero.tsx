"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import BlurText from "./BlurText";
import ScrollReveal from "./ScrollReveal";
import Parallax from "./Parallax";

export default function Hero() {
    return (
        <section className="relative pt-0 pb-32 overflow-hidden block">
            {/* Background Parallax Elements */}
            <Parallax offset={100} className="absolute top-0 right-[10%] -z-10">
                <div className="w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
            </Parallax>
            <Parallax offset={-80} className="absolute bottom-20 left-[5%] -z-10">
                <div className="w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
            </Parallax>

            {/* Dynamic Shapes with hover parallax */}
            <Parallax offset={30} className="absolute top-[15%] left-[15%] -z-10">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 border border-primary/20 rounded-lg"
                />
            </Parallax>
            <Parallax offset={-40} className="absolute bottom-[20%] right-[20%] -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 bg-primary/10 rounded-full"
                />
            </Parallax>

            <div className="container mx-auto px-6" style={{ marginTop: '-500px' }}>
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <ScrollReveal direction="down" delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Award-winning Digital Agency
                        </div>
                    </ScrollReveal>

                    <div className="space-y-6">
                        <Parallax offset={20}>
                            <BlurText
                                text="Design. Build. Transform."
                                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] justify-center"
                            />
                        </Parallax>
                    </div>

                    <ScrollReveal delay={0.5}>
                        <Parallax offset={10}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                                We help global brands and startups create high-performance digital experiences that grow businesses and delight users.
                            </p>
                        </Parallax>
                    </ScrollReveal>

                    <ScrollReveal delay={0.7}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="group px-8 py-4 bg-foreground text-background rounded-full font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95">
                                Start a project
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex items-center gap-3 font-semibold group hover:text-primary transition-colors">
                                <div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-colors">
                                    <Play size={16} fill="currentColor" />
                                </div>
                                Watch Showreel
                            </button>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Stats Section with Pop-up */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
                    {[
                        { label: "Founded", value: "2010" },
                        { label: "Projects Completed", value: "500+" },
                        { label: "Experts", value: "50+" },
                        { label: "Awards Won", value: "24" },
                    ].map((stat, i) => (
                        <ScrollReveal key={i} delay={0.8 + i * 0.1} distance={20}>
                            <Parallax offset={10 + i * 5}>
                                <div className="text-center md:text-left group">
                                    <p className="text-sm font-medium text-muted mb-1 group-hover:text-primary transition-colors">{stat.label}</p>
                                    <p className="text-3xl font-bold">{stat.value}</p>
                                </div>
                            </Parallax>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
