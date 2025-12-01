"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    // Simulate form submission - replace with actual email service
    setTimeout(() => {
      setStatusMessage("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(""), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Support
          </h1>
          <p className="text-gray-300 text-lg">
            For faster support, send any questions and requests directly to{" "}
            <a
              href="mailto:riseup66daychallenge@gmail.com"
              className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1"
            >
              <Mail size={18} />
              riseup66daychallenge@gmail.com
            </a>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div whileFocus={{ scale: 1.02 }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </motion.div>
          </div>

          <motion.div whileFocus={{ scale: 1.01 }} className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={8}
              className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-white text-black rounded-2xl font-semibold text-lg hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </motion.button>

          {statusMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-4 text-green-400"
            >
              {statusMessage}
            </motion.p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Other Ways to Reach Us</h2>
          <div className="flex flex-col items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-orange-400" />
              <span>Email: riseup66daychallenge@gmail.com</span>
            </div>
            <p className="text-sm">We typically respond within 24-48 hours</p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
