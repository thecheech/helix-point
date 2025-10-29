import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-lg font-bold">H</span>
              </div>
              <span className="text-lg font-bold">HelixPoint</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Seamless digital credit management for modern platforms.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p className="font-semibold">HelixPoint LLC</p>
              <p>30 North Gould Street</p>
              <p>Sheridan, WY 82801</p>
              <p>United States</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" className="text-muted-foreground hover:text-foreground transition-colors">
                  Acceptable Use
                </Link>
              </li>
              <li>
                <Link href="/closed-loop-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Closed-Loop Policy
                </Link>
              </li>
              <li>
                <Link href="/international-compliance" className="text-muted-foreground hover:text-foreground transition-colors">
                  International Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@helixpoint.co" className="text-muted-foreground hover:text-foreground transition-colors">
                  hello@helixpoint.co
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 space-y-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-muted-foreground leading-relaxed">
              HelixPoint provides infrastructure for closed-loop digital credits. Each business is responsible for 
              evaluating its own compliance requirements based on its jurisdiction and use case. Credits are 
              redeemable only within the issuing platform, have no cash value, cannot be withdrawn, and cannot be 
              transferred between users.
            </p>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} HelixPoint. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

