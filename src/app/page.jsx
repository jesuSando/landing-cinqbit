import Header from "@/components/app-navbar"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/app-footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}