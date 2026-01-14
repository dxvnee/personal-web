"use client";

import { motion } from "framer-motion";

export default function HolographicWaves() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Wave 1 - Cyan */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-28"
                style={{
                    background: "linear-gradient(to top, rgba(34,211,238,0.08), transparent)",
                    clipPath: "polygon(0 60%, 15% 55%, 30% 65%, 45% 50%, 60% 60%, 75% 45%, 90% 55%, 100% 50%, 100% 100%, 0 100%)",
                }}
                animate={{
                    clipPath: [
                        "polygon(0 60%, 15% 55%, 30% 65%, 45% 50%, 60% 60%, 75% 45%, 90% 55%, 100% 50%, 100% 100%, 0 100%)",
                        "polygon(0 50%, 15% 60%, 30% 45%, 45% 55%, 60% 50%, 75% 60%, 90% 45%, 100% 55%, 100% 100%, 0 100%)",
                        "polygon(0 55%, 15% 50%, 30% 60%, 45% 45%, 60% 55%, 75% 50%, 90% 60%, 100% 45%, 100% 100%, 0 100%)",
                        "polygon(0 60%, 15% 55%, 30% 65%, 45% 50%, 60% 60%, 75% 45%, 90% 55%, 100% 50%, 100% 100%, 0 100%)",
                    ],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Wave 2 - Purple */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-56"
                style={{
                    background: "linear-gradient(to top, rgba(168,85,247,0.06), transparent)",
                    clipPath: "polygon(0 70%, 20% 60%, 40% 75%, 60% 55%, 80% 65%, 100% 60%, 100% 100%, 0 100%)",
                }}
                animate={{
                    clipPath: [
                        "polygon(0 70%, 20% 60%, 40% 75%, 60% 55%, 80% 65%, 100% 60%, 100% 100%, 0 100%)",
                        "polygon(0 55%, 20% 70%, 40% 60%, 60% 70%, 80% 55%, 100% 70%, 100% 100%, 0 100%)",
                        "polygon(0 65%, 20% 55%, 40% 70%, 60% 60%, 80% 70%, 100% 55%, 100% 100%, 0 100%)",
                        "polygon(0 70%, 20% 60%, 40% 75%, 60% 55%, 80% 65%, 100% 60%, 100% 100%, 0 100%)",
                    ],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Top accent wave - Pink */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-64"
                style={{
                    background: "linear-gradient(to bottom, rgba(236,72,153,0.05), transparent)",
                    clipPath: "polygon(0 0, 100% 0, 100% 40%, 85% 50%, 70% 35%, 55% 45%, 40% 30%, 25% 40%, 10% 35%, 0 45%)",
                }}
                animate={{
                    clipPath: [
                        "polygon(0 0, 100% 0, 100% 40%, 85% 50%, 70% 35%, 55% 45%, 40% 30%, 25% 40%, 10% 35%, 0 45%)",
                        "polygon(0 0, 100% 0, 100% 35%, 85% 45%, 70% 50%, 55% 35%, 40% 45%, 25% 35%, 10% 50%, 0 40%)",
                        "polygon(0 0, 100% 0, 100% 45%, 85% 35%, 70% 40%, 55% 50%, 40% 35%, 25% 45%, 10% 40%, 0 50%)",
                        "polygon(0 0, 100% 0, 100% 40%, 85% 50%, 70% 35%, 55% 45%, 40% 30%, 25% 40%, 10% 35%, 0 45%)",
                    ],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
        </div>
    );
}