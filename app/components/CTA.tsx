"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone, Shield, Zap, Target } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="download"
      className="py-24 bg-linear-to-br from-orange-500 via-pink-500 to-purple-600 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
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
            Join RiseUp Today – Start Your Transformation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 mb-12"
          >
            Download now and begin your 66-day journey to a better you
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              <Apple size={28} />
              <div className="text-left">
                <div className="text-xs text-gray-600">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              <Smartphone size={28} />
              <div className="text-left">
                <div className="text-xs text-gray-600">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-white/80"
          >
            Free to download • No credit card required • Start building habits
            today
          </motion.p>

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
