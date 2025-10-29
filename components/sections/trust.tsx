import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, FileText } from "lucide-react";

export function TrustSection() {
  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description: "All payments processed through Stripe with PCI-DSS compliance. Your customers' payment data is never stored on our servers.",
      gradient: "gradient-1",
    },
    {
      icon: Lock,
      title: "Encrypted Storage",
      description: "End-to-end encryption for all sensitive data. SOC 2 Type II compliant infrastructure with regular security audits.",
      gradient: "gradient-3",
    },
    {
      icon: FileText,
      title: "Activity Logging",
      description: "Complete audit trail for every transaction. Real-time monitoring and anomaly detection to prevent fraud.",
      gradient: "gradient-4",
    },
  ];

  return (
    <Section id="trust">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            Security & Compliance
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built on Trust & Security
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security and compliance from day one
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="card-hover bg-white border-2 hover:border-gray-200 relative overflow-hidden group">
              <CardHeader>
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
              
              {/* Decorative Gradient */}
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 ${feature.gradient} opacity-5 rounded-full blur-2xl`}></div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border-2 border-blue-100 shadow-sm">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground text-base">Important:</strong> Credits sold through HelixPoint are prepaid digital tokens for accessing features within your platform. 
            They have no cash value, cannot be withdrawn, transferred, or exchanged. Credits remain within your platform ecosystem and are non-refundable once redeemed.
          </p>
        </div>
      </div>
    </Section>
  );
}

