"use client";

import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-gray-800/50 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Description */}
                    <div className="text-center md:text-left">
                        <a href="#hero" className="inline-block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                            &lt;Dxvnee /&gt;
                        </a>
                        <p className="text-sm text-gray-500">
                            Fullstack Developer — Web, Mobile & API
                        </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                            Available for work
                        </span>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <span>Built with Next.js & TailwindCSS</span>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800/50 text-center text-sm text-gray-500">
                    <p>© {currentYear} Dxvnee. Crafted with 💻 and ☕</p>
                </div>
            </div>
        </footer>
    );
}
