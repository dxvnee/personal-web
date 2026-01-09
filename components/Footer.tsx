interface SocialLink {
    name: string;
    url: string;
}

interface FooterProps {
    year: number;
    name: string;
    email: string;
    phone: string;
    socialLinks: SocialLink[];
}

export function Footer({ year, name, email, phone, socialLinks }: FooterProps) {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="grid sm:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h4 className="font-semibold mb-4">Navigation</h4>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <p><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></p>
                            <p><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></p>
                            <p><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Social</h4>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            {socialLinks.map((link) => (
                                <p key={link.name}>
                                    <a href={link.url} className="hover:text-blue-600 dark:hover:text-blue-400">
                                        {link.name}
                                    </a>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <p><a href={`mailto:${email}`} className="hover:text-blue-600 dark:hover:text-blue-400">{email}</a></p>
                            <p><a href={`tel:${phone}`} className="hover:text-blue-600 dark:hover:text-blue-400">{phone}</a></p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <p>© {year} {name}. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy</a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms</a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
