"use client"


export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">


            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="mb-6 inline-block animate-fadeInDown">
                    <span className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300">
                        Full Stack Developer
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp">
                    <span className="text-gray-100">Hi, I'm </span>
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 animate-gradientShift">
                        Dxvnee
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
                    I craft digital experiences through code. Specializing in
                    <span className="text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300"> systems architecture</span>,
                    <span className="text-purple-400 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)] transition-all duration-300"> experimental projects</span>, and
                    <span className="text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all duration-300"> creative solutions</span>.
                </p>

                {/* Code-style intro with enhanced animations */}
                <div className="mb-10 p-4 bg-gray-900/50 border border-gray-800 rounded-lg text-left max-w-lg mx-auto backdrop-blur-sm hover:border-gray-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] animate-fadeInUp animation-delay-400 group">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-800">
                        <span className="w-3 h-3 bg-red-500 rounded-full group-hover:animate-pulse" />
                        <span className="w-3 h-3 bg-yellow-500 rounded-full group-hover:animate-pulse animation-delay-100" />
                        <span className="w-3 h-3 bg-green-500 rounded-full group-hover:animate-pulse animation-delay-200" />
                        <span className="ml-2 text-xs text-gray-500">developer.ts</span>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                        <code>
                            <span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> <span className="text-gray-500">=</span> {"{"}
                            {"\n"}  <span className="text-emerald-400">name</span>: <span className="text-yellow-300">"Dxvnee"</span>,
                            {"\n"}  <span className="text-emerald-400">skills</span>: [
                            {"\n"}    <span className="text-yellow-300">"Next.js"</span>,
                            {"\n"}    <span className="text-yellow-300">"Laravel"</span>,
                            {"\n"}    <span className="text-yellow-300">"Kotlin"</span>,
                            {"\n"}    <span className="text-yellow-300">"Swift"</span>,
                            {"\n"}    <span className="text-yellow-300">"Flutter"</span>
                            {"\n"}  ],
                            {"\n"}  <span className="text-emerald-400">passion</span>: <span className="text-yellow-300">"Building cool stuff"</span>
                            {"\n"}{"}"};
                        </code>
                    </pre>
                </div>

                <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp animation-delay-600">
                    <a
                        href="#systems"
                        className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold rounded-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:scale-105 duration-300"
                    >
                        <span className="relative z-10">View Projects</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                    <a 
                        href="#contact" 
                        className="group relative px-6 py-3 border border-gray-700 text-gray-300 rounded-lg overflow-hidden transition-all hover:scale-105 duration-300"
                    >
                        <span className="relative z-10 group-hover:text-purple-400 transition-colors">Get in Touch</span>
                        <div className="absolute inset-0 border border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg shadow-[0_0_15px_rgba(192,132,252,0.3)]" />
                    </a>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-fadeIn animation-delay-1000">
                <span className="text-xs">scroll</span>
                <div className="relative">
                    <div className="w-[1px] h-8 bg-gradient-to-b from-cyan-500 to-transparent animate-bounce" />
                    <div className="w-[1px] h-8 bg-gradient-to-b from-cyan-500 to-transparent animate-bounce animation-delay-300 absolute top-0" />
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    25% { transform: translateY(-20px) translateX(10px); }
                    50% { transform: translateY(-10px) translateX(-10px); }
                    75% { transform: translateY(-30px) translateX(5px); }
                }
                
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
                
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .animate-fadeInDown {
                    animation: fadeInDown 0.8s ease-out forwards;
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }
                
                .animate-gradientShift {
                    background-size: 200% 200%;
                    animation: gradientShift 3s ease infinite;
                }
                
                .animation-delay-100 {
                    animation-delay: 0.1s;
                }
                
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                
                .animation-delay-400 {
                    animation-delay: 0.4s;
                }
                
                .animation-delay-600 {
                    animation-delay: 0.6s;
                }
                
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </section>
    )
}
