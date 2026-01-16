"use client";

import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
    {
        icon: "🌐",
        title: "E-Commerce Platform",
        description: "Full-featured online marketplace with payment integration, inventory management, and real-time order tracking. Built with Laravel backend and Next.js storefront.",
        tags: ["Laravel", "Next.js", "PostgreSQL", "Stripe"],
        link: "#",
        category: "web",
    },
    {
        icon: "📱",
        title: "Health & Fitness App",
        description: "Native Android application for workout tracking, meal planning, and health analytics with offline-first architecture.",
        tags: ["Kotlin", "Jetpack Compose", "Room DB", "Material 3"],
        link: "#",
        category: "mobile",
    },
    {
        icon: "🔗",
        title: "RESTful API Service",
        description: "Scalable microservices architecture with authentication, rate limiting, and comprehensive documentation using OpenAPI.",
        tags: ["Laravel", "REST API", "Redis", "Docker"],
        link: "#",
        category: "backend",
    },
    {
        icon: "🍎",
        title: "iOS Productivity App",
        description: "Task management application with iCloud sync, widgets, and Siri shortcuts integration for seamless productivity.",
        tags: ["Swift", "SwiftUI", "CloudKit", "WidgetKit"],
        link: "#",
        category: "mobile",
    },
    {
        icon: "🎯",
        title: "Cross-Platform Social App",
        description: "Real-time social networking application with chat, stories, and content sharing built for iOS and Android.",
        tags: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
        link: "#",
        category: "mobile",
    },
    {
        icon: "⚡",
        title: "Admin Dashboard",
        description: "Comprehensive admin panel with analytics, user management, and customizable widgets. Features dark mode and responsive design.",
        tags: ["Next.js", "TailwindCSS", "Chart.js", "NextAuth"],
        link: "#",
        category: "web",
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative py-24 px-6">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-purple-400 text-sm font-mono">02.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Featured Projects</h2>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                </div>

                <p className="text-gray-400 text-lg max-w-2xl mb-12">
                    A selection of projects that showcase my expertise in web development,
                    mobile applications, and backend systems. Each project represents real-world
                    solutions with attention to detail and user experience.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="opacity-0 animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>

                {/* View more button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/dxvnee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 border border-gray-800 rounded-lg hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 group"
                    >
                        <span>View More on GitHub</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
