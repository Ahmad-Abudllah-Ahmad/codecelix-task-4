"use client";

import { motion } from "framer-motion";

interface BlurTextProps {
    text: string;
    delay?: number;
    className?: string;
    once?: boolean;
}

export default function BlurText({ text, delay = 0, className = "", once = true }: BlurTextProps) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 15,
                stiffness: 120,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(8px)",
            transition: {
                type: "spring" as const,
                damping: 15,
                stiffness: 120,
            },
        },
    };

    return (
        <motion.div
            style={{ display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: once }}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ 
                        marginRight: "0.25em",
                        willChange: "filter, opacity, transform"
                    }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
