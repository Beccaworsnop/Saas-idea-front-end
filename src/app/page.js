import { Header } from './components/layout/Header'
import { Footer } from './components/layout/footer'
import { HeroSection } from './components/layout/sections/HeroSection'
import { AboutSection } from './components/layout/sections/AboutSection'
import { ServicesSection } from './components/layout/sections/ServicesSection'
import { ContactSection } from './components/layout/sections/ContactSection'

export default function DataWaveInsights() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}