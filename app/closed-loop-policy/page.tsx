import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";

export const metadata = {
  title: "Closed-Loop Credit Policy - HelixPoint",
  description: "Understanding HelixPoint's closed-loop digital credit system",
};

export default function ClosedLoopPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section className="pt-32">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Closed-Loop Credit Policy</h1>
              <p className="text-muted-foreground">Last updated: October 29, 2025</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="text-muted-foreground">
                  HelixPoint provides technology infrastructure for closed-loop digital credits that are redeemable 
                  only within the issuing platform and have no cash value, no withdrawal functionality, and cannot 
                  be transferred between users.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">What Are Closed-Loop Credits?</h2>
                <p className="text-muted-foreground">
                  Closed-loop credits are digital tokens that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Can only be used within the platform that issued them</li>
                  <li>Cannot be withdrawn, cashed out, or converted to money</li>
                  <li>Cannot be transferred to other users or platforms</li>
                  <li>Have no cash value outside the issuing platform</li>
                  <li>Are used to access digital features, content, or services</li>
                  <li>Remain the property of the issuing platform</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Regulatory Classification</h2>
                <p className="text-muted-foreground">
                  Because credits cannot exit the ecosystem or be converted into money, this system is generally 
                  treated as closed-loop stored value and is typically not considered money transmission under most 
                  regulatory frameworks. However, regulatory interpretations vary by jurisdiction.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Important:</strong> Platform operators are solely responsible 
                    for determining their own compliance obligations based on their jurisdiction, business model, and 
                    specific use case. HelixPoint does not provide legal or regulatory advice.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">What HelixPoint Does</h2>
                <p className="text-muted-foreground">
                  HelixPoint is a B2B SaaS infrastructure provider that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provides APIs and tools for managing digital credits</li>
                  <li>Processes payments through regulated payment processors (Stripe)</li>
                  <li>Tracks credit balances and transaction histories</li>
                  <li>Offers fraud monitoring and security features</li>
                  <li>Maintains transaction logs for compliance support</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">What HelixPoint Does NOT Do</h2>
                <p className="text-muted-foreground">
                  HelixPoint explicitly does not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Issue currency or stored value instruments</li>
                  <li>Store or hold customer funds</li>
                  <li>Facilitate peer-to-peer transfers between users</li>
                  <li>Enable withdrawals or cash-outs</li>
                  <li>Act as a money transmitter or payment processor</li>
                  <li>Provide banking or financial institution services</li>
                  <li>Offer investment or securities products</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Platform Operator Responsibilities</h2>
                <p className="text-muted-foreground">
                  Each platform using HelixPoint is responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Evaluating compliance requirements in their jurisdiction</li>
                  <li>Determining applicable consumer protection regulations</li>
                  <li>Complying with tax reporting and collection obligations</li>
                  <li>Managing escheatment (unclaimed property) requirements if applicable</li>
                  <li>Providing clear terms to their users about credit usage</li>
                  <li>Handling customer disputes and refund requests</li>
                  <li>Maintaining appropriate business licenses</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Compliance Support</h2>
                <p className="text-muted-foreground">
                  While HelixPoint does not provide legal advice, we support platform compliance efforts by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Providing detailed transaction logs and audit trails</li>
                  <li>Offering fraud monitoring and anomaly detection tools</li>
                  <li>Integrating with regulated payment processors</li>
                  <li>Maintaining secure, encrypted data storage</li>
                  <li>Supporting identity verification when required</li>
                  <li>Documenting the closed-loop nature of the system</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Prohibited Uses</h2>
                <p className="text-muted-foreground">
                  To maintain the closed-loop nature of the system, platforms may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Allow credit transfers between users</li>
                  <li>Enable credit withdrawals or cash-outs</li>
                  <li>Facilitate credit trading or secondary markets</li>
                  <li>Accept credits as payment from other platforms</li>
                  <li>Represent credits as having monetary value</li>
                  <li>Use credits for gambling or games of chance</li>
                  <li>Enable anonymous or pseudonymous credit reselling</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Technical Safeguards</h2>
                <p className="text-muted-foreground">
                  HelixPoint enforces the closed-loop model through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Platform-specific credit issuance (credits tagged to issuing platform)</li>
                  <li>No inter-platform transfer capabilities in the API</li>
                  <li>No withdrawal or payout endpoints</li>
                  <li>Mandatory platform authentication for all transactions</li>
                  <li>Audit logs tracking all credit movements</li>
                  <li>Fraud detection for unusual patterns</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Regulatory Considerations by Jurisdiction</h2>
                
                <h3 className="text-xl font-semibold mt-4">United States</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Money Transmission:</strong> Closed-loop systems are typically exempt from state money transmission licensing and FinCEN MSB registration</li>
                  <li><strong>Consumer Protection:</strong> CFPB Regulation E may apply depending on credit characteristics</li>
                  <li><strong>Escheatment:</strong> Some states require unredeemed credits to be reported as unclaimed property</li>
                  <li><strong>Sales Tax:</strong> Tax treatment varies by state; consult local tax authorities</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">European Union & United Kingdom</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>E-Money Regulations:</strong> Closed-loop systems are generally exempt from e-money licensing under PSD2</li>
                  <li><strong>GDPR/UK GDPR:</strong> Platforms must comply with data protection regulations</li>
                  <li><strong>VAT:</strong> Digital services may be subject to VAT; platforms should register for VAT MOSS if required</li>
                  <li><strong>Consumer Rights Directive:</strong> 14-day cooling-off period may apply to certain digital purchases</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Canada</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>FINTRAC:</strong> Closed-loop systems are typically not considered money services businesses</li>
                  <li><strong>PIPEDA:</strong> Federal privacy law applies to commercial activities</li>
                  <li><strong>GST/HST:</strong> Tax obligations vary by province</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Australia & New Zealand</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Payment Systems:</strong> Closed-loop systems generally exempt from payment facility regulations</li>
                  <li><strong>Consumer Law:</strong> Australian Consumer Law and Consumer Guarantees Act apply</li>
                  <li><strong>GST:</strong> Digital services may be subject to goods and services tax</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Asia-Pacific</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Singapore:</strong> Closed-loop systems may be exempt from payment services licensing</li>
                  <li><strong>Japan:</strong> Prepaid payment instrument regulations may apply</li>
                  <li><strong>Hong Kong:</strong> Stored value facilities regulations should be reviewed</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Other Jurisdictions</h3>
                <p className="text-muted-foreground">
                  Platform operators in other jurisdictions should consult with local legal counsel regarding:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Payment services and money transmission regulations</li>
                  <li>Consumer protection laws</li>
                  <li>Data privacy and protection requirements</li>
                  <li>Tax obligations (VAT, GST, sales tax)</li>
                  <li>Cross-border transaction rules</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this policy as regulations evolve. Material changes will be communicated to 
                  platform operators via email at least 30 days before taking effect.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Questions</h2>
                <p className="text-muted-foreground">
                  For questions about HelixPoint&apos;s closed-loop system, contact us at:
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
                <p className="text-muted-foreground mt-4">
                  For legal advice regarding your specific compliance obligations, consult with qualified legal counsel 
                  in your jurisdiction.
                </p>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

