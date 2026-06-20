"use client";

import { Shield, Globe, TrendingUp } from "lucide-react";

const PLATFORM_DOTS = [
  { name: "GitHub", color: "#24292E" },
  { name: "LeetCode", color: "#FFA116" },
  { name: "Codeforces", color: "#1F8DD6" },
  { name: "HackerRank", color: "#00EA64" },
  { name: "Kaggle", color: "#20BEFF" },
  { name: "CodeChef", color: "#5B4638" },
  { name: "AtCoder", color: "#955FFF" },
];

export function HeroCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4F46E5]/30 via-transparent to-[#14B8A6]/20 blur-2xl scale-105" />

      {/* Card */}
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#4F46E5]/40 to-[#6366F1]/20 border border-white/10 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-white/20" />
            </div>
            <div className="space-y-1.5">
              <div className="h-3 w-24 rounded bg-white/20" />
              <div className="h-2 w-16 rounded bg-white/10" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/15 px-2.5 py-1">
            <Shield className="h-3 w-3 text-[#10B981]" />
            <span className="text-[#10B981] text-xs font-medium">Verified</span>
          </div>
        </div>

        {/* Score ring placeholder */}
        <div className="flex items-center gap-5 mb-6">
          <div className="relative flex-shrink-0">
            <svg width={120} height={120} viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
              <circle
                cx="60" cy="60" r="50"
                fill="none"
                stroke="url(#scoreGrad)"
                strokeWidth="8"
                strokeDasharray="314"
                strokeDashoffset="55"
                strokeLinecap="round"
                style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
              />
              <defs>
                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-white">—</span>
              <span className="text-xs text-white/40">Score</span>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-xs flex items-center gap-1">
                <Shield className="h-3 w-3" /> Trust
              </span>
              <span className="text-white/30 text-xs">—</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
              <div className="h-full w-0 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#14B8A6]" />
            </div>
            <div className="flex items-center justify-between text-xs text-white/50">
              <span className="flex items-center gap-1"><Globe className="h-3 w-3" /> Global Rank</span>
              <span className="text-white/30">—</span>
            </div>
            <div className="flex items-center justify-between text-xs text-white/50">
              <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3 text-[#10B981]" /> Country</span>
              <span className="text-white/30">—</span>
            </div>
          </div>
        </div>

        {/* Category bars */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { label: "Problem Solving", color: "#4F46E5" },
            { label: "Engineering", color: "#14B8A6" },
            { label: "Open Source", color: "#10B981" },
            { label: "Projects", color: "#F59E0B" },
          ].map(({ label, color }) => (
            <div key={label} className="rounded-xl bg-white/5 border border-white/8 p-2.5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-white/40 text-xs truncate">{label}</span>
                <span className="text-white/20 text-xs ml-1">—</span>
              </div>
              <div className="h-1 rounded-full bg-white/8" />
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div>
          <p className="text-white/30 text-xs mb-2">Connect platforms</p>
          <div className="flex items-center gap-1.5 flex-wrap">
            {PLATFORM_DOTS.map((p) => (
              <div
                key={p.name}
                title={p.name}
                className="h-7 w-7 rounded-lg border border-white/10 opacity-40"
                style={{ backgroundColor: p.color }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating tags */}
      <div className="absolute -top-3 -right-4 rounded-xl border border-white/10 bg-white/8 backdrop-blur-xl px-3 py-2 shadow-xl"
        style={{ animation: "float 3s ease-in-out infinite" }}>
        <p className="text-white/40 text-xs">Verification</p>
        <p className="text-white font-bold text-sm">Level 4 ⭐</p>
      </div>

      <div className="absolute -bottom-3 -left-4 rounded-xl border border-white/10 bg-white/8 backdrop-blur-xl px-3 py-2 shadow-xl"
        style={{ animation: "float 3s ease-in-out 0.5s infinite" }}>
        <p className="text-white/40 text-xs">Score updates</p>
        <p className="text-[#14B8A6] font-bold text-sm">↑ Real-time</p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
