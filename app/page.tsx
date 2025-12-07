"use client";

import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ResumeSection from "@/components/resume-section";
import ToolsSection from "@/components/tools-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import SocialLinks from "@/components/social-links";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0A0908' }}>
      <BackToTop />
      <Header />
      <HeroSection />
      <ResumeSection />
      <ToolsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <SocialLinks />
      <Footer />
    </main>
  );
}
