"use client";

import { motion } from "framer-motion";
import { Download, Target, TrendingUp, Trophy } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: Download,
    title: "Join the Waitlist",
    description:
      "Sign up with your email to get exclusive early access when we launch.",
    color: "from-orange-400 to-pink-400",
  },
  {
    icon: Target,
    title: "Set Your Goals",
    description:
      "Define your habits and goals. Our AI helps you create a personalized plan.",
    color: "from-pink-400 to-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Build consistency day by day. Watch your streaks grow and habits stick.",
    color: "from-purple-400 to-indigo-400",
  },
  {
    icon: Trophy,
    title: "Achieve Results",
    description:
      "Celebrate milestones, unlock achievements, and transform your life in 66 days.",
    color: "from-indigo-400 to-blue-400",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">How It</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your life in just four simple steps
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-center gap-8 flex-col md:flex-row">
                {/* Step Number & Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative flex-shrink-0"
                >
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl shadow-xl flex items-center justify-center`}
                  >
                    <step.icon className="text-white" size={40} />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center font-bold text-lg text-gray-900">
                    {index + 1}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg">{step.description}</p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="hidden md:block absolute left-12 top-24 w-0.5 h-12 bg-gradient-to-b from-gray-600 to-transparent origin-top"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-white text-black rounded-full font-semibold text-lg shadow-2xl hover:bg-gray-100 transition-all"
          >
            Join Waitlist
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
