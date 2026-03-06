"use client";

import { motion } from "framer-motion";

export default function AILoader() {
  const steps = [
    "Verifying identity...",
    "Running AI credit intelligence model...",
    "Secure authentication complete"
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-950 text-white">
      <motion.div
        className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      <div className="mt-8 space-y-2 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
        >
          Running AI Credit Intelligence...
        </motion.div>
        
        <div className="flex flex-col items-center gap-1 mt-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.8, duration: 0.5 }}
              className="text-sm text-slate-400 flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {step}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
