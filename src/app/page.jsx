import Header from "@/components/app-navbar"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"

export default function HomePage() {
  return(
    <main className="min-h-screen pt-16">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}