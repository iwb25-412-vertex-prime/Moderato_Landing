import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-[#ff9900]/20">
      <NavBar />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}
