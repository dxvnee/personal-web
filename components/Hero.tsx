import { stats } from '@/data/profileData';

interface HeroProps {
    name: string;
    title: string;
    bio: string;
}

export function Hero({ name, title, bio }: HeroProps) {
    return (
        <header className="min-h-[600px] flex items-center justify-center border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                {/* Avatar Circle */}
                <div className="inline-block mb-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                        <div className="w-full h-full rounded-full bg-white dark:bg-black flex items-center justify-center text-6xl">
                            💻
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {name}
                    </span>
                </h1>

                <p className="text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
                    {title}
                </p>

                <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {bio}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300 transform hover:scale-105">
                        Get In Touch
                    </button>
                    <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition">
                        View My Work
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}
