import NavItem from "./NavItem";

export function TopBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-gray-800/50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#hero" className="group flex items-center gap-2">
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:from-cyan-300 group-hover:to-purple-400 transition-all">
                            Dxvnee.
                        </span>
                    </a>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-1">
                        <NavItem href="#systems" color="cyan">Systems</NavItem>
                        <NavItem href="#experiments" color="purple">Experiments</NavItem>
                        <NavItem href="#contact" color="emerald">Contact</NavItem>
                    </div>

                    {/* Terminal-style status */}
                    <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                        <span>online</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}