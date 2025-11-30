"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { addToWaitlist } from "@/lib/waitlist";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const result = await addToWaitlist(email, "hero");

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Users className="text-orange-400" size={20} />
              <span className="text-white font-semibold text-sm">Join 10,000+ on the waitlist</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6"
              >
                <span className="text-white">Transform your</span>
                <br />
                <span className="text-white">life in </span>
                <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  66 days
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                The #1 self-improvement app to become better.
              </motion.p>

              {/* Waitlist Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto lg:mx-0"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading || isSubmitted}
                    className="px-8 py-3.5 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      "Joining..."
                    ) : isSubmitted ? (
                      "Joined!"
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>
                </div>
                {message && (
                  <p className={`text-sm mt-3 text-center lg:text-left ${
                    isSubmitted ? "text-green-400" : "text-red-400"
                  }`}>
                    {message}
                  </p>
                )}
                {!message && (
                  <p className="text-sm text-gray-500 mt-3 text-center lg:text-left">
                    Be the first to know when we launch. No spam, ever.
                  </p>
                )}
              </motion.form>
            </motion.div>

            {/* Right Content - App Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-2xl flex justify-center gap-3">
                {/* Main Phone */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-20"
                >
                  <div className="w-64 md:w-72 aspect-[9/19.5] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] shadow-2xl border-4 border-gray-800 overflow-hidden p-3">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>

                    {/* Screen content */}
                    <div className="h-full bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-[2.5rem] p-4 md:p-6 relative overflow-hidden">
                      {/* Time display */}
                      <div className="text-center mb-4 md:mb-6">
                        <div className="text-orange-400 text-4xl md:text-6xl font-bold">88:04:15</div>
                        <div className="text-gray-400 text-xs md:text-sm mt-1">MARCH 28, 2024</div>
                      </div>

                      {/* Day counter */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 mb-3 md:mb-4 border border-white/10">
                        <div className="flex items-center justify-between mb-1.5 md:mb-2">
                          <span className="text-white font-bold text-lg md:text-2xl">Day 1/66</span>
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-400"></div>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                          </div>
                        </div>
                        <div className="text-gray-400 text-xs md:text-sm">You're doing great. Keep going!</div>
                      </div>

                      {/* Tasks */}
                      <div className="space-y-2 md:space-y-3">
                        <div className="bg-green-500/20 border border-green-500/30 rounded-lg md:rounded-xl p-2.5 md:p-3 flex items-center justify-between">
                          <div>
                            <div className="text-white font-semibold text-sm md:text-base">Drink 3L water</div>
                            <div className="text-gray-400 text-[10px] md:text-xs">Everyday • 1 Difficulty</div>
                          </div>
                          <div className="bg-green-500 text-white px-2.5 py-1 rounded-md md:rounded-lg text-xs md:text-sm font-bold">Done</div>
                        </div>

                        <div className="bg-red-500/20 border border-red-500/30 rounded-lg md:rounded-xl p-2.5 md:p-3 flex items-center justify-between">
                          <div>
                            <div className="text-white font-semibold text-sm md:text-base">Wake up at 7AM</div>
                            <div className="text-gray-400 text-[10px] md:text-xs">Everyday • 11 Difficulty</div>
                          </div>
                          <div className="bg-red-500 text-white px-2.5 py-1 rounded-md md:rounded-lg text-xs md:text-sm font-bold">Skip</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Phone - Right */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="relative hidden lg:block"
                >
                  <div className="w-56 aspect-[9/19.5] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] shadow-2xl border-4 border-gray-800 overflow-hidden p-2.5 opacity-50 blur-[0.5px]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-3xl z-10"></div>
                    <div className="h-full bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-[2.5rem] p-4">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 mb-3">
                        <div className="h-2.5 w-3/4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-1.5"></div>
                        <div className="h-1.5 w-1/2 bg-gray-600 rounded-full"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="bg-white/5 rounded-lg p-2">
                            <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-pink-400 rounded-md mb-1.5"></div>
                            <div className="h-1.5 w-full bg-gray-600 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
