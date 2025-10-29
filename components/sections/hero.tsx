import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { HPLogo } from "@/components/hp-logo";

export function HeroSection() {
  return (
    <Section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-mesh opacity-60"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-8">
        {/* Logo */}
        <div className="animate-fade-in">
          <HPLogo size="xl" className="mx-auto" />
        </div>
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
          <Sparkles className="h-4 w-4 text-purple-600" />
          <span className="text-sm font-medium">Trusted by modern platforms</span>
        </div>

        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Seamless Digital Credit
            <br />
            <span className="text-gradient">Management</span>
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
            Power your platform with instant, secure credit purchases. Simple integration, powerful features.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" asChild>
            <Link href="#get-started">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border">
            <Zap className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">Instant Integration</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">Bank-Level Security</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">Closed-Loop System</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground max-w-2xl pt-4">
          HelixPoint provides a secure system for platforms to offer prepaid digital credits to their users. 
          Businesses integrate HelixPoint to let customers easily purchase and redeem credits for online features, 
          premium access, or subscription upgrades.
        </p>
      </div>
    </Section>
  );
}

