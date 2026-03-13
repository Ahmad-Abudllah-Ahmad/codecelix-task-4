"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import BlurText from "./BlurText";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "CEO, TechFlow",
        text: "The team delivered a website that exceeded our wildest expectations. Their attention to detail and animation quality is world-class.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    },
    {
        name: "Sarah Chen",
        role: "Marketing Director, Lumina",
        text: "Working with this agency was a game-changer for our digital presence. They truly understand modern design trends.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
        name: "Marcus Thorne",
        role: "Founder, GreenGrid",
        text: "Highly professional and technically skilled. They handled our complex AI integration with ease and delivered on time.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <ScrollReveal direction="down">
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Testimonials</h2>
                    </ScrollReveal>
                    <BlurText
                        text="What our clients say."
                        className="text-4xl font-bold justify-center"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <ScrollReveal
                            key={i}
                            delay={i * 0.1}
                            scale={0.8}
                            distance={40}
                        >
                            <div className="p-10 rounded-3xl bg-accent/30 dark:bg-white/[0.01] border relative hover:border-primary/30 transition-colors group h-full flex flex-col justify-between">
                                <Quote className="text-primary/20 absolute top-8 right-8 w-12 h-12 group-hover:text-primary/40 transition-colors" />
                                <p className="text-lg font-medium leading-relaxed mb-8 relative z-10">
                                    "{item.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 group-hover:scale-110 transition-transform relative">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{item.name}</h4>
                                        <p className="text-sm text-muted-foreground">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
