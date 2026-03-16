"use client";

import Hero from "@/components/Hero";
import ServicesSummary from "@/components/ServicesSummary";
import Testimonials from "@/components/Testimonials";
import ScrollReveal from "@/components/ScrollReveal";
import Parallax from "@/components/Parallax";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSummary />
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-32 px-6 bg-primary text-white text-center relative overflow-hidden">
        <Parallax offset={40}>
          <div className="container mx-auto space-y-10 relative z-10">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                Ready to start your project?
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
                Contact us today for a free consultation and let's build something amazing together.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-primary rounded-full font-bold text-xl hover:bg-opacity-95 transition-all shadow-xl"
              >
                Contact Us Now
              </motion.button>
            </ScrollReveal>
          </div>
        </Parallax>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
          <div className="absolute -top-1/2 -left-1/4 w-[100%] h-[200%] bg-[radial-gradient(circle,white_0%,transparent_70%)] blur-3xl" />
        </div>
      </section>
    </main>
  );
}
