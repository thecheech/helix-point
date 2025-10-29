import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <Section id="get-started">
      <div className="relative rounded-3xl gradient-1 text-white p-12 md:p-16 overflow-hidden shadow-2xl">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-8 right-16 opacity-20">
          <Sparkles className="h-8 w-8 animate-pulse" />
        </div>
        <div className="absolute bottom-12 left-12 opacity-20">
          <Sparkles className="h-6 w-6 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90">
              Join forward-thinking platforms using HelixPoint to power their digital credit systems.
              Integration takes minutes, not days.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center" id="contact">
            <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl" asChild>
              <a href="mailto:hello@helixpoint.co">
                <Mail className="mr-2 h-4 w-4" />
                Contact Sales
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-lg" asChild>
              <Link href="#features">
                View Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 opacity-75">
            <div className="text-sm">
              ⚡ Instant Integration
            </div>
            <div className="text-sm">
              🔒 Bank-Level Security
            </div>
            <div className="text-sm">
              📈 99.9% Uptime
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

