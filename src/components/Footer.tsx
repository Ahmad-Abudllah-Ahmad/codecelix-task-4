"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Parallax from "@/components/Parallax";

export default function Footer() {
    return (
        <footer className="footer-container bg-foreground text-background py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-black/10 pb-20">
                    <ScrollReveal direction="right" delay={0.1}>
                        <Parallax offset={20}>
                            <div className="space-y-8">
                                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                                    <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
                                    <span className="text-black">DIGITAL<span className="text-primary font-bold">AGENCY</span></span>
                                </Link>
                                <p className="text-black/80 leading-relaxed max-w-xs font-medium">
                                    Transforming ideas into digital reality. We build products that people love to use and businesses thrive on.
                                </p>
                                <div className="flex gap-4">
                                    {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                                        <Link
                                            key={i}
                                            href="#"
                                            className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                                        >
                                            <Icon size={20} className="text-black group-hover:text-white group-hover:rotate-12 transition-transform" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Parallax>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.2}>
                        <Parallax offset={30}>
                            <div>
                                <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-primary">Quick Links</h4>
                                <ul className="space-y-4 text-black/70">
                                    {["Home", "About Us", "Services", "Portfolio"].map((item) => (
                                        <li key={item}>
                                            <Link href={item === "Home" ? "/" : `/${item.toLowerCase().split(' ')[0]}`} className="hover:text-black hover:translate-x-2 transition-all inline-block font-medium">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Parallax>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.3}>
                        <Parallax offset={40}>
                            <div>
                                <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-primary">Services</h4>
                                <ul className="space-y-4 text-black/70 font-medium">
                                    {["Web Development", "Mobile Apps", "AI & Automation", "UI/UX Design"].map((item) => (
                                        <li key={item} className="hover:text-black transition-colors cursor-pointer">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Parallax>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={0.4}>
                        <Parallax offset={20}>
                            <div>
                                <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-primary">Newsletter</h4>
                                <p className="text-black/70 mb-8 font-medium">Get the latest digital trends in your inbox.</p>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full bg-black/5 border border-black/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-all pr-12 font-medium text-black placeholder:text-black/40"
                                    />
                                    <button className="absolute right-2 top-2 p-2 bg-primary rounded-xl hover:opacity-90 transition-opacity group-hover:scale-105 duration-300">
                                        <ArrowRight size={20} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </Parallax>
                    </ScrollReveal>
                </div>

                <Parallax offset={10}>
                    <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-black/60 font-bold uppercase tracking-widest">
                        <p>© 2026 DIGITAL AGENCY. CRAFTING EXCELLENCE.</p>
                        <div className="flex gap-12">
                            <Link href="#" className="hover:text-black transition-colors border-b border-transparent hover:border-black">PRIVACY POLICY</Link>
                            <Link href="#" className="hover:text-black transition-colors border-b border-transparent hover:border-black">TERMS</Link>
                        </div>
                    </div>
                </Parallax>
            </div>
        </footer>
    );
}
