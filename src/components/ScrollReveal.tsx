"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    distance?: number;
    scale?: number;
}

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    distance = 30,
    scale = 0.95,
}: ScrollRevealProps) {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                filter: "blur(10px)",
                ...directions[direction],
                scale: scale
            }}
            whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                x: 0,
                y: 0,
                scale: 1
            }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ willChange: "filter, opacity, transform" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smoothness
            }}
        >
            {children}
        </motion.div>
    );
}
