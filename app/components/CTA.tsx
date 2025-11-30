"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target, ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { addToWaitlist } from "@/lib/waitlist";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const result = await addToWaitlist(email, "cta");

    if (result.success) {
      setIsSubmitted(true);
      setEmail("");
      setMessage(result.message);
      setTimeout(() => {
        setIsSubmitted(false);
        setMessage("");
      }, 5000);
    } else {
      setMessage(result.message);
      setIsLoading(false);
    }

    if (result.success) {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Join the Waitlist – Be First to Transform
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 mb-12"
          >
            Get exclusive early access and start your 66-day journey to a better you
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent font-medium text-lg"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading || isSubmitted}
                className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  "Joining..."
                ) : isSubmitted ? (
                  "You're In!"
                ) : (
                  <>
                    Join Now
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </div>
            {message && (
              <p className={`mt-4 text-center ${
                isSubmitted ? "text-green-400" : "text-red-400"
              }`}>
                {message}
              </p>
            )}
            {!message && (
              <p className="text-gray-400 mt-4 text-center">
                Join 10,000+ people waiting for launch. No spam, ever.
              </p>
            )}
          </motion.form>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <Shield className="text-white" size={24} />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-white" size={24} />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="text-white" size={24} />
              <span>Proven Results</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
