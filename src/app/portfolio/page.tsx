"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BlurText from "@/components/BlurText";

const projects = [
    {
        title: "EcoSmart Dashboard",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&q=80",
        description: "A real-time energy monitoring dashboard for smart homes.",
    },
    {
        title: "Aura Mobile App",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
        description: "A wellness and meditation app with personalized AI recommendations.",
    },
    {
        title: "Zenith Brand Identity",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
        description: "Complete visual identity and design system for a fintech startup.",
    },
    {
        title: "HyperLoop Logistic",
        category: "AI & Automation",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
        description: "AI-driven supply chain optimization platform.",
    },
    {
        title: "Nexus NFT Marketplace",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4628c6827?auto=format&fit=crop&q=80",
        description: "A premium NFT marketplace for digital artists.",
    },
    {
        title: "Pulse Fitness Wearable",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80",
        description: "Interface design for a next-gen fitness tracking wearable.",
    },
];

export default function PortfolioPage() {
    return (
        <main className="pt-32 pb-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="space-y-4 max-w-xl text-left">
                        <ScrollReveal direction="down">
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Our Work</h2>
                        </ScrollReveal>
                        <BlurText
                            text="Selected projects that showcase our expertise."
                            className="text-4xl md:text-5xl font-bold tracking-tight text-left"
                        />
                    </div>
                    <ScrollReveal direction="left" delay={0.3}>
                        <p className="text-muted-foreground max-w-sm font-medium mb-2 text-left">
                            We take pride in delivering exceptional results for our clients, combining technical excellence with creative vision.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <ScrollReveal
                            key={i}
                            direction={i % 2 === 0 ? "right" : "left"}
                            delay={i * 0.1}
                            distance={40}
                        >
                            <div className="group rounded-3xl overflow-hidden bg-accent/30 border hover:border-primary/30 transition-all h-full flex flex-col">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <button className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform">
                                            <ExternalLink size={20} />
                                        </button>
                                        <button className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform">
                                            <Github size={20} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-8 text-left flex-grow">
                                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{project.category}</p>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                                    <button className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider group/btn">
                                        View Case Study
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </main>
    );
}
