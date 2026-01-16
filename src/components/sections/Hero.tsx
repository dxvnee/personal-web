"use client"

import { useEffect, useState } from "react";

const skills = [
    { name: "Laravel", color: "text-red-400" },
    { name: "Next.js", color: "text-cyan-400" },
    { name: "Jetpack Compose", color: "text-green-400" },
    { name: "Swift", color: "text-orange-400" },
    { name: "Flutter", color: "text-blue-400" },
    { name: "REST API", color: "text-purple-400" },
];

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float delay-300" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-float delay-500" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Status badge */}
                <div className="mb-6 inline-block">
                    <span className="px-4 py-2 text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Available for Projects
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    <span className="text-gray-100">Fullstack</span>
                    <br />
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-[size:200%_200%] animate-[gradientShift_3s_ease_infinite]">
                        Developer
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Hi, I&apos;m <span className="text-cyan-400 font-semibold">Dxvnee</span>. I build complete digital solutions — from
                    <span className="text-purple-400 font-medium"> web applications</span> to
                    <span className="text-emerald-400 font-medium"> mobile experiences</span>.
                    Passionate about clean architecture, scalable systems, and exceptional user interfaces.
                </p>

                {/* Skills showcase */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {skills.map((skill, index) => (
                        <span
                            key={skill.name}
                            className={`px-4 py-2 text-sm ${skill.color} bg-gray-900/60 border border-gray-700/50 rounded-lg backdrop-blur-sm hover:border-gray-600 hover:scale-105 transition-all duration-300 cursor-default`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>

                {/* Code-style intro with enhanced styling */}
                <div className="mb-10 p-5 bg-gray-900/70 border border-gray-800 rounded-xl text-left max-w-lg mx-auto backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] group">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
                        <span className="w-3 h-3 bg-red-500 rounded-full transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                        <span className="w-3 h-3 bg-yellow-500 rounded-full transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                        <span className="w-3 h-3 bg-green-500 rounded-full transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                        <span className="ml-auto text-xs text-gray-500 font-mono">developer.ts</span>
                    </div>
                    <pre className="text-sm overflow-x-auto font-mono">
                        <code>
                            <span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> <span className="text-gray-500">=</span> {"{"}
                            {"\n"}  <span className="text-emerald-400">name</span>: <span className="text-yellow-300">&quot;Dxvnee&quot;</span>,
                            {"\n"}  <span className="text-emerald-400">role</span>: <span className="text-yellow-300">&quot;Fullstack Developer&quot;</span>,
                            {"\n"}  <span className="text-emerald-400">web</span>: [<span className="text-yellow-300">&quot;Laravel&quot;</span>, <span className="text-yellow-300">&quot;Next.js&quot;</span>],
                            {"\n"}  <span className="text-emerald-400">mobile</span>: [<span className="text-yellow-300">&quot;Kotlin&quot;</span>, <span className="text-yellow-300">&quot;Swift&quot;</span>, <span className="text-yellow-300">&quot;Flutter&quot;</span>],
                            {"\n"}  <span className="text-emerald-400">backend</span>: [<span className="text-yellow-300">&quot;REST API&quot;</span>, <span className="text-yellow-300">&quot;GraphQL&quot;</span>],
                            {"\n"}  <span className="text-emerald-400">passion</span>: <span className="text-yellow-300">&quot;Building elegant solutions&quot;</span>
                            {"\n"}{"}"};
                        </code>
                    </pre>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold rounded-xl overflow-hidden transition-all shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_45px_rgba(34,211,238,0.7)] hover:scale-105 duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View My Work
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 border-2 border-gray-700 text-gray-300 rounded-xl overflow-hidden transition-all hover:scale-105 duration-300 hover:border-purple-500/50"
                    >
                        <span className="relative z-10 group-hover:text-purple-400 transition-colors flex items-center gap-2">
                            Let&apos;s Talk
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce" />
                </div>
            </div>

            <style jsx>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    )
}
