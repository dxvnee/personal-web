"use client"

import AmbientGlow from "@/components/ui/AmbientGlow";
import Hero from "@/components/ui/Hero";
import { TopBar } from "@/components/ui/TopBar";
import React, { useState } from "react";

export default function MainPage() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-mono">


      {/* Top Navigation Bar */}
      <TopBar />

      {/* Hero Section */}
      <Hero />

      {/* Systems / Projects Section */}
      <section id="systems" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyan-400 text-sm font-mono">01.</span>
            <h2 className="text-3xl font-bold text-gray-100">Systems</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 text-2xl">📁</span>
                  <div className="flex gap-2">
                    <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">↗</a>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">Project Alpha</h3>
                <p className="text-sm text-gray-400 mb-4">A full-stack web application with real-time features and modern architecture.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-cyan-400 bg-cyan-500/10 rounded">React</span>
                  <span className="px-2 py-1 text-xs text-cyan-400 bg-cyan-500/10 rounded">Node.js</span>
                  <span className="px-2 py-1 text-xs text-cyan-400 bg-cyan-500/10 rounded">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 text-2xl">🔧</span>
                  <div className="flex gap-2">
                    <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">↗</a>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">API Gateway</h3>
                <p className="text-sm text-gray-400 mb-4">Microservices architecture with load balancing and rate limiting.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-cyan-400 bg-cyan-500/10 rounded">Go</span>
                  <span className="px-2 py-1 text-xs text-cyan-400 bg-cyan-500/10 rounded">Docker</span>
                  <span className="px-2 py-1 text-xs text-cyan-400 bg-cyan-500/10 rounded">Redis</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 text-2xl">💻</span>
                  <div className="flex gap-2">
                    <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">↗</a>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">CLI Tools</h3>
                <p className="text-sm text-gray-400 mb-4">Command-line utilities for developer productivity and automation.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-cyan-400 bg-cyan-500/10 rounded">Rust</span>
                  <span className="px-2 py-1 text-xs text-cyan-400 bg-cyan-500/10 rounded">Shell</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiments / Lab Section */}
      <section id="experiments" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-purple-400 text-sm font-mono">02.</span>
            <h2 className="text-3xl font-bold text-gray-100">Experiments</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Lab Item 1 */}
            <div className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-purple-400 text-xl">🧪</span>
                  <span className="px-2 py-1 text-xs text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">WIP</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors">AI Code Assistant</h3>
                <p className="text-sm text-gray-400">Exploring local LLM integration for code generation and review.</p>
              </div>
            </div>

            {/* Lab Item 2 */}
            <div className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-purple-400 text-xl">🎮</span>
                  <span className="px-2 py-1 text-xs text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">Live</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors">WebGL Shader Art</h3>
                <p className="text-sm text-gray-400">Creative coding experiments with fragment shaders and generative art.</p>
              </div>
            </div>

            {/* Lab Item 3 */}
            <div className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-purple-400 text-xl">🤖</span>
                  <span className="px-2 py-1 text-xs text-yellow-400 bg-yellow-500/10 rounded-full border border-yellow-500/20">Research</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors">Edge Computing</h3>
                <p className="text-sm text-gray-400">Distributed systems running on edge devices with WebAssembly.</p>
              </div>
            </div>

            {/* Lab Item 4 */}
            <div className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-purple-400 text-xl">📊</span>
                  <span className="px-2 py-1 text-xs text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">WIP</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors">Data Visualization</h3>
                <p className="text-sm text-gray-400">Interactive data viz library using D3.js and Canvas APIs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex-1 h-[1px] bg-gradient-to-l from-emerald-500/50 to-transparent" />
            <span className="text-emerald-400 text-sm font-mono">03.</span>
            <h2 className="text-3xl font-bold text-gray-100">Contact</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
          </div>

          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Have a project in mind or just want to chat? My inbox is always open.
            Let's build something amazing together.
          </p>

          <div className="mb-10 p-6 bg-gray-900/50 border border-gray-800 rounded-xl max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-2 text-xs text-gray-500">contact.sh</span>
            </div>
            <pre className="text-left text-sm">
              <code>
                <span className="text-gray-500">$ </span><span className="text-emerald-400">echo</span> <span className="text-yellow-300">"Hello!"</span>
                {"\n"}<span className="text-gray-500">$ </span><span className="text-emerald-400">mail</span> -s <span className="text-yellow-300">"Let's connect"</span> \
                {"\n"}  <span className="text-cyan-400">you@email.com</span>
              </code>
            </pre>
          </div>

          <a
            href="mailto:you@email.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-[0_0_25px_rgba(52,211,153,0.4)] hover:shadow-[0_0_35px_rgba(52,211,153,0.6)]"
          >
            Say Hello →
          </a>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
              GitHub
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]">
              LinkedIn
            </a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Built with Next.js & TailwindCSS</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            © 2026 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
