"use client";

import React from "react";

const skillCategories = [
    {
        title: "Web Development",
        icon: "🌐",
        color: "cyan",
        description: "Building modern, responsive web applications with cutting-edge technologies",
        skills: [
            { name: "Laravel", level: 95, description: "PHP framework for robust backend systems" },
            { name: "Next.js", level: 90, description: "React framework for production-grade apps" },
            { name: "React", level: 88, description: "Component-based UI development" },
            { name: "TailwindCSS", level: 92, description: "Utility-first CSS framework" },
        ],
    },
    {
        title: "Mobile Development",
        icon: "📱",
        color: "purple",
        description: "Creating native and cross-platform mobile experiences",
        skills: [
            { name: "Jetpack Compose", level: 88, description: "Modern Android UI toolkit" },
            { name: "Swift/SwiftUI", level: 82, description: "iOS native development" },
            { name: "Flutter", level: 85, description: "Cross-platform mobile development" },
            { name: "Kotlin", level: 87, description: "Android native language" },
        ],
    },
    {
        title: "Backend & API",
        icon: "⚡",
        color: "emerald",
        description: "Designing scalable APIs and backend architectures",
        skills: [
            { name: "REST API", level: 95, description: "RESTful service design" },
            { name: "GraphQL", level: 78, description: "Flexible query language for APIs" },
            { name: "PostgreSQL", level: 85, description: "Advanced relational database" },
            { name: "Redis", level: 80, description: "In-memory data structure store" },
        ],
    },
];

const colorClasses = {
    cyan: {
        text: "text-cyan-400",
        bg: "bg-cyan-500",
        bgLight: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        shadow: "shadow-[0_0_20px_rgba(34,211,238,0.3)]",
        hoverBorder: "hover:border-cyan-500/50",
    },
    purple: {
        text: "text-purple-400",
        bg: "bg-purple-500",
        bgLight: "bg-purple-500/10",
        border: "border-purple-500/30",
        shadow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
        hoverBorder: "hover:border-purple-500/50",
    },
    emerald: {
        text: "text-emerald-400",
        bg: "bg-emerald-500",
        bgLight: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        shadow: "shadow-[0_0_20px_rgba(52,211,153,0.3)]",
        hoverBorder: "hover:border-emerald-500/50",
    },
};

export default function SkillsSection() {
    return (
        <section id="skills" className="relative py-24 px-6">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-cyan-400 text-sm font-mono">01.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Technical Expertise</h2>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
                </div>

                <p className="text-gray-400 text-lg max-w-2xl mb-12">
                    As a fullstack developer, I specialize in building end-to-end solutions.
                    From crafting beautiful user interfaces to designing robust backend systems.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => {
                        const colors = colorClasses[category.color as keyof typeof colorClasses];
                        return (
                            <div
                                key={category.title}
                                className={`group p-6 bg-gray-900/50 border border-gray-800 rounded-2xl ${colors.hoverBorder} transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]`}
                                style={{ animationDelay: `${categoryIndex * 150}ms` }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl">{category.icon}</span>
                                    <h3 className={`text-xl font-bold ${colors.text}`}>{category.title}</h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-6">{category.description}</p>

                                <div className="space-y-4">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name} className="group/skill">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-gray-300 text-sm font-medium group-hover/skill:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                                <span className={`text-xs ${colors.text} opacity-0 group-hover/skill:opacity-100 transition-opacity`}>
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${colors.bg} rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_currentColor]`}
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional tools */}
                <div className="mt-16 text-center">
                    <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-6">Also experienced with</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Docker", "Git", "TypeScript", "MySQL", "Firebase", "AWS", "Figma", "Linux"].map((tool) => (
                            <span
                                key={tool}
                                className="px-4 py-2 text-sm text-gray-400 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 hover:text-gray-300 transition-all duration-300 cursor-default"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
