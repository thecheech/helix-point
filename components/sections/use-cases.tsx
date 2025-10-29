import { Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Video, Wrench, BookOpen, Users, Sparkles } from "lucide-react";

export function UseCasesSection() {
  const useCases = [
    {
      icon: Cloud,
      title: "SaaS Platforms",
      description: "Allow users to purchase credits for additional storage, API calls, compute time, or premium features.",
      examples: "Cloud storage, API platforms, analytics tools",
      gradient: "gradient-1",
      bgColor: "bg-purple-50",
    },
    {
      icon: Video,
      title: "Content Platforms",
      description: "Enable pay-per-view access to premium articles, videos, courses, or exclusive content.",
      examples: "Media sites, online courses, streaming platforms",
      gradient: "gradient-2",
      bgColor: "bg-pink-50",
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      description: "Monetize API access, build minutes, deployments, or usage-based features for developers.",
      examples: "CI/CD tools, hosting platforms, dev services",
      gradient: "gradient-3",
      bgColor: "bg-blue-50",
    },
    {
      icon: BookOpen,
      title: "Online Education",
      description: "Sell credits for course access, tutoring sessions, certification tests, or learning materials.",
      examples: "E-learning platforms, tutoring services, bootcamps",
      gradient: "gradient-4",
      bgColor: "bg-green-50",
    },
    {
      icon: Users,
      title: "Community Platforms",
      description: "Offer credits for profile boosts, premium badges, ad-free experience, or special features.",
      examples: "Social networks, forums, membership sites",
      gradient: "gradient-5",
      bgColor: "bg-orange-50",
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description: "Provide credits for AI generations, automation runs, processing jobs, or enhanced capabilities.",
      examples: "AI tools, automation platforms, processing services",
      gradient: "gradient-6",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <Section id="use-cases">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
            Use Cases
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for Your Use Case
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible credit system that adapts to any digital business model
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card key={index} className="flex flex-col relative overflow-hidden card-hover bg-white border-2 hover:border-gray-200 group">
              {/* Gradient Background */}
              <div className={`absolute inset-0 ${useCase.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${useCase.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="mt-4 text-xl">{useCase.title}</CardTitle>
                <CardDescription className="leading-relaxed">{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto relative z-10">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-500">Examples:</span>
                  <p className="text-xs text-muted-foreground">
                    {useCase.examples}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

