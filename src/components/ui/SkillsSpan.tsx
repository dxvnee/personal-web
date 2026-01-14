import { cn } from "@/lib/utils";

type SkillSpanProps = {
    label: string;
    color: string;
}

export default function SkillsSpan({
    label,
    color
}: SkillSpanProps) {
    return (
        <span className={cn("px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)]", color)}>
            {label}
        </span>
    )
}