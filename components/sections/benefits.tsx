import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Rocket, DollarSign, Gauge } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-level encryption and secure payment processing through Stripe. All transactions are logged and monitored.",
      gradient: "gradient-1",
      color: "text-purple-600",
    },
    {
      icon: Rocket,
      title: "Quick Integration",
      description: "Simple REST API and webhooks make integration straightforward. Get up and running in hours, not weeks.",
      gradient: "gradient-3",
      color: "text-blue-600",
    },
    {
      icon: DollarSign,
      title: "Low Overhead",
      description: "No complex licensing or compliance requirements. Straightforward pricing with no hidden fees.",
      gradient: "gradient-4",
      color: "text-green-600",
    },
    {
      icon: Gauge,
      title: "High Performance",
      description: "Built to scale with your business. Real-time balance updates and instant credit application.",
      gradient: "gradient-5",
      color: "text-orange-600",
    },
  ];

  return (
    <Section id="benefits" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Why HelixPoint
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose HelixPoint
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for modern platforms that need reliable, compliant credit management
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden card-hover bg-white border-2 hover:border-gray-200">
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${benefit.gradient}`}></div>
              
              <CardHeader>
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200`}>
                  <benefit.icon className={`h-7 w-7 ${benefit.color}`} />
                </div>
                <CardTitle className="mt-4 text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
              
              {/* Decorative element */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 ${benefit.gradient} opacity-5 rounded-full blur-2xl`}></div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

