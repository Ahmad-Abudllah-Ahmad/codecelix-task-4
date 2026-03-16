"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxProps {
    children: ReactNode;
    offset?: number;
    className?: string;
}

export default function Parallax({ children, offset = 50, className = "" }: ParallaxProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
    // Snappier spring for "lightning fast" response
    const springY = useSpring(y, { stiffness: 150, damping: 25, restDelta: 0.0001 });

    return (
        <motion.div 
            ref={ref} 
            style={{ 
                y: springY,
                willChange: 'transform',
                transform: 'translate3d(0,0,0)' // Forced hardware acceleration
            }} 
            className={`relative ${className}`}
        >
            {children}
        </motion.div>
    );
}
