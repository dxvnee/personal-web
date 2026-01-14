"use client";

import { motion } from "framer-motion";

export default function CyberGrid() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Perspective grid floor */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[50vh]"
                style={{
                    perspective: "1000px",
                    perspectiveOrigin: "50% 0%",
                }}
            >
                <motion.div
                    className="absolute inset-0"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "rotateX(75deg)",
                        transformOrigin: "center top",
                        backgroundImage: `
                            linear-gradient(rgba(34,211,238,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,238,0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "0px 60px"],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                {/* Grid glow overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to top, rgba(34,211,238,0.1), transparent 60%)",
                        transform: "rotateX(75deg)",
                        transformOrigin: "center top",
                    }}
                />
            </div>

            {/* Floating data streams */}
            <div className="absolute inset-0">
                {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-px"
                        style={{
                            left: `${15 + i * 15}%`,
                            height: "30vh",
                            background: `linear-gradient(to bottom, transparent, ${
                                i % 3 === 0 ? "rgba(34,211,238,0.5)" :
                                i % 3 === 1 ? "rgba(168,85,247,0.5)" : "rgba(236,72,153,0.5)"
                            }, transparent)`,
                        }}
                        initial={{ top: "-30vh", opacity: 0 }}
                        animate={{
                            top: ["−30vh", "100vh"],
                            opacity: [0, 0.8, 0.8, 0],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Corner accent frames */}
            <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-cyan-500/30" />
            <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-purple-500/30" />
            <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-pink-500/30" />
            <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-emerald-500/30" />

            {/* Animated corner dots */}
            {[
                { top: "32px", left: "32px" },
                { top: "32px", right: "32px" },
                { bottom: "32px", left: "32px" },
                { bottom: "32px", right: "32px" },
            ].map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-cyan-400"
                    style={pos}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                        boxShadow: [
                            "0 0 10px rgba(34,211,238,0.5)",
                            "0 0 20px rgba(34,211,238,0.8)",
                            "0 0 10px rgba(34,211,238,0.5)",
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}