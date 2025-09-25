import Image from "next/image";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/HowItWorksSection";
import UseCasesSection from "../components/UseCasesSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import FinalCTASection from "../components/FinalCTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Hero />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Use Cases Section */}
      <UseCasesSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final Call to Action */}
      <FinalCTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
