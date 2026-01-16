"use client";

import Hero from "@/components/sections/Hero";
import { TopBar } from "@/components/sections/TopBar";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/SystemsSection";
import ExperimentsSection from "@/components/sections/ExperimentsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-mono overflow-x-hidden">
      {/* Top Navigation Bar */}
      <TopBar />

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experiments / Lab Section */}
      <ExperimentsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
