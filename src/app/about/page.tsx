"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Rocket } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BlurText from "@/components/BlurText";

const team = [
    { name: "John Doe", role: "Creative Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" },
    { name: "Jane Smith", role: "Lead Developer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" },
    { name: "Mike Johnson", role: "AI Specialist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" },
    { name: "Emily Davis", role: "UX Strategist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" },
];

const stats = [
    { label: "Years Experience", value: "10+", icon: <Rocket className="w-5 h-5" /> },
    { label: "Successful Projects", value: "250+", icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: "Happy Clients", value: "150+", icon: <Users className="w-5 h-5" /> },
    { label: "Design Awards", value: "15+", icon: <Award className="w-5 h-5" /> },
];

export default function AboutPage() {
    return (
        <main className="pt-32 pb-24 overflow-hidden">
            {/* Intro Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <ScrollReveal direction="down">
                                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase text-left">About Codecelix</h2>
                                </ScrollReveal>
                                <BlurText
                                    text="We are a team of passionate creators, designers, and developers."
                                    className="text-4xl md:text-6xl font-bold tracking-tight text-left leading-tight"
                                />
                            </div>
                            <ScrollReveal direction="right" delay={0.4}>
                                <p className="text-xl text-muted-foreground leading-relaxed text-left">
                                    Founded in 2014, we've been at the forefront of digital innovation, helping businesses transform their ideas into powerful digital experiences that drive growth and engagement.
                                </p>
                            </ScrollReveal>
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                {stats.map((stat, i) => (
                                    <ScrollReveal key={i} direction="up" delay={0.5 + i * 0.1}>
                                        <div className="space-y-2 text-left">
                                            <div className="flex items-center gap-2 text-primary">
                                                {stat.icon}
                                                <span className="text-3xl font-bold">{stat.value}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                        <ScrollReveal direction="left" distance={100} delay={0.2}>
                            <div className="relative aspect-square rounded-3xl overflow-hidden group">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                    alt="Our Team"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-t border-b">
                        <ScrollReveal direction="up" delay={0.2}>
                            <div className="space-y-4 text-left">
                                <h3 className="text-2xl font-bold">Our Mission</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To empower businesses through innovative technology and exceptional design, creating lasting value for our clients and their customers.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="up" delay={0.3}>
                            <div className="space-y-4 text-left">
                                <h3 className="text-2xl font-bold">Our Vision</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To be the world's leading digital partner, known for our creativity, technical excellence, and commitment to client success.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="up" delay={0.4}>
                            <div className="space-y-4 text-left">
                                <h3 className="text-2xl font-bold">Our Values</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Innovation, Integrity, Collaboration, and Excellence. These core values guide everything we do.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 bg-accent/30 dark:bg-white/[0.01]">
                <div className="container mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <ScrollReveal direction="down">
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Meet the Experts</h2>
                        </ScrollReveal>
                        <BlurText
                            text="The minds behind the magic."
                            className="text-4xl font-bold justify-center"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <ScrollReveal
                                key={i}
                                direction="up"
                                delay={i * 0.1}
                                distance={40}
                            >
                                <div className="group relative">
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-accent relative">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <h4 className="font-bold text-lg">{member.name}</h4>
                                            <p className="text-sm text-white/70 font-medium">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
