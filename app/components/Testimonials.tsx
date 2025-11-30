"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  User,
  Briefcase,
  Code,
  Dumbbell,
  GraduationCap,
  PenTool,
  Palette,
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Entrepreneur",
    icon: Briefcase,
    rating: 5,
    text: "RiseUp completely transformed my morning routine. I've been consistent for 45 days straight and feel more productive than ever!",
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    icon: Code,
    rating: 5,
    text: "The focus timer and habit tracking features are game-changers. I've built 5 new habits and my productivity has doubled.",
  },
  {
    name: "Emma Williams",
    role: "Fitness Coach",
    icon: Dumbbell,
    rating: 5,
    text: "I recommend RiseUp to all my clients. The personalized plans and progress tracking keep them motivated and accountable.",
  },
  {
    name: "David Rodriguez",
    role: "Student",
    icon: GraduationCap,
    rating: 5,
    text: "Finally, an app that makes building habits fun! The gamification keeps me engaged and the streaks are so satisfying.",
  },
  {
    name: "Lisa Anderson",
    role: "Writer",
    icon: PenTool,
    rating: 5,
    text: "The journaling feature helps me reflect on my progress daily. I've never been this consistent with my writing habit.",
  },
  {
    name: "James Taylor",
    role: "Designer",
    icon: Palette,
    rating: 5,
    text: "Beautiful design and smooth animations make using RiseUp a joy. It's the only habit app I've stuck with long-term.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">What Our</span>{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of people transforming their lives with RiseUp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="text-purple-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center">
                  <testimonial.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-orange-400 via-pink-400 to-purple-400 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10k+", label: "Active Users" },
            { value: "4.9/5", label: "App Rating" },
            { value: "1M+", label: "Habits Tracked" },
            { value: "66", label: "Day Challenge" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
