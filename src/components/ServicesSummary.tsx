"use client";

import { motion } from "framer-motion";
import { Code, Globe, Cpu, Palette, Megaphone, Smartphone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import BlurText from "./BlurText";
import Parallax from "./Parallax";

const services = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Web Development",
        desc: "Crafting high-performance websites with cutting-edge technologies.",
        direction: "right" as const,
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile Apps",
        desc: "Building intuitive native and cross-platform mobile applications.",
        direction: "left" as const,
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "AI & Automation",
        desc: "Leveraging machine learning to streamline your business workflows.",
        direction: "right" as const,
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "UI/UX Design",
        desc: "User-centric design that balances aesthetics with functionality.",
        direction: "left" as const,
    },
    {
        icon: <Megaphone className="w-8 h-8" />,
        title: "Digital Marketing",
        desc: "Data-driven strategies to grow your brand's online presence.",
        direction: "right" as const,
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "SaaS Solutions",
        desc: "Scalable software architectures for modern business needs.",
        direction: "left" as const,
    },
];

export default function ServicesSummary() {
    return (
        <section className="py-24 px-6 bg-accent/50 dark:bg-white/[0.02]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
                    <div className="space-y-4 max-w-2xl text-left">
                        <ScrollReveal direction="down">
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Our Expertise</h2>
                        </ScrollReveal>
                        <Parallax offset={20}>
                            <BlurText
                                text="We provide comprehensive digital solutions."
                                className="text-4xl md:text-6xl font-bold tracking-tight text-left leading-tight"
                            />
                        </Parallax>
                    </div>
                    <ScrollReveal direction="left" delay={0.3}>
                        <Parallax offset={10}>
                            <p className="text-muted-foreground max-w-sm mb-2 font-medium">
                                From strategy to execution, we take care of all your digital needs under one roof.
                            </p>
                        </Parallax>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container-isolate">
                    {services.map((service, i) => (
                        <ScrollReveal
                            key={i}
                            direction={service.direction}
                            delay={i * 0.1}
                            distance={30}
                        >
                            <Parallax offset={15 + i * 5} className="h-full">
                                <div className="p-8 rounded-2xl bg-background border hover:border-primary/50 transition-all group h-full">
                                    <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                                    <p className="text-muted-foreground font-medium leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </Parallax>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
