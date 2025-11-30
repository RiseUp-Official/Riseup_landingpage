"use client";

import { motion } from "framer-motion";
import { Target, Brain, Timer, Book, TrendingUp, Zap } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Target,
    title: "Habit Tracking",
    description:
      "Build and track daily habits with intuitive visualization and streaks.",
    gradient: "from-orange-400 to-pink-400",
  },
  {
    icon: Brain,
    title: "Personalized Plans",
    description:
      "AI-powered personalized habit plans tailored to your goals and lifestyle.",
    gradient: "from-pink-400 to-purple-400",
  },
  {
    icon: Timer,
    title: "Focus Timer",
    description:
      "Pomodoro technique and focus sessions to maximize productivity.",
    gradient: "from-purple-400 to-indigo-400",
  },
  {
    icon: Book,
    title: "Daily Journaling",
    description:
      "Reflect on your journey with guided journaling and mood tracking.",
    gradient: "from-indigo-400 to-blue-400",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description:
      "Beautiful charts and insights to visualize your growth over time.",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Zap,
    title: "Gamified Experience",
    description:
      "Earn points, unlock achievements, and level up as you progress.",
    gradient: "from-cyan-400 to-teal-400",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Everything You Need
            </span>{" "}
            <span className="text-gray-900">to Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you build lasting habits and
            achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
