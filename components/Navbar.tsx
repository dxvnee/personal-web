import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition">
                    Portfolio
                </Link>
                <div className="flex gap-6 text-sm items-center">
                    <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
                    <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
                    <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
                    <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
                    <Link href="/auth/login" className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 transition font-medium">
                        Login
                    </Link>
                    <Link href="/auth/register" className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition font-medium">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}
