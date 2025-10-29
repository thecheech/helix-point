import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Zap, Unlock, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: CreditCard,
      title: "Purchase Credits",
      description: "Users securely purchase digital credits through your platform using their preferred payment method.",
      gradient: "gradient-1",
    },
    {
      icon: Zap,
      title: "Credits Applied",
      description: "Credits are instantly added to the user's account balance and tracked in real-time.",
      gradient: "gradient-3",
    },
    {
      icon: Unlock,
      title: "Unlock Features",
      description: "Users spend credits to access premium features, content, or services within your platform.",
      gradient: "gradient-4",
    },
  ];

  return (
    <Section className="bg-muted/50 relative overflow-hidden" id="how-it-works">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and seamless credit management in three easy steps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Arrow between cards on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-20">
                  <ArrowRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
              
              <Card className="relative overflow-hidden card-hover border-2 hover:border-gray-200 bg-white">
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${step.gradient} opacity-10 blur-2xl`}></div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${step.gradient} shadow-lg`}>
                      <step.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-lg font-bold text-gray-700">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Visual Timeline */}
        <div className="flex items-center justify-center gap-2 pt-8">
          {steps.map((_, index) => (
            <div key={index} className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-purple-600"></div>
              {index < steps.length - 1 && (
                <div className="h-0.5 w-12 bg-gradient-to-r from-purple-600 to-blue-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

