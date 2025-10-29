import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";

export const metadata = {
  title: "International Compliance - HelixPoint",
  description: "International compliance considerations for HelixPoint platform operators",
};

export default function InternationalCompliancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section className="pt-32">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">International Compliance Guide</h1>
              <p className="text-muted-foreground">Last updated: October 29, 2025</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="text-muted-foreground">
                  This guide provides general information about compliance considerations for platform operators 
                  using HelixPoint in different jurisdictions. This is not legal advice, and operators should 
                  consult with qualified legal counsel in each jurisdiction where they operate.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Data Protection and Privacy</h2>
                
                <h3 className="text-xl font-semibold mt-4">GDPR (European Union)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Platforms must have a lawful basis for processing personal data</li>
                  <li>Users have rights to access, rectification, erasure, and data portability</li>
                  <li>Data Protection Impact Assessments may be required</li>
                  <li>Cross-border transfers require appropriate safeguards</li>
                  <li>Breach notification within 72 hours</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">UK GDPR (United Kingdom)</h3>
                <p className="text-muted-foreground">
                  Similar to EU GDPR with some UK-specific variations. Register with ICO if processing UK data.
                </p>

                <h3 className="text-xl font-semibold mt-4">CCPA/CPRA (California, USA)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Applies to businesses meeting revenue/data thresholds</li>
                  <li>Consumers have right to know, delete, and opt-out of data sales</li>
                  <li>Privacy policy must include specific disclosures</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">PIPEDA (Canada)</h3>
                <p className="text-muted-foreground">
                  Federal privacy law requires consent, transparency, and data security measures.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Tax Obligations</h2>
                
                <h3 className="text-xl font-semibold mt-4">Value Added Tax (VAT)</h3>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">EU & UK:</strong> Digital services supplied to consumers 
                    are subject to VAT at the customer's location. Use VAT MOSS (EU) or VAT OSS for simplified 
                    reporting across multiple countries.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-4">Goods and Services Tax (GST)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Australia:</strong> 10% GST on digital services to Australian consumers (register if over AUD 75,000)</li>
                  <li><strong>New Zealand:</strong> 15% GST on digital services (register if over NZD 60,000)</li>
                  <li><strong>Canada:</strong> GST/HST varies by province; register if required</li>
                  <li><strong>Singapore:</strong> 9% GST on digital services (register if over SGD 100,000)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Sales Tax (USA)</h3>
                <p className="text-muted-foreground">
                  Economic nexus rules vary by state. Digital goods and services may be taxable. Consider using 
                  tax automation services for multi-state compliance.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Consumer Protection</h2>
                
                <h3 className="text-xl font-semibold mt-4">EU Consumer Rights Directive</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>14-day cooling-off period for distance contracts</li>
                  <li>Can be waived if customer consents and digital content is supplied immediately</li>
                  <li>Clear pre-contractual information required</li>
                  <li>Right to withdraw does not apply to fully performed services</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">UK Consumer Rights Act 2015</h3>
                <p className="text-muted-foreground">
                  Similar to EU rules with additional protections for digital content quality and fitness for purpose.
                </p>

                <h3 className="text-xl font-semibold mt-4">Australian Consumer Law</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Consumer guarantees apply to services</li>
                  <li>Refund rights if service not fit for purpose</li>
                  <li>Unfair contract terms provisions</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Payment Regulations</h2>
                
                <h3 className="text-xl font-semibold mt-4">EU/UK: E-Money and Payment Services</h3>
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Good News:</strong> Closed-loop systems where credits 
                    cannot be redeemed for cash are generally exempt from e-money licensing under PSD2 and UK 
                    Payment Services Regulations.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-4">Strong Customer Authentication (SCA)</h3>
                <p className="text-muted-foreground">
                  EU/UK may require SCA for online payments over €30/£30. Stripe handles this automatically.
                </p>

                <h3 className="text-xl font-semibold mt-4">Japan: Prepaid Payment Instruments</h3>
                <p className="text-muted-foreground">
                  If issuing more than ¥10 million in prepaid value, registration with Financial Services Agency 
                  may be required. Closed-loop systems have lighter requirements.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Currency and Pricing</h2>
                <p className="text-muted-foreground">
                  When operating internationally:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Display prices in local currency when possible</li>
                  <li>Clearly disclose any currency conversion fees</li>
                  <li>Use Stripe's multi-currency features for better customer experience</li>
                  <li>Be transparent about payment processor fees</li>
                  <li>Ensure VAT/GST is included in displayed prices where required by law</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Language Requirements</h2>
                <p className="text-muted-foreground">
                  Some jurisdictions require terms and policies in local languages:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Quebec, Canada:</strong> French language option required (Bill 96)</li>
                  <li><strong>France:</strong> Consumer-facing content must be in French</li>
                  <li><strong>Germany:</strong> German language option recommended</li>
                  <li><strong>Japan:</strong> Specified Commercial Transactions Act requires Japanese</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Accessibility Requirements</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>EU:</strong> European Accessibility Act applies from June 2025</li>
                  <li><strong>USA:</strong> ADA compliance recommended; WCAG 2.1 AA standard</li>
                  <li><strong>UK:</strong> Public Sector Bodies Accessibility Regulations 2018</li>
                  <li><strong>Canada:</strong> Accessible Canada Act (ACA) requirements</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Age Restrictions</h2>
                <p className="text-muted-foreground">
                  Minimum age for online purchases varies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>EU GDPR:</strong> Age of digital consent is 13-16 depending on member state</li>
                  <li><strong>USA COPPA:</strong> Under 13 requires parental consent</li>
                  <li><strong>UK:</strong> Age of digital consent is 13</li>
                  <li><strong>General:</strong> Platform operators should set age policies based on content type</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Dispute Resolution</h2>
                
                <h3 className="text-xl font-semibold mt-4">EU Online Dispute Resolution</h3>
                <p className="text-muted-foreground">
                  EU traders must provide link to ODR platform: 
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>

                <h3 className="text-xl font-semibold mt-4">Alternative Dispute Resolution</h3>
                <p className="text-muted-foreground">
                  Consider joining industry-specific ADR schemes in jurisdictions where you operate.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Compliance Checklist for Platform Operators</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">□</span>
                      <span>Determine all jurisdictions where you have users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">□</span>
                      <span>Consult with legal counsel in each major market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">□</span>
                      <span>Register for VAT/GST/sales tax where required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">□</span>
                      <span>Update privacy policy to comply with GDPR/CCPA/local laws</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">□</span>
                      <span>Implement cookie consent for EU/UK visitors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">□</span>
                      <span>Add cooling-off period disclosures for EU consumers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">□</span>
                      <span>Display prices with tax included where required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">□</span>
                      <span>Provide terms in local languages where required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">□</span>
                      <span>Set up customer support in relevant time zones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">□</span>
                      <span>Monitor regulatory changes in your markets</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Resources and Support</h2>
                <p className="text-muted-foreground">
                  HelixPoint provides technical infrastructure but does not provide legal advice. For jurisdiction-specific 
                  guidance, we recommend:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Consulting with international law firms specializing in fintech</li>
                  <li>Joining industry associations (e.g., EMA, PASA, CPA)</li>
                  <li>Using compliance automation tools (Stripe Tax, Avalara, etc.)</li>
                  <li>Subscribing to regulatory update services</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p className="text-muted-foreground">
                  For technical questions about international implementation:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                  <p className="font-semibold text-foreground">HelixPoint LLC</p>
                  <p className="text-muted-foreground">30 North Gould Street</p>
                  <p className="text-muted-foreground">Sheridan, WY 82801</p>
                  <p className="text-muted-foreground">United States</p>
                  <p className="text-muted-foreground mt-4">
                    Email: <a href="mailto:compliance@helixpoint.co" className="text-primary hover:underline">compliance@helixpoint.co</a>
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

