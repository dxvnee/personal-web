interface SkillBarProps {
    name: string;
    level: string;
}

function SkillBar({ name, level }: SkillBarProps) {
    const widthMap = {
        'Expert': '100%',
        'Advanced': '85%',
        'Intermediate': '70%'
    };

    return (
        <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition duration-300 cursor-pointer group">
            <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{level}</div>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    style={{ width: widthMap[level as keyof typeof widthMap] || '70%' }}
                ></div>
            </div>
        </div>
    );
}

interface AboutProps {
    background: string;
    interests: string;
    skills: Array<{ name: string; level: string }>;
}

export function About({ background, interests, skills }: AboutProps) {
    return (
        <section id="about" className="border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold mb-12">About Me</h2>

                <div className="grid sm:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Background</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            {background.split('\n')[0]}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {background.split('\n')[1]}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Interests</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            {interests.split('\n')[0]}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {interests.split('\n')[1]}
                        </p>
                    </div>
                </div>

                {/* Skills Grid */}
                <div>
                    <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
