import { Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  const features = [
    "Complete API access",
    "Webhook integrations",
    "Admin dashboard",
    "Unlimited transactions",
    "Real-time analytics",
    "Email support",
    "Secure payment processing",
    "Custom credit packages",
  ];

  return (
    <Section className="bg-muted/50 relative overflow-hidden" id="pricing">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flat platform fee with no hidden costs. Scale as you grow.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-lg border-2 hover:border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
            <CardHeader className="text-center pb-8 relative">
              {/* Premium Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1 rounded-full gradient-1 text-white text-xs font-bold shadow-lg">
                  POPULAR
                </div>
              </div>
              
              <CardTitle className="text-3xl mt-4">Platform Plan</CardTitle>
              <CardDescription className="text-base mt-2">
                Everything you need to get started
              </CardDescription>
              <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                <span className="text-5xl font-bold text-gradient">Custom</span>
                <span className="text-muted-foreground ml-2 text-lg">pricing</span>
                <p className="text-sm text-muted-foreground mt-2">Based on your volume</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600 flex-shrink-0" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full shadow-lg hover:shadow-xl transition-shadow gradient-1 border-0" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Pricing based on transaction volume. Get in touch for a custom quote.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

