"use client";

import { useEffect, useState } from "react";

// Pre-computed outside the component to avoid impure function calls during render
const blobs = [
    { width: 120, height: 90,  left: 10,  top: 15 },
    { width: 80,  height: 140, left: 55,  top: 40 },
    { width: 100, height: 100, left: 80,  top: 70 },
    { width: 60,  height: 80,  left: 30,  top: 60 },
    { width: 150, height: 70,  left: 65,  top: 10 },
];

export default function BackgroundEffect() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none" style={{ transform: 'translateZ(0)' }}>
            {/* Animated Mesh Gradients - Optimized depth and visibility with GPU acceleration */}
            <div className="absolute -top-[15%] -left-[15%] w-[70%] h-[70%] bg-primary/30 rounded-full blur-[150px] animate-float-1" style={{ transform: 'translate3d(0,0,0)' }} />
            <div className="absolute top-[5%] -right-[20%] w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[160px] animate-float-2" style={{ transform: 'translate3d(0,0,0)' }} />
            <div className="absolute -bottom-[10%] left-[5%] w-[60%] h-[60%] bg-primary/25 rounded-full blur-[130px] animate-float-3" style={{ transform: 'translate3d(0,0,0)' }} />

            {/* Subtle Floating Blobs - Using static blur for better performance than backdrop-blur */}
            <div className="absolute inset-0" style={{ transform: 'translate3d(0,0,0)' }}>
                {mounted && blobs.map((blob, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/10 border border-white/20 blur-[2px]"
                        style={{ 
                            width: `${blob.width * 1.5}px`, 
                            height: `${blob.height * 1.5}px`, 
                            left: `${blob.left}%`, 
                            top: `${blob.top}%`,
                            animation: `blob-bounce ${7 + i * 4}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                            willChange: 'transform, opacity',
                            transform: 'translate3d(0,0,0)',
                            opacity: 0.2 + (i * 0.05)
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
