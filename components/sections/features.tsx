import { Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, TrendingUp, Webhook, LayoutDashboard, Bell, Lock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Database,
      title: "Credit Ledger",
      description: "Complete transaction history with detailed audit logs for every credit purchase and redemption.",
      gradient: "gradient-1",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Balance",
      description: "Instant balance updates across all devices. Users always see their current credit status.",
      gradient: "gradient-3",
    },
    {
      icon: Webhook,
      title: "API & Webhooks",
      description: "RESTful API with comprehensive webhooks for purchases, redemptions, and balance changes.",
      gradient: "gradient-4",
    },
    {
      icon: LayoutDashboard,
      title: "Admin Dashboard",
      description: "Powerful dashboard to monitor transactions, view analytics, and manage user accounts.",
      gradient: "gradient-5",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Automatic email notifications for purchases, low balance alerts, and promotional credits.",
      gradient: "gradient-2",
    },
    {
      icon: Lock,
      title: "Secure & Compliant",
      description: "PCI-compliant payment processing. Credits are non-transferable with no cash value.",
      gradient: "gradient-6",
    },
  ];

  return (
    <Section className="bg-muted/50 relative overflow-hidden" id="features">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            Full Feature Set
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage digital credits at scale
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden card-hover bg-white border-2 hover:border-gray-200 group">
              {/* Icon with Gradient */}
              <CardHeader>
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
              </CardContent>

              {/* Hover Effect */}
              <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

