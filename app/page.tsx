import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { BenefitsSection } from "@/components/sections/benefits";
import { FeaturesSection } from "@/components/sections/features";
import { UseCasesSection } from "@/components/sections/use-cases";
import { PricingSection } from "@/components/sections/pricing";
import { TrustSection } from "@/components/sections/trust";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <HowItWorksSection />
        <BenefitsSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

