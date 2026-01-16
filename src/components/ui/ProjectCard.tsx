import React from "react";

interface ProjectCardProps {
    icon: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    category?: string;
}

const categoryColors = {
    web: { border: "hover:border-cyan-500/50", shadow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]", accent: "text-cyan-400", bg: "bg-cyan-500/10" },
    mobile: { border: "hover:border-purple-500/50", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]", accent: "text-purple-400", bg: "bg-purple-500/10" },
    backend: { border: "hover:border-emerald-500/50", shadow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]", accent: "text-emerald-400", bg: "bg-emerald-500/10" },
};

export default function ProjectCard({ icon, title, description, tags, link, category = "web" }: ProjectCardProps) {
    const colors = categoryColors[category as keyof typeof categoryColors] || categoryColors.web;

    return (
        <div className={`group relative p-6 bg-gray-900/50 border border-gray-800 rounded-2xl ${colors.border} transition-all duration-500 ${colors.shadow} hover:-translate-y-1`}>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 flex items-center justify-center ${colors.bg} rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110`}>
                        {icon}
                    </div>
                    <div className="flex gap-3">
                        {link && (
                            <a
                                href={link}
                                className={`p-2 text-gray-500 ${colors.accent.replace('text-', 'hover:text-')} transition-all duration-300 hover:scale-110`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <h3 className={`text-lg font-bold text-gray-100 mb-3 group-hover:${colors.accent.replace('text-', 'text-')} transition-colors duration-300`}>
                    {title}
                </h3>
                <p className="text-sm text-gray-400 mb-5 leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={`px-3 py-1 text-xs font-medium ${colors.accent} ${colors.bg} rounded-full border border-transparent hover:border-current transition-colors duration-300`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
