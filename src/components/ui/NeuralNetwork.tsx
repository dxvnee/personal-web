"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";


type Node = {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
};

export default function NeuralNetwork() {
    const [nodes, setNodes] = useState<Node[]>([]);

    useEffect(() => {
        const generated = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 2,
            delay: Math.random() * 3,
        }));
        setNodes(generated);
    }, []);


    const connections = useMemo(() => {
        if (nodes.length === 0) return [];

        return nodes.slice(0, 10).map((node, i) => {
            const target = nodes[(i + 3) % nodes.length];
            return {
                id: i,
                x1: node.x,
                y1: node.y,
                x2: target.x,
                y2: target.y,
                delay: (i % 5) * 0.6, // deterministic (anti hydration bug)
            };
        });

    }, [nodes]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-80" aria-hidden="true">
            <svg className="w-full h-full absolute inset-0" style={{ opacity: 0.3 }}>
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(34,211,238,0.5)" />
                        <stop offset="50%" stopColor="rgba(168,85,247,0.5)" />
                        <stop offset="100%" stopColor="rgba(236,72,153,0.5)" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Animated connection lines */}
                {connections.map((conn) => (
                    <motion.line
                        key={`line-${conn.id}`}
                        x1={`${conn.x1}%`}
                        y1={`${conn.y1}%`}
                        x2={`${conn.x2}%`}
                        y2={`${conn.y2}%`}
                        stroke="url(#lineGradient)"
                        strokeWidth="3"
                        filter="url(#glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, 0.6, 0.6, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            delay: conn.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Animated nodes */}
                {nodes.map((node) => (
                    <motion.circle
                        key={`node-${node.id}`}
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r={node.size}
                        fill="rgba(34,211,238,0.8)"
                        filter="url(#glow)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0.5, 1.2, 0.5],
                            opacity: [0.3, 0.9, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: node.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}