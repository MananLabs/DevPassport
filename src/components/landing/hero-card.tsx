"use client";

import { useEffect, useState } from "react";
import { ScoreRing } from "@/components/ui/score-ring";
import { Badge } from "@/components/ui/badge";
import { Shield, Globe, TrendingUp, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const PLATFORMS = [
  { name: "GitHub", color: "#333", icon: "GH" },
  { name: "LeetCode", color: "#FFA116", icon: "LC" },
  { name: "Codeforces", color: "#1F8DD6", icon: "CF" },
  { name: "HackerRank", color: "#00EA64", icon: "HR" },
  { name: "Kaggle", color: "#20BEFF", icon: "KG" },
  { name: "CodeChef", color: "#5B4638", icon: "CC" },
  { name: "AtCoder", color: "#955FFF", icon: "AC" },
];

export function HeroCard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4F46E5]/30 via-transparent to-[#14B8A6]/20 blur-2xl scale-105" />

      {/* Main card */}
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#6366F1] flex items-center justify-center text-xl font-bold text-white shadow-lg">
                A
              </div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#10B981] border-2 border-[#0B0F1A]" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Alex Chen</p>
              <p className="text-white/50 text-xs">@alexchen • 🇺🇸 USA</p>
            </div>
          </div>
          <Badge className="bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-xs">
            <Shield className="h-3 w-3" />
            Elite
          </Badge>
        </div>

        {/* Score display */}
        <div className="flex items-center justify-between mb-6">
          <ScoreRing score={847} size={120} strokeWidth={8} animate />
          <div className="flex flex-col gap-3 flex-1 ml-6">
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-xs">Trust Score</span>
              <span className="text-white font-bold text-sm">96%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-[#4F46E5] to-[#14B8A6]" />
            </div>
            <div className="flex items-center gap-1 text-xs text-white/60">
              <Globe className="h-3 w-3" />
              <span>Global Rank</span>
              <span className="ml-auto text-white font-semibold">#4,352</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-white/60">
              <TrendingUp className="h-3 w-3 text-[#10B981]" />
              <span>Country Rank</span>
              <span className="ml-auto text-white font-semibold">#218</span>
            </div>
          </div>
        </div>

        {/* Category scores */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { label: "Problem Solving", score: 812, color: "#4F46E5" },
            { label: "Engineering", score: 945, color: "#14B8A6" },
            { label: "Open Source", score: 903, color: "#10B981" },
            { label: "Projects", score: 788, color: "#F59E0B" },
          ].map(({ label, score, color }) => (
            <div key={label} className="rounded-xl bg-white/5 border border-white/8 p-2.5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-white/50 text-xs">{label}</span>
                <span className="font-bold text-xs" style={{ color }}>{score}</span>
              </div>
              <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${(score / 1000) * 100}%`, background: color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Connected platforms */}
        <div>
          <p className="text-white/40 text-xs mb-2">Connected Platforms</p>
          <div className="flex items-center gap-1.5 flex-wrap">
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                className="relative group"
                title={p.name}
              >
                <div
                  className="h-7 w-7 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm border border-white/10"
                  style={{ backgroundColor: p.color }}
                >
                  {p.icon}
                </div>
                <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#10B981] border border-[#0B0F1A]" />
              </div>
            ))}
          </div>
        </div>

        {/* Badges strip */}
        <div className="mt-4 pt-4 border-t border-white/8 flex items-center gap-2">
          <Star className="h-3.5 w-3.5 text-[#F59E0B]" />
          <div className="flex gap-1.5 flex-wrap">
            {["Elite Problem Solver", "Open Source Veteran", "Builder"].map((b) => (
              <span key={b} className="text-xs text-white/50 bg-white/5 border border-white/10 rounded-lg px-2 py-0.5">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stats */}
      <div className={cn(
        "absolute -top-3 -right-4 rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl px-3 py-2 shadow-xl",
        "animate-[float_3s_ease-in-out_infinite]"
      )}>
        <p className="text-white/50 text-xs">Verification</p>
        <p className="text-white font-bold text-sm">Level 4 ⭐</p>
      </div>

      <div className={cn(
        "absolute -bottom-3 -left-4 rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl px-3 py-2 shadow-xl",
        "animate-[float_3s_ease-in-out_0.5s_infinite]"
      )}>
        <p className="text-white/50 text-xs">Learning Velocity</p>
        <p className="text-[#14B8A6] font-bold text-sm">↑ +42 pts this week</p>
      </div>
    </div>
  );
}
