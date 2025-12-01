"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4"
        >
          Terms of Service
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 italic mb-12"
        >
          Last Updated: December 2, 2025
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to RiseUp! These Terms of Service ("Terms") govern your use of the RiseUp mobile application ("App," "Service," or "RiseUp"). By accessing or using RiseUp, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our App.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              RiseUp is a habit-building and self-improvement application that offers a 66-day transformation program. The App includes the following features:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>66-day habit transformation program</li>
              <li>Guided meditation with AI voice</li>
              <li>Pomodoro/focus timer</li>
              <li>Workout counter</li>
              <li>Screen-usage blocker</li>
              <li>Book summaries</li>
              <li>Journaling for emotions and daily feelings</li>
              <li>Milestone tracking and progress features</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility</h2>
            <p className="text-gray-300 leading-relaxed">
              You must be at least 13 years old (or 16 in the European Union) to use RiseUp. By using the App, you represent and warrant that you meet this age requirement. If you are under 18, you confirm that you have obtained parental or guardian consent to use the App.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Account Registration</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              To use RiseUp, you must create an account using:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
              <li>Sign in with Apple, or</li>
              <li>Sign in with Google</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-2">You are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Subscriptions and Payments</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 Subscription Plans</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              RiseUp offers subscription-based premium features. Subscription details, including pricing and features, are displayed in the App before purchase.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Free Trial</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may offer a free trial period for new subscribers. If you do not cancel before the trial ends, you will be automatically charged for the subscription.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.3 Billing and Renewal</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Subscriptions are processed through Apple's In-App Purchase system and are governed by Apple's payment terms. Your subscription will automatically renew unless you cancel at least 24 hours before the end of the current period. You can manage or cancel your subscription through your Apple ID settings.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.4 Refunds</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              All purchases are final and non-refundable except as required by law or as determined by Apple's refund policy. To request a refund, contact Apple Support directly, as we cannot process refunds for purchases made through the App Store.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.5 Price Changes</h3>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to change subscription prices at any time. Price changes will not affect your current subscription period but will apply upon renewal.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">6. User Conduct</h2>
            <p className="text-gray-300 leading-relaxed mb-3">You agree NOT to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Use the App to transmit viruses, malware, or harmful code</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Impersonate any person or entity</li>
              <li>Scrape, copy, or distribute content from the App without permission</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content in RiseUp, including text, graphics, logos, meditation audio, book summaries, and software, is the property of RiseUp or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">8. User-Generated Content</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.1 Your Content</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              You retain ownership of the content you create in RiseUp (journal entries, habit data, etc.). By using the App, you grant us a limited license to store, process, and display your content solely to provide the Service to you.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.2 Content Responsibility</h3>
            <p className="text-gray-300 leading-relaxed">
              You are solely responsible for the content you create. We do not monitor user content but reserve the right to remove content that violates these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">9. Health and Wellness Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong className="text-white">IMPORTANT:</strong> RiseUp is designed for general wellness and self-improvement purposes only. It is NOT a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Always seek the advice of qualified health professionals for medical conditions</li>
              <li>Never disregard professional medical advice or delay seeking it because of something you read in the App</li>
              <li>If you think you may have a medical emergency, call your doctor or emergency services immediately</li>
              <li>The meditation, workout, and wellness features are for informational purposes only</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              By using RiseUp, you acknowledge that you use the App at your own risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              RiseUp integrates with third-party services (Supabase, Superwall, Apple, Google). Your use of these services is subject to their respective terms and privacy policies. We are not responsible for the practices or content of third-party services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-3">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>RiseUp is provided "AS IS" and "AS AVAILABLE" without warranties of any kind</li>
              <li>We do not guarantee the App will be uninterrupted, secure, or error-free</li>
              <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Our total liability to you shall not exceed the amount you paid for the subscription in the past 12 months</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">12. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify and hold harmless RiseUp and its affiliates from any claims, damages, losses, or expenses arising from your use of the App, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">13. Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Your use of RiseUp is subject to our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data practices.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">14. Termination</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">14.1 By You</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              You may terminate your account at any time by contacting us at [YOUR_EMAIL]. Termination does not entitle you to a refund.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">14.2 By Us</h3>
            <p className="text-gray-300 leading-relaxed">
              We may suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or for any other reason at our sole discretion. We will provide notice where reasonably possible.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">15. Changes to the Service</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any feature of RiseUp at any time without notice. We are not liable to you or any third party for any modification, suspension, or discontinuance of the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">16. Changes to These Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms in the App and updating the "Last Updated" date. Your continued use after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">17. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of [YOUR_JURISDICTION], without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in [YOUR_JURISDICTION].
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">18. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">18.1 Informal Resolution</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have a dispute, please contact us first at [YOUR_EMAIL] to attempt to resolve it informally.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">18.2 Arbitration</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              If we cannot resolve the dispute informally, you agree that any dispute will be resolved through binding arbitration in accordance with the rules of [ARBITRATION_BODY], rather than in court, except where prohibited by law.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">18.3 Class Action Waiver</h3>
            <p className="text-gray-300 leading-relaxed">
              You agree to resolve disputes on an individual basis and waive the right to participate in class actions or class arbitrations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">19. Severability</h2>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">20. Entire Agreement</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and RiseUp regarding the use of the App and supersede any prior agreements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">21. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              If you have questions about these Terms, please contact us:
            </p>
            <p className="text-gray-300 leading-relaxed">
              Email: [YOUR_EMAIL]<br />
              App: RiseUp<br />
              Platform: iOS
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">22. Apple-Specific Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              For users who download RiseUp from the Apple App Store, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>These Terms are between you and RiseUp, not Apple</li>
              <li>Apple has no obligation to provide maintenance or support for the App</li>
              <li>Apple is not responsible for any product liability claims, intellectual property infringement claims, or other claims related to the App</li>
              <li>Apple is a third-party beneficiary of these Terms and may enforce them</li>
            </ul>
          </section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
