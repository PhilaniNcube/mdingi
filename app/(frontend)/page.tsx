import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
 
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CTASection />
      </main>

    </div>
  )
}
