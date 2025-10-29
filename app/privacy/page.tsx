import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";

export const metadata = {
  title: "Privacy Policy - HelixPoint",
  description: "Privacy Policy for HelixPoint digital credit platform",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section className="pt-32">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: October 29, 2025</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Introduction</h2>
                <p className="text-muted-foreground">
                  HelixPoint ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our digital 
                  credit management platform.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mt-4">Personal Information</h3>
                <p className="text-muted-foreground">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name and email address</li>
                  <li>Account credentials</li>
                  <li>Business information (for platform owners)</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Transaction Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Credit purchase history and amounts</li>
                  <li>Credit redemption records</li>
                  <li>Account balance information</li>
                  <li>Transaction timestamps and details</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Payment Information</h3>
                <p className="text-muted-foreground">
                  Payment information is processed securely through Stripe. We do not store your full credit card 
                  details on our servers. We may retain:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Last four digits of payment methods</li>
                  <li>Payment method type (Visa, Mastercard, etc.)</li>
                  <li>Payment status and transaction IDs</li>
                  <li>Billing address information</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Technical Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Process credit purchases and track balances</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send transaction confirmations and account updates</li>
                  <li>Detect and prevent fraud or unauthorized activity</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Send promotional communications (with your consent)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground">
                  We may share your information with:
                </p>
                
                <h3 className="text-xl font-semibold mt-4">Service Providers</h3>
                <p className="text-muted-foreground">
                  We work with third-party service providers who perform services on our behalf:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Stripe for payment processing</li>
                  <li>Cloud hosting providers for data storage</li>
                  <li>Analytics providers to improve our services</li>
                  <li>Email service providers for communications</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Platform Owners</h3>
                <p className="text-muted-foreground">
                  We share necessary information with the platforms you purchase credits from, including 
                  transaction history and credit balances.
                </p>

                <h3 className="text-xl font-semibold mt-4">Legal Requirements</h3>
                <p className="text-muted-foreground">
                  We may disclose information if required by law, legal process, or to protect the rights, 
                  property, or safety of HelixPoint, our users, or others.
                </p>

                <h3 className="text-xl font-semibold mt-4">Business Transfers</h3>
                <p className="text-muted-foreground">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                  to the acquiring entity.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Secure HTTPS connections for all communications</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication requirements</li>
                  <li>SOC 2 Type II compliant infrastructure</li>
                  <li>PCI-DSS compliance for payment processing</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">6. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your information for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide our services and maintain your account</li>
                  <li>Comply with legal obligations (typically 7 years for financial records)</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Improve our services through analytics</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">7. Your Rights and Choices</h2>
                <p className="text-muted-foreground">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your information (subject to legal retention requirements)</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                  <li><strong>Object:</strong> Object to certain processing of your information</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, contact us at <a href="mailto:privacy@helixpoint.co" className="text-primary hover:underline">privacy@helixpoint.co</a>
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">8. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Maintain your session and preferences</li>
                  <li>Analyze usage patterns and improve our services</li>
                  <li>Provide personalized experiences</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can control cookies through your browser settings, but some features may not function properly 
                  if cookies are disabled.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">9. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your information in accordance with 
                  this Privacy Policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">10. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect 
                  personal information from children. If you believe we have collected information from a child, 
                  please contact us immediately.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">11. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of material changes by 
                  posting the new policy on this page and updating the "Last updated" date. We encourage you to 
                  review this policy periodically.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">12. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                  <p className="font-semibold text-foreground">HelixPoint LLC</p>
                  <p className="text-muted-foreground">30 North Gould Street</p>
                  <p className="text-muted-foreground">Sheridan, WY 82801</p>
                  <p className="text-muted-foreground">United States</p>
                  <p className="text-muted-foreground mt-4">
                    Email: <a href="mailto:privacy@helixpoint.co" className="text-primary hover:underline">privacy@helixpoint.co</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

