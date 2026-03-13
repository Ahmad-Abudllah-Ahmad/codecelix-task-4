"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundEffect() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
            {/* Animated Mesh Gradients */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -150, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600/5 rounded-full blur-[150px]"
            />
            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"
            />

            {/* Subtle Floating Blobs */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => {
                    // Use deterministic values based on index to avoid hydration mismatch
                    const sizes = [150, 120, 180, 140, 160];
                    const positions = [
                        { left: '10%', top: '15%' },
                        { left: '70%', top: '25%' },
                        { left: '40%', top: '60%' },
                        { left: '80%', top: '70%' },
                        { left: '20%', top: '80%' }
                    ];

                    return (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.1, 0.2, 0.1],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration: 8 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 1,
                            }}
                            className="absolute rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm"
                            style={{
                                width: `${sizes[i]}px`,
                                height: `${sizes[i] * 0.6}px`,
                                left: positions[i].left,
                                top: positions[i].top,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
