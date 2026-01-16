import React from "react";

type StatusType = "wip" | "live" | "research";

interface ExperimentCardProps {
    icon: string;
    title: string;
    description: string;
    status: StatusType;
}

const statusConfig = {
    wip: {
        label: "In Progress",
        textColor: "text-amber-400",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/30",
        dotColor: "bg-amber-400",
    },
    live: {
        label: "Live",
        textColor: "text-emerald-400",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30",
        dotColor: "bg-emerald-400",
    },
    research: {
        label: "Research",
        textColor: "text-blue-400",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/30",
        dotColor: "bg-blue-400",
    },
};

export default function ExperimentCard({ icon, title, description, status }: ExperimentCardProps) {
    const config = statusConfig[status];

    return (
        <div className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(52,211,153,0.1)] hover:-translate-y-1">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
                {/* Header with status */}
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-xl text-2xl group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                    <span className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium ${config.textColor} ${config.bgColor} rounded-full border ${config.borderColor}`}>
                        <span className={`w-1.5 h-1.5 ${config.dotColor} rounded-full animate-pulse`} />
                        {config.label}
                    </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-100 mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 pt-4 border-t border-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Actively developing
                    </span>
                </div>
            </div>
        </div>
    );
}
