"use client";

import { motion } from "framer-motion";
import { Stats } from "./stats";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="relative min-h-[calc(100vh-76px)] flex items-center mt-8 mb-[100px]"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              Transform Your Betting thing with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                AI Agents
              </span>
            </h1>
          </motion.div>
        </div>
        <Stats />
      </div>
    </div>
  );
}
