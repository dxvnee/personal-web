interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    year: string;
    emoji: string;
}

function ProjectCard({ title, description, tags, year, emoji }: ProjectCardProps) {
    return (
        <div className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{emoji}</div>
                <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-semibold">
                    {year}
                </span>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                    View Project →
                </button>
                <button className="flex-1 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    View Code →
                </button>
            </div>
        </div>
    );
}

interface ProjectsProps {
    projects: Array<{
        title: string;
        description: string;
        tags: string[];
        year: string;
        emoji: string;
    }>;
}

export function Projects({ projects }: ProjectsProps) {
    return (
        <section id="projects" className="border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

                <div className="grid sm:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
