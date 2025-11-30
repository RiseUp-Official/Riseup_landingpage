"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6"
            >
              <Sparkles className="text-purple-600" size={20} />
              <span className="text-sm font-semibold text-gray-700">
                Transform in 66 Days
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Transform Your Life
              </span>{" "}
              <span className="text-gray-900">in 66 Days</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Build habits, stay motivated, track progress, and level up every
              day with RiseUp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 border-2 border-white"
                    />
                  ))}
                </div>
                <span className="font-semibold">10k+ users</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                <span>4.9/5 rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              {/* Placeholder for app screenshot - you can replace with actual image */}
              <div className="w-full aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-white to-gray-100 rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden">
                <div className="h-full bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-6">
                  <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
                    <div className="h-2 w-3/4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mb-2"></div>
                    <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-3 shadow-md"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-2"></div>
                        <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl shadow-xl opacity-80"
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-xl opacity-80"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
