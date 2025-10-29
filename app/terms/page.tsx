import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";

export const metadata = {
  title: "Terms of Service - HelixPoint",
  description: "Terms of Service for HelixPoint digital credit platform",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section className="pt-32">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: October 29, 2025</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using HelixPoint's services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. Service Description</h2>
                <p className="text-muted-foreground">
                  HelixPoint provides a platform for businesses to offer prepaid digital credits to their users. 
                  These credits are digital tokens that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Can be used only within the issuing platform's ecosystem</li>
                  <li>Have no cash value and cannot be redeemed for money</li>
                  <li>Are non-transferable between users or platforms</li>
                  <li>Are used to access digital features, content, or services</li>
                  <li>Remain the property of the issuing platform</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">3. Platform Integration</h2>
                <p className="text-muted-foreground">
                  Businesses integrating HelixPoint ("Platform Owners") agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Clearly communicate to users what credits can be used for</li>
                  <li>Not represent credits as having cash value or being withdrawable</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Maintain accurate records of credit issuance and redemption</li>
                  <li>Provide customer support for credit-related inquiries</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">4. User Accounts</h2>
                <p className="text-muted-foreground">
                  Users purchasing credits through platforms using HelixPoint agree that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Credits are for personal use only and may not be resold</li>
                  <li>Account credentials must be kept secure and confidential</li>
                  <li>You are responsible for all activity under your account</li>
                  <li>Fraudulent purchases or abuse may result in account termination</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">5. Purchases and Payments</h2>
                <p className="text-muted-foreground">
                  All credit purchases are processed securely through Stripe. By making a purchase:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You confirm all payment information provided is accurate</li>
                  <li>You authorize the charge to your payment method</li>
                  <li>All sales are final once credits are applied to your account</li>
                  <li>Prices are subject to change at the platform's discretion</li>
                  <li>Payment disputes should be directed to the platform owner</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">6. Credit Expiration and Forfeiture</h2>
                <p className="text-muted-foreground">
                  Platform owners may set expiration policies for credits. Credits may be forfeited if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The account is inactive for an extended period (as defined by the platform)</li>
                  <li>The account is terminated for violations of platform policies</li>
                  <li>The platform ceases operations (subject to applicable law)</li>
                  <li>The expiration date set by the platform is reached</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">7. Prohibited Activities</h2>
                <p className="text-muted-foreground">
                  You may not use HelixPoint services to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Transfer, sell, or trade credits outside the platform</li>
                  <li>Represent credits as having cash value or being redeemable for money</li>
                  <li>Use credits for money transmission or currency exchange</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Circumvent security measures or access controls</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">8. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  HelixPoint and its content, features, and functionality are owned by HelixPoint and are protected 
                  by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  HelixPoint provides the platform "as is" without warranties of any kind. We are not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Loss of credits due to platform owner's actions or platform closure</li>
                  <li>Service interruptions or technical issues</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Platform owner's policies or actions regarding credits</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">10. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold HelixPoint harmless from any claims, damages, or expenses 
                  arising from your use of the service or violation of these terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">11. Modifications to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately 
                  upon posting. Continued use of the service constitutes acceptance of modified terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">12. International Use and Jurisdiction</h2>
                <p className="text-muted-foreground">
                  HelixPoint operates as a Wyoming LLC and these terms are governed by the laws of Wyoming, 
                  United States. However, platform operators and users may be subject to laws in their own 
                  jurisdictions, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Consumer protection laws in your country of residence</li>
                  <li>Data protection regulations (GDPR, CCPA, PIPEDA, etc.)</li>
                  <li>Tax obligations in your jurisdiction</li>
                  <li>Payment services regulations</li>
                  <li>E-commerce and distance selling regulations</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Platform operators are responsible for ensuring compliance with applicable laws in the 
                  jurisdictions where they operate and where their users are located.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">13. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                  <p className="font-semibold text-foreground">HelixPoint LLC</p>
                  <p className="text-muted-foreground">30 North Gould Street</p>
                  <p className="text-muted-foreground">Sheridan, WY 82801</p>
                  <p className="text-muted-foreground">United States</p>
                  <p className="text-muted-foreground mt-4">
                    Email: <a href="mailto:legal@helixpoint.co" className="text-primary hover:underline">legal@helixpoint.co</a>
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

