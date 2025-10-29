import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";

export const metadata = {
  title: "Acceptable Use Policy - HelixPoint",
  description: "Acceptable Use Policy for HelixPoint platform",
};

export default function AcceptableUsePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section className="pt-32">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Acceptable Use Policy</h1>
              <p className="text-muted-foreground">Last updated: October 29, 2025</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Purpose</h2>
                <p className="text-muted-foreground">
                  This Acceptable Use Policy outlines permitted and prohibited uses of the HelixPoint platform. 
                  By using our services, you agree to comply with this policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. Permitted Uses</h2>
                <p className="text-muted-foreground">
                  HelixPoint may be used for legitimate business purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>SaaS platforms offering prepaid credits for software features and usage</li>
                  <li>Content platforms providing pay-per-view or subscription access</li>
                  <li>Online education and e-learning platforms</li>
                  <li>Developer tools and API services</li>
                  <li>Digital services and online tools</li>
                  <li>Community and membership platforms</li>
                  <li>AI and automation services</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">3. Prohibited Uses</h2>
                <p className="text-muted-foreground">
                  You may NOT use HelixPoint for any of the following:
                </p>

                <h3 className="text-xl font-semibold mt-4">Financial Services</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Money transmission or currency exchange services</li>
                  <li>Credits that can be withdrawn as cash or converted to fiat currency</li>
                  <li>Investment platforms or securities trading</li>
                  <li>Banking or financial institution services</li>
                  <li>Check cashing or money order services</li>
                  <li>Peer-to-peer payment services between users</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Gambling and Gaming</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Online casinos or gambling platforms</li>
                  <li>Sports betting or wagering services</li>
                  <li>Lotteries or sweepstakes with monetary prizes</li>
                  <li>Skill-based gaming with cash prizes</li>
                  <li>Any platform where credits can be &quot;cashed out&quot; for money</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Cryptocurrency and Digital Assets</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Cryptocurrency exchanges or trading platforms</li>
                  <li>ICOs, token sales, or cryptocurrency offerings</li>
                  <li>NFT marketplaces where assets can be resold</li>
                  <li>Blockchain-based currencies or tokens</li>
                  <li>Mining services or staking platforms</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Adult Content and Services</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Adult entertainment or explicit content</li>
                  <li>Dating services with adult content</li>
                  <li>Adult live streaming or cam services</li>
                  <li>Escort services or similar offerings</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Illegal Activities</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Any activity that violates local, state, or federal laws</li>
                  <li>Sale of illegal goods, drugs, or controlled substances</li>
                  <li>Weapons, ammunition, or explosives</li>
                  <li>Counterfeit goods or stolen property</li>
                  <li>Services that facilitate illegal activities</li>
                  <li>Fraudulent or deceptive practices</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">High-Risk Businesses</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Multi-level marketing or pyramid schemes</li>
                  <li>Get-rich-quick schemes or &quot;guaranteed&quot; investment returns</li>
                  <li>Unregulated financial services</li>
                  <li>Tobacco, vaping, or cannabis products</li>
                  <li>Pharmaceuticals or prescription drugs without proper licensing</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Prohibited Technical Activities</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Attempting to circumvent security measures</li>
                  <li>Reverse engineering or decompiling our software</li>
                  <li>Automated scraping or data harvesting</li>
                  <li>DDoS attacks or overwhelming our infrastructure</li>
                  <li>Introducing malware, viruses, or harmful code</li>
                  <li>Unauthorized access to accounts or systems</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">4. Credit Restrictions</h2>
                <p className="text-muted-foreground">
                  All credits issued through HelixPoint must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Be used exclusively within the issuing platform&apos;s ecosystem</li>
                  <li>Have no cash value or monetary equivalent</li>
                  <li>Be non-transferable between users or platforms</li>
                  <li>Not be redeemable for cash, gift cards, or other monetary instruments</li>
                  <li>Be clearly disclosed as prepaid tokens for digital services only</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">5. Platform Owner Responsibilities</h2>
                <p className="text-muted-foreground">
                  Platforms using HelixPoint must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Clearly communicate what credits can and cannot be used for</li>
                  <li>Not mislead users about the nature or value of credits</li>
                  <li>Maintain accurate records of all transactions</li>
                  <li>Respond promptly to user inquiries and support requests</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Report suspicious or fraudulent activity</li>
                  <li>Implement reasonable security measures</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">6. User Conduct</h2>
                <p className="text-muted-foreground">
                  Users must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use credits only for their intended purpose</li>
                  <li>Not attempt to transfer, sell, or trade credits outside the platform</li>
                  <li>Not engage in fraudulent purchases or chargebacks</li>
                  <li>Keep account credentials secure and confidential</li>
                  <li>Respect other users and platform policies</li>
                  <li>Report security vulnerabilities responsibly</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">7. Compliance Requirements</h2>
                <p className="text-muted-foreground">
                  Platform owners must ensure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Compliance with payment card industry (PCI) standards</li>
                  <li>Adherence to data protection and privacy laws</li>
                  <li>Proper terms of service and user agreements</li>
                  <li>Clear refund and cancellation policies</li>
                  <li>Appropriate age restrictions for content</li>
                  <li>Accessible customer support channels</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">8. Anti-Money Laundering and Fraud Prevention</h2>
                <p className="text-muted-foreground">
                  To maintain system integrity and prevent abuse, HelixPoint implements the following measures:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Transaction monitoring for unusual activity patterns</li>
                  <li>Velocity checks to detect rapid or suspicious credit purchases</li>
                  <li>Identity verification requirements when fraud is suspected</li>
                  <li>Reporting of suspicious activity to relevant authorities when required</li>
                  <li>Cooperation with law enforcement investigations</li>
                </ul>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Prohibited Activities:</strong> HelixPoint does not support 
                    anonymized credit reselling, credit brokering, attempts to bypass platform usage limits, or any 
                    activity that could facilitate money laundering or fraud.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">9. Monitoring and Enforcement</h2>
                <p className="text-muted-foreground">
                  HelixPoint reserves the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Monitor platform usage for compliance with this policy</li>
                  <li>Investigate suspected violations</li>
                  <li>Request additional information about your business</li>
                  <li>Require identity verification or business documentation</li>
                  <li>Temporarily suspend accounts pending investigation</li>
                  <li>Permanently terminate accounts for policy violations</li>
                  <li>Report illegal activity to law enforcement</li>
                  <li>Cooperate with legal investigations and court orders</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">10. Consequences of Violations</h2>
                <p className="text-muted-foreground">
                  Violations of this policy may result in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Immediate account suspension or termination</li>
                  <li>Forfeiture of unused credits</li>
                  <li>Withholding of pending transactions</li>
                  <li>Legal action and liability for damages</li>
                  <li>Reporting to payment processors and regulatory authorities</li>
                  <li>Permanent ban from using HelixPoint services</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">11. Reporting Violations</h2>
                <p className="text-muted-foreground">
                  If you become aware of violations of this policy, please report them immediately to:
                </p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:abuse@helixpoint.co" className="text-primary hover:underline">abuse@helixpoint.co</a>
                </p>
                <p className="text-muted-foreground mt-4">
                  Include as much detail as possible, including platform names, account information, and 
                  description of the violation.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">12. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Acceptable Use Policy at any time. Material changes will be communicated 
                  to platform owners via email. Continued use of HelixPoint services after changes constitutes 
                  acceptance of the modified policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">13. Questions and Contact</h2>
                <p className="text-muted-foreground">
                  If you have questions about what is or isn&apos;t permitted under this policy, please contact us at:
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

