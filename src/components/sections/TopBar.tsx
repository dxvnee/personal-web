import NavItem from "../ui/NavItem";

export function TopBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-gray-800/50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#hero" className="group flex items-center gap-2">
                        <div className="relative">
                            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:from-cyan-300 group-hover:to-purple-400 transition-all">
                                &lt;Dxvnee /&gt;
                            </span>
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </a>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        <NavItem href="#skills" color="cyan">Skills</NavItem>
                        <NavItem href="#projects" color="purple">Projects</NavItem>
                        <NavItem href="#experiments" color="emerald">Lab</NavItem>
                        <NavItem href="#contact" color="cyan">Contact</NavItem>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}