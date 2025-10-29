import { Section } from "@/components/section";
import { TrendingUp, Users, Zap, Globe } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "10K+",
      label: "Active Users",
      gradient: "gradient-1",
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime SLA",
      gradient: "gradient-3",
    },
    {
      icon: TrendingUp,
      value: "500K+",
      label: "Transactions Monthly",
      gradient: "gradient-4",
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries Supported",
      gradient: "gradient-5",
    },
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            {/* Gradient Icon Background */}
            <div className={`inline-flex p-3 rounded-xl ${stat.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            
            {/* Value */}
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>

            {/* Decorative Element */}
            <div className={`absolute top-0 right-0 w-24 h-24 ${stat.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}></div>
          </div>
        ))}
      </div>
    </Section>
  );
}

