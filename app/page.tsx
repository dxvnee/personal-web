'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { profileData, skills, projects, socialLinks, about } from '@/data/profileData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-50">
      <Navbar />
      <Hero name={profileData.name} title={profileData.title} bio={profileData.bio} />
      <About background={about.background} interests={about.interests} skills={skills} />
      <Projects projects={projects} />
      <Contact email={profileData.email} />
      <Footer
        year={new Date().getFullYear()}
        name={profileData.name}
        email={profileData.email}
        phone={profileData.phone}
        socialLinks={socialLinks}
      />
    </div>
  );
}