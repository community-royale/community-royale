"use client"

import { motion } from "framer-motion"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Team A", wins: 12 },
  { name: "Team B", wins: 19 },
  { name: "Team C", wins: 3 },
  { name: "Team D", wins: 5 },
  { name: "Team E", wins: 2 },
]

export function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto bg-black/50 backdrop-blur-md rounded-lg overflow-hidden border border-purple-500/20 p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Current Stats</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Bar dataKey="wins" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Total Bets</h3>
          <p className="text-3xl font-bold text-purple-400">1,234</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Total Payout</h3>
          <p className="text-3xl font-bold text-purple-400">$56,789</p>
        </div>
      </div>
    </motion.div>
  )
}

