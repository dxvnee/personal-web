"use client";

import React from "react";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/dxvnee",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
        ),
        hoverColor: "hover:text-gray-100",
        bgHover: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        hoverColor: "hover:text-blue-400",
        bgHover: "hover:bg-blue-500/10",
    },
    {
        name: "Email",
        href: "mailto:contact@dxvnee.dev",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        hoverColor: "hover:text-emerald-400",
        bgHover: "hover:bg-emerald-500/10",
    },
];

const services = [
    { title: "Web Development", desc: "Laravel & Next.js" },
    { title: "Mobile Apps", desc: "iOS, Android & Flutter" },
    { title: "API Development", desc: "REST & GraphQL" },
    { title: "UI/UX Design", desc: "Modern interfaces" },
];

export default function ContactSection() {
    return (
        <section id="contact" className="relative py-24 px-6 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex items-center justify-center gap-4 mb-16">
                    <div className="flex-1 h-[1px] bg-gradient-to-l from-cyan-500/50 to-transparent" />
                    <span className="text-cyan-400 text-sm font-mono">04.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Let&apos;s Connect</h2>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
                </div>

                <div className="text-center mb-12">
                    <p className="text-xl text-gray-300 mb-4">
                        Ready to bring your ideas to life?
                    </p>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        I&apos;m always interested in new projects and opportunities.
                        Whether you need a complete application, API development, or mobile solution — let&apos;s discuss how I can help.
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl text-center hover:border-cyan-500/30 transition-all duration-300 group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <h4 className="text-gray-200 font-medium text-sm mb-1 group-hover:text-cyan-400 transition-colors">{service.title}</h4>
                            <p className="text-gray-500 text-xs">{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Terminal style contact */}
                <div className="mb-10 p-6 bg-gray-900/70 border border-gray-800 rounded-2xl max-w-lg mx-auto backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
                        <span className="w-3 h-3 bg-red-500 rounded-full group-hover:shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-shadow" />
                        <span className="w-3 h-3 bg-yellow-500 rounded-full group-hover:shadow-[0_0_8px_rgba(234,179,8,0.8)] transition-shadow" />
                        <span className="w-3 h-3 bg-green-500 rounded-full group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-shadow" />
                        <span className="ml-auto text-xs text-gray-500 font-mono">contact.sh</span>
                    </div>
                    <pre className="text-left text-sm font-mono">
                        <code>
                            <span className="text-gray-500">$ </span>
                            <span className="text-cyan-400">whoami</span>
                            {"\n"}
                            <span className="text-gray-300">Dxvnee - Fullstack Developer</span>
                            {"\n\n"}
                            <span className="text-gray-500">$ </span>
                            <span className="text-cyan-400">cat</span> services.txt
                            {"\n"}
                            <span className="text-emerald-400">→ Web Apps</span> (Laravel, Next.js)
                            {"\n"}
                            <span className="text-purple-400">→ Mobile Apps</span> (Kotlin, Swift, Flutter)
                            {"\n"}
                            <span className="text-amber-400">→ Backend</span> (REST API, GraphQL)
                            {"\n\n"}
                            <span className="text-gray-500">$ </span>
                            <span className="text-cyan-400">echo</span> <span className="text-yellow-300">&quot;Let&apos;s build something amazing!&quot;</span>
                        </code>
                    </pre>
                </div>

                {/* CTA Button */}
                <div className="text-center mb-12">
                    <a
                        href="mailto:contact@dxvnee.dev"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-xl hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:scale-105"
                    >
                        <span>Start a Conversation</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-4 text-gray-500 ${link.hoverColor} ${link.bgHover} rounded-xl transition-all duration-300 hover:scale-110 border border-transparent hover:border-gray-700`}
                            title={link.name}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
