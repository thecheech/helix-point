import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HPLogo } from "@/components/hp-logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 group">
          <HPLogo size="sm" className="transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold">HelixPoint</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#features" className="transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#use-cases" className="transition-colors hover:text-primary">
            Use Cases
          </Link>
          <Link href="#pricing" className="transition-colors hover:text-primary">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

