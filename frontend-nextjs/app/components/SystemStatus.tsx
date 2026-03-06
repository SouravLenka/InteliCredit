"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Cloud } from "lucide-react";

export default function SystemStatus() {
  const statuses = [
    { label: "Fraud Detection Model", status: "Active", icon: ShieldCheck, color: "text-emerald-500" },
    { label: "Risk Scoring Engine", status: "Online", icon: Cpu, color: "text-blue-500" },
    { label: "Secure API", status: "Connected", icon: Cloud, color: "text-emerald-500" },
  ];

  return (
    <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-[2rem] border border-slate-800 shadow-xl">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        System Status
      </h3>

      <div className="space-y-4">
        {statuses.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/50"
          >
            <div className="flex items-center gap-3">
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-xs font-bold text-slate-300">{item.label}</span>
            </div>
            <div className="flex items-center gap-1.5 ">
               <div className={`w-1 h-1 rounded-full ${item.color} animate-pulse`} />
               <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Last Sync: Just now</div>
        <div className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">99.9% Uptime</div>
      </div>
    </div>
  );
}
