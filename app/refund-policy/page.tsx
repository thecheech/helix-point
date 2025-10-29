import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";

export const metadata = {
  title: "Refund Policy - HelixPoint",
  description: "Refund Policy for HelixPoint digital credit purchases",
};

export default function RefundPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section className="pt-32">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Refund Policy</h1>
              <p className="text-muted-foreground">Last updated: October 29, 2025</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. General Policy</h2>
                <p className="text-muted-foreground">
                  Credits purchased through HelixPoint are prepaid digital tokens intended for immediate use within 
                  the platform ecosystem. Due to the digital nature of these credits, all sales are generally final 
                  once credits are successfully applied to your account.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. Eligibility for Refunds</h2>
                <p className="text-muted-foreground">
                  Refunds may be considered in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold mt-4">Technical Errors</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Payment was processed but credits were not delivered to your account</li>
                  <li>You were charged multiple times for a single purchase due to a system error</li>
                  <li>Incorrect credit amount was delivered due to a technical malfunction</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Unauthorized Transactions</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fraudulent charges made without your authorization</li>
                  <li>Account compromised resulting in unauthorized purchases</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Platform Owner Discretion</h3>
                <p className="text-muted-foreground">
                  Individual platform owners may have their own refund policies that are more permissive than 
                  this general policy. Check with the specific platform for their refund terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">3. Non-Refundable Circumstances</h2>
                <p className="text-muted-foreground">
                  Refunds will NOT be provided in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Credits have been partially or fully redeemed for features or content</li>
                  <li>Change of mind after successful credit delivery</li>
                  <li>Dissatisfaction with the platform's features or services (address with platform owner)</li>
                  <li>Account suspension or termination due to Terms of Service violations</li>
                  <li>Expired credits (subject to platform's expiration policy)</li>
                  <li>Credits purchased using promotional offers or discounts</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">4. Refund Request Process</h2>
                <p className="text-muted-foreground">
                  To request a refund, follow these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Contact the platform owner first if the issue relates to platform-specific services</li>
                  <li>If unresolved, email us at <a href="mailto:refunds@helixpoint.co" className="text-primary hover:underline">refunds@helixpoint.co</a> within 7 days of the transaction</li>
                  <li>Include the following information:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Transaction ID or receipt</li>
                      <li>Account email address</li>
                      <li>Platform name</li>
                      <li>Detailed description of the issue</li>
                      <li>Amount of credits purchased</li>
                      <li>Date and time of purchase</li>
                    </ul>
                  </li>
                  <li>Allow 5-7 business days for review and response</li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">5. Refund Processing</h2>
                <p className="text-muted-foreground">
                  If your refund request is approved:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Refunds will be processed to the original payment method</li>
                  <li>Processing time is typically 5-10 business days</li>
                  <li>Credits will be deducted from your account balance</li>
                  <li>If credits were already spent, refund may be denied or adjusted accordingly</li>
                  <li>You will receive email confirmation once the refund is processed</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">6. Partial Refunds</h2>
                <p className="text-muted-foreground">
                  In some cases, partial refunds may be issued:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>If only a portion of purchased credits were not delivered</li>
                  <li>When credits have been partially redeemed but a technical error occurred</li>
                  <li>At the discretion of HelixPoint or the platform owner</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">7. Platform Closure or Service Discontinuation</h2>
                <p className="text-muted-foreground">
                  If a platform using HelixPoint discontinues service:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Refund policies are determined by the individual platform owner</li>
                  <li>HelixPoint is not responsible for refunds related to platform closure</li>
                  <li>We recommend purchasing only the credits you plan to use in the near term</li>
                  <li>Check the platform's terms regarding service discontinuation</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">8. Unauthorized Transactions and Error Resolution</h2>
                <p className="text-muted-foreground">
                  If you believe that credits were purchased or used without your authorization, or if you identify 
                  any errors in your transaction history:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Contact the platform operator immediately to report the issue</li>
                  <li>Provide details including transaction date, amount, and description of the error</li>
                  <li>The platform will investigate and respond within a reasonable timeframe</li>
                  <li>HelixPoint supports platforms with transaction logs to help resolve disputes</li>
                  <li>We do not hold or reverse funds ourselves; resolution is handled by the platform and payment processor</li>
                </ul>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Error Resolution:</strong> For suspected unauthorized transactions, 
                    platforms should investigate within 10 business days and provide provisional credit if the investigation 
                    cannot be completed within that timeframe. Final resolution should be provided within 45 days.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">9. Chargebacks and Disputes</h2>
                <p className="text-muted-foreground">
                  If you initiate a chargeback with your bank or credit card company:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Please contact us first to resolve the issue directly</li>
                  <li>Chargebacks may result in immediate account suspension</li>
                  <li>We will provide documentation to your payment provider during dispute resolution</li>
                  <li>Fraudulent chargebacks may result in permanent account termination</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">10. Important Reminders</h2>
                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <p className="text-muted-foreground font-semibold">
                    Please note:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Credits have no cash value and cannot be redeemed for money</li>
                    <li>Credits are non-transferable between accounts or platforms</li>
                    <li>Once credits are spent on features or content, they cannot be refunded</li>
                    <li>Promotional or bonus credits are non-refundable under all circumstances</li>
                    <li>Check the platform's individual policies before making large purchases</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">11. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify this Refund Policy at any time. Changes will be effective 
                  immediately upon posting on this page. Continued use of our services after changes constitutes 
                  acceptance of the modified policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">12. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about this Refund Policy or to submit a refund request:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                  <p className="font-semibold text-foreground">HelixPoint LLC</p>
                  <p className="text-muted-foreground">30 North Gould Street</p>
                  <p className="text-muted-foreground">Sheridan, WY 82801</p>
                  <p className="text-muted-foreground">United States</p>
                  <p className="text-muted-foreground mt-4">
                    Email: <a href="mailto:refunds@helixpoint.co" className="text-primary hover:underline">refunds@helixpoint.co</a>
                    <br />
                    Support: <a href="mailto:support@helixpoint.co" className="text-primary hover:underline">support@helixpoint.co</a>
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

