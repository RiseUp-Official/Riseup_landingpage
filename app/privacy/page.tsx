"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4"
        >
          Privacy Policy
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to RiseUp ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using RiseUp, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our App.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Personal Information You Provide</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              When you register for RiseUp, we collect the following information:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Account Information:</strong> Name and email address (via Google or Apple Sign-In)</li>
              <li><strong className="text-white">Contact Information:</strong> Email address for communications and support</li>
              <li><strong className="text-white">Payment Information:</strong> Payment credentials when you subscribe to premium features (processed securely through Apple's In-App Purchase system)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Information You Create in the App</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              As you use RiseUp's features, you may provide:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Journal Entries:</strong> Daily reflections, emotions, and feelings you track</li>
              <li><strong className="text-white">Habit Data:</strong> Your progress through the 66-day transformation program</li>
              <li><strong className="text-white">Activity Data:</strong> Meditation sessions, focus timer usage, workout counts, and milestone achievements</li>
              <li><strong className="text-white">Preferences:</strong> Your app settings and customization choices</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Automatically Collected Information</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              When you use our App, we automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Device Information:</strong> Device type, operating system, unique device identifiers</li>
              <li><strong className="text-white">Usage Data:</strong> Features used, time spent in app, crash reports</li>
              <li><strong className="text-white">App Performance Data:</strong> Technical diagnostics to improve app functionality</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide and maintain the RiseUp app and its features</li>
              <li>Process your subscription and manage your account</li>
              <li>Deliver personalized meditation, journaling, and habit-tracking experiences</li>
              <li>Send you notifications about your progress and milestones</li>
              <li>Respond to your questions and provide customer support</li>
              <li>Improve our app features and user experience</li>
              <li>Detect and prevent technical issues or fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the following third-party services that may collect information:
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Supabase</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use Supabase for secure cloud storage and database services. Your account information and app data are stored on Supabase's servers. Supabase's privacy practices are governed by their Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Superwall</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use Superwall for subscription management and paywall functionality. Superwall may collect information about your subscription status and in-app purchase behavior to optimize our offerings.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 Apple Sign-In / Google Sign-In</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you sign up using Apple or Google, we receive limited information from these services as per their authentication protocols. Please review Apple's and Google's privacy policies for more information.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.4 Apple In-App Purchases</h3>
            <p className="text-gray-300 leading-relaxed">
              All subscription payments are processed through Apple's secure payment system. We do not store your credit card or payment information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide you services. If you wish to delete your account, please contact us at [YOUR_EMAIL], and we will delete your data within 30 days, except where we are required to retain it for legal purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong className="text-white">Access:</strong> Request access to your personal information</li>
              <li><strong className="text-white">Correction:</strong> Request correction of inaccurate data</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
              <li><strong className="text-white">Export:</strong> Request a copy of your data in a portable format</li>
              <li><strong className="text-white">Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us at [YOUR_EMAIL].
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              RiseUp is not intended for use by children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the App and updating the "Last Updated" date. Your continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">11. California Privacy Rights (CCPA)</h2>
            <p className="text-gray-300 leading-relaxed">
              If you are a California resident, you have specific rights regarding your personal information, including the right to know what information we collect, the right to delete your information, and the right to opt-out of the sale of your information. We do not sell your personal information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">12. European Privacy Rights (GDPR)</h2>
            <p className="text-gray-300 leading-relaxed">
              If you are located in the European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, object to processing, and data portability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-300 leading-relaxed">
              Email: riseup66daychallenge@gmail.com<br />
              App: RiseUp<br />
              Platform: iOS
            </p>
          </section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
