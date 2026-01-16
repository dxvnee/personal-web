"use client";

import React from "react";
import ExperimentCard from "@/components/ui/ExperimentCard";

const experiments = [
    {
        icon: "�",
        title: "AI-Powered Code Review",
        description: "Experimenting with local LLM integration for automated code review and suggestions in development workflows.",
        status: "wip" as const,
    },
    {
        icon: "🔐",
        title: "Biometric Auth SDK",
        description: "Building a unified biometric authentication SDK for cross-platform mobile applications.",
        status: "live" as const,
    },
    {
        icon: "📊",
        title: "Real-time Analytics",
        description: "Researching efficient data streaming architectures for real-time dashboard applications.",
        status: "research" as const,
    },
    {
        icon: "🎨",
        title: "Motion Design System",
        description: "Creating a comprehensive animation library for React and Flutter applications with smooth transitions.",
        status: "wip" as const,
    },
];

export default function ExperimentsSection() {
    return (
        <section id="experiments" className="relative py-24 px-6">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-emerald-400 text-sm font-mono">03.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Lab & Experiments</h2>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
                </div>

                <p className="text-gray-400 text-lg max-w-2xl mb-12">
                    Beyond client work, I love exploring new technologies and building experimental projects.
                    These are my current research interests and side projects.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {experiments.map((experiment, index) => (
                        <div
                            key={experiment.title}
                            className="opacity-0 animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                        >
                            <ExperimentCard {...experiment} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
