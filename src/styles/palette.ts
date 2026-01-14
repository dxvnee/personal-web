export const navColors = {
    cyan: {
        text: "hover:text-cyan-400",
        bg: "bg-cyan-500/10",
        line: "bg-cyan-400",
        glow: "shadow-[0_0_10px_rgba(34,211,238,0.5)]",
    },
    purple: {
        text: "hover:text-purple-400",
        bg: "bg-purple-500/10",
        line: "bg-purple-400",
        glow: "shadow-[0_0_10px_rgba(192,132,252,0.5)]",
    },
    emerald: {
        text: "hover:text-emerald-400",
        bg: "bg-emerald-500/10",
        line: "bg-emerald-400",
        glow: "shadow-[0_0_10px_rgba(52,211,153,0.5)]",
    },
} as const

export type NavColor = keyof typeof navColors
