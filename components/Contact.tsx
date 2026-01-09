interface ContactProps {
    email: string;
}

export function Contact({ email }: ContactProps) {
    return (
        <section id="contact" className="border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
                    <h2 className="text-4xl font-bold mb-4">Let's Build Something Great</h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        I'm always interested in hearing about new projects and opportunities.
                        Feel free to reach out and let's create something amazing together!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`mailto:${email}`}
                            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105"
                        >
                            Send Email
                        </a>
                        <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300">
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
