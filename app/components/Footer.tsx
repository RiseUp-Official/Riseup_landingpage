"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { addToWaitlist } from "@/lib/waitlist";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const result = await addToWaitlist(email, "footer");

    if (result.success) {
      setEmail("");
      setMessage(result.message);
      setTimeout(() => setMessage(""), 5000);
    } else {
      setMessage(result.message);
    }

    setIsLoading(false);
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              RiseUp
            </motion.div>
            <p className="text-gray-400 mb-6">
              Transform your life in 66 days with powerful habit-building tools
              and personalized guidance.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <Link key={index} href={social.href}>
                  <motion.div
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-400 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              {[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Join Waitlist", href: "#waitlist" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Contact", "Press Kit"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get Launch Updates</h3>
            <p className="text-gray-400 mb-4">
              Be the first to know when RiseUp launches. Get exclusive early
              access.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12"
                required
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center disabled:opacity-50"
              >
                <Send size={16} />
              </motion.button>
            </form>
            {message && (
              <p className={`text-sm mt-2 ${
                message.includes("Successfully") ? "text-green-400" : "text-red-400"
              }`}>
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 RiseUp. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
