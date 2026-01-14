"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
    id: number;
    size: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
    color: string;
    blur: number;
    pulse: number;
    moveX: number[];
    moveY: number[];
    rotate: number[];
}

const colors = [
    "rgba(34,211,238,0.8)",   // cyan
    "rgba(251,146,60,0.7)",   // orange
    "rgba(236,72,153,0.7)",   // pink

];

export default function FloatingParticles() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const generated = Array.from({ length: 30 }).map((_, i) => {
            const size = Math.random() * (Math.random() * 40) + 2;
            const pulse = Math.random() * 100;

            const driftX = (Math.random() - 0.5) * 600;
            const driftY = (Math.random() - 0.5) * 600;

            return {
                id: i,
                size,
                x: Math.random() * 100,
                y: Math.random() * 100,
                duration: Math.random() * 10 + 10,
                delay: 0,
                color: colors[Math.floor(Math.random() * colors.length)],
                blur: Math.random() * 0.4 + 4,
                pulse: pulse,
                moveX: [0, driftX],
                moveY: [0, driftY],
                rotate: [0, Math.random() * 360],
            };
        });

        setParticles(generated);
    }, []);
    if (!particles.length) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-80">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    style={{
                        width: p.size,
                        height: p.size,
                        top: `${p.y}%`,
                        left: `${p.x}%`,
                        background: p.color,

                        filter: `blur(${p.blur}px)`,
                        boxShadow: `0 0 ${p.size * 8}px ${p.color.replace(/[\d.]+\)$/, '0.4)')}`,
                    }}
                    animate={{
                        x: p.moveX,
                        y: p.moveY,
                        rotate: p.rotate,
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: p.duration,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
    );
}