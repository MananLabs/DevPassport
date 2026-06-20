"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, TrendingUp, TrendingDown, Minus, Globe, GraduationCap, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Scope = "global" | "country" | "university" | "technology";
type Category = "overall" | "problem_solving" | "open_source" | "projects" | "trust";

const USERS = [
  { rank: 1, name: "Sakura Yamamoto", username: "sakura_y", country: "🇯🇵", score: 987, change: 0, badge: "Elite Verified", avatar: "S" },
  { rank: 2, name: "Priya Sharma", username: "priya_codes", country: "🇮🇳", score: 981, change: 1, badge: "Elite Verified", avatar: "P" },
  { rank: 3, name: "Marcus Chen", username: "mchen_dev", country: "🇺🇸", score: 975, change: -1, badge: "Elite Verified", avatar: "M" },
  { rank: 4, name: "Lena Müller", username: "lena_m", country: "🇩🇪", score: 968, change: 2, badge: "Highly Trusted", avatar: "L" },
  { rank: 5, name: "Ahmed Hassan", username: "ahmed_h", country: "🇪🇬", score: 962, change: 0, badge: "Highly Trusted", avatar: "A" },
  { rank: 6, name: "Sofia Costa", username: "sofia_c", country: "🇧🇷", score: 958, change: 3, badge: "Highly Trusted", avatar: "S" },
  { rank: 7, name: "Yuki Tanaka", username: "yuki_t", country: "🇯🇵", score: 952, change: -2, badge: "Verified", avatar: "Y" },
  { rank: 8, name: "Ivan Petrov", username: "ivan_p", country: "🇷🇺", score: 944, change: 1, badge: "Verified", avatar: "I" },
  { rank: 9, name: "Anya Singh", username: "anya_s", country: "🇮🇳", score: 938, change: 4, badge: "Verified", avatar: "A" },
  { rank: 10, name: "Carlos Mendez", username: "carlos_m", country: "🇲🇽", score: 931, change: -1, badge: "Verified", avatar: "C" },
  // Current user
  { rank: 4352, name: "Alex Chen", username: "alexchen", country: "🇺🇸", score: 847, change: 18, badge: "Verified", avatar: "A", isMe: true },
];

function RankIcon({ rank }: { rank: number }) {
  if (rank === 1) return <Trophy className="h-5 w-5 text-[#FFD700]" />;
  if (rank === 2) return <Medal className="h-5 w-5 text-[#C0C0C0]" />;
  if (rank === 3) return <Medal className="h-5 w-5 text-[#CD7F32]" />;
  return <span className="text-sm font-bold text-[var(--muted-foreground)] w-5 text-center">#{rank}</span>;
}

function ChangeIndicator({ change }: { change: number }) {
  if (change > 0) return (
    <div className="flex items-center gap-0.5 text-[#10B981] text-xs">
      <TrendingUp className="h-3 w-3" />
      <span>+{change}</span>
    </div>
  );
  if (change < 0) return (
    <div className="flex items-center gap-0.5 text-red-400 text-xs">
      <TrendingDown className="h-3 w-3" />
      <span>{change}</span>
    </div>
  );
  return <Minus className="h-3 w-3 text-[var(--muted-foreground)]" />;
}

export default function LeaderboardPage() {
  const [scope, setScope] = useState<Scope>("global");
  const [category, setCategory] = useState<Category>("overall");

  const topThree = USERS.slice(0, 3);
  const rest = USERS.slice(3).filter((u) => !("isMe" in u && u.isMe));
  const me = USERS.find((u) => "isMe" in u && u.isMe);

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Global Leaderboard</h1>
            <p className="text-[var(--muted-foreground)] text-sm mt-0.5">Top developers by merit score</p>
          </div>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex flex-wrap gap-4">
            <div>
              <p className="text-xs text-[var(--muted-foreground)] mb-2 font-medium uppercase tracking-wider">Scope</p>
              <div className="flex gap-1.5">
                {(["global", "country", "university", "technology"] as Scope[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setScope(s)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
                      scope === s
                        ? "bg-[#4F46E5] text-white"
                        : "bg-[var(--secondary)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    )}
                  >
                    {s === "global" && <Globe className="h-3.5 w-3.5" />}
                    {s === "country" && "🌍"}
                    {s === "university" && <GraduationCap className="h-3.5 w-3.5" />}
                    {s === "technology" && <Code2 className="h-3.5 w-3.5" />}
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-[var(--muted-foreground)] mb-2 font-medium uppercase tracking-wider">Category</p>
              <div className="flex gap-1.5 flex-wrap">
                {([
                  ["overall", "Overall Score"],
                  ["problem_solving", "Problem Solving"],
                  ["open_source", "Open Source"],
                  ["projects", "Projects"],
                  ["trust", "Trust Score"],
                ] as [Category, string][]).map(([c, label]) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
                      category === c
                        ? "bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/30"
                        : "bg-[var(--secondary)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Podium - Top 3 */}
        <div className="grid grid-cols-3 gap-4 items-end">
          {[topThree[1], topThree[0], topThree[2]].map((user, i) => {
            const isFirst = user.rank === 1;
            const podiumHeight = isFirst ? "h-32" : user.rank === 2 ? "h-24" : "h-20";
            const glowColor = isFirst ? "#FFD700" : user.rank === 2 ? "#C0C0C0" : "#CD7F32";

            return (
              <motion.div
                key={user.username}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl text-white font-bold text-lg shadow-lg", isFirst && "h-16 w-16 text-xl")}
                  style={{ background: `linear-gradient(135deg, #4F46E5, #6366F1)`, boxShadow: `0 4px 20px ${glowColor}40` }}>
                  {user.avatar}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{user.country} @{user.username}</p>
                </div>
                <div className={cn("w-full rounded-t-xl flex flex-col items-center justify-start pt-3 gap-1", podiumHeight)}
                  style={{ background: `${glowColor}15`, border: `1px solid ${glowColor}30` }}>
                  <RankIcon rank={user.rank} />
                  <span className="font-bold text-lg">{user.score}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full leaderboard */}
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-[var(--border)]">
              {rest.map((user, i) => (
                <motion.div
                  key={user.username}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-[var(--secondary)] transition-colors"
                >
                  <div className="w-8 flex justify-center shrink-0">
                    <RankIcon rank={user.rank} />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl text-white text-sm font-bold shrink-0"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #6366F1)" }}>
                    {user.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{user.name}</span>
                      <span className="text-xs text-[var(--muted-foreground)]">{user.country}</span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)]">@{user.username}</p>
                  </div>
                  <Badge variant="secondary" className="hidden sm:flex text-xs">{user.badge}</Badge>
                  <ChangeIndicator change={user.change} />
                  <span className="font-bold text-[#4F46E5] w-12 text-right">{user.score}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My rank */}
        {me && (
          <Card className="border-[#4F46E5]/40 bg-[#4F46E5]/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F46E5] text-white text-sm font-bold shrink-0">
                  {me.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{me.name} (You)</span>
                    <span className="text-xs text-[var(--muted-foreground)]">{me.country}</span>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)]">@{me.username}</p>
                </div>
                <ChangeIndicator change={me.change} />
                <span className="font-bold text-[#4F46E5]">{me.score}</span>
                <Badge variant="primary" className="shrink-0">#{me.rank.toLocaleString()}</Badge>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
