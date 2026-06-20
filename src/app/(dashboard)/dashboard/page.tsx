"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { ScoreRing } from "@/components/ui/score-ring";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Trophy,
  Shield,
  Star,
  GitBranch,
  Code2,
  Globe,
  ArrowRight,
  Zap,
  Award,
  CheckCircle,
} from "lucide-react";
import { getScoreColor, getTrustBadge, formatRank } from "@/lib/utils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SCORE_HISTORY = [
  { month: "Jan", score: 620 },
  { month: "Feb", score: 658 },
  { month: "Mar", score: 702 },
  { month: "Apr", score: 735 },
  { month: "May", score: 768 },
  { month: "Jun", score: 799 },
  { month: "Jul", score: 821 },
  { month: "Aug", score: 847 },
];

const CATEGORY_SCORES = [
  { label: "Problem Solving", score: 812, icon: Code2, color: "#4F46E5" },
  { label: "Engineering", score: 945, icon: GitBranch, color: "#14B8A6" },
  { label: "Open Source", score: 903, icon: Globe, color: "#10B981" },
  { label: "Projects", score: 788, icon: Star, color: "#F59E0B" },
  { label: "Collaboration", score: 760, icon: TrendingUp, color: "#8B5CF6" },
  { label: "Knowledge", score: 695, icon: Zap, color: "#EC4899" },
];

const RECENT_ACTIVITY = [
  { type: "badge", text: "Earned Elite Problem Solver badge", time: "2h ago", color: "#4F46E5" },
  { type: "score", text: "Score increased +26 pts from LeetCode sync", time: "1d ago", color: "#10B981" },
  { type: "rank", text: "Moved up to #4,352 globally", time: "3d ago", color: "#F59E0B" },
  { type: "connection", text: "Connected Codeforces account", time: "5d ago", color: "#14B8A6" },
  { type: "achievement", text: "Added Hackathon win to achievements", time: "1w ago", color: "#8B5CF6" },
];

const CONNECTED_PLATFORMS = [
  { name: "GitHub", connected: true, username: "alexchen", color: "#24292E" },
  { name: "LeetCode", connected: true, username: "alex_chen", color: "#FFA116" },
  { name: "Codeforces", connected: true, username: "alexc", color: "#1F8DD6" },
  { name: "HackerRank", connected: false, username: "", color: "#00EA64" },
  { name: "Kaggle", connected: false, username: "", color: "#20BEFF" },
];

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 shadow-lg text-sm">
        <p className="text-[var(--muted-foreground)] text-xs">{label}</p>
        <p className="font-bold text-[#4F46E5]">{payload[0].value}</p>
      </div>
    );
  }
  return null;
}

export default function DashboardPage() {
  const trustBadge = getTrustBadge(96);

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-[var(--muted-foreground)] text-sm mt-0.5">
              Welcome back, Alex — your score grew +48 this month
            </p>
          </div>
          <Link href="/alexchen">
            <Button variant="outline" size="sm" className="gap-1.5">
              View Public Profile
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Score cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Main score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="md:col-span-1 text-center p-6">
              <CardContent className="p-0 flex flex-col items-center gap-4">
                <ScoreRing score={847} size={140} strokeWidth={10} animate />
                <div>
                  <p className="text-sm font-medium text-[var(--muted-foreground)]">Developer Credit Score</p>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <TrendingUp className="h-3.5 w-3.5 text-[#10B981]" />
                    <span className="text-xs text-[#10B981] font-medium">+48 this month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {[
              {
                label: "Trust Score",
                value: "96%",
                sub: trustBadge.label,
                color: trustBadge.color,
                icon: Shield,
              },
              {
                label: "Global Rank",
                value: "#4,352",
                sub: "Top 0.4%",
                color: "#F59E0B",
                icon: Globe,
              },
              {
                label: "Country Rank",
                value: "#218",
                sub: "🇺🇸 United States",
                color: "#8B5CF6",
                icon: Trophy,
              },
              {
                label: "Badges Earned",
                value: "12",
                sub: "3 this month",
                color: "#EC4899",
                icon: Award,
              },
            ].map(({ label, value, sub, color, icon: Icon }) => (
              <Card key={label} className="p-5">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `${color}15` }}>
                      <Icon className="h-4.5 w-4.5" style={{ color }} />
                    </div>
                  </div>
                  <p className="text-2xl font-bold" style={{ color }}>{value}</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{label}</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{sub}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Score chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Score Growth</CardTitle>
                <Badge variant="success">
                  <TrendingUp className="h-3 w-3" />
                  +227 this year
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={SCORE_HISTORY}>
                  <defs>
                    <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                  <YAxis domain={[550, 900]} tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="score" stroke="#4F46E5" strokeWidth={2.5} fill="url(#scoreGrad)" dot={false} activeDot={{ r: 5, fill: "#4F46E5" }} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Category scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Category Breakdown</CardTitle>
                <Link href="/analytics" className="text-xs text-[#4F46E5] hover:underline">View details</Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {CATEGORY_SCORES.map(({ label, score, icon: Icon, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0" style={{ backgroundColor: `${color}15` }}>
                      <Icon className="h-4 w-4" style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium truncate">{label}</span>
                        <span className="text-sm font-bold ml-2 shrink-0" style={{ color }}>{score}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[var(--secondary)] overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${(score / 1000) * 100}%`, background: color }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {RECENT_ACTIVITY.map(({ type, text, time, color }) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="mt-0.5 h-2 w-2 rounded-full shrink-0 mt-2" style={{ backgroundColor: color }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[var(--foreground)] leading-snug">{text}</p>
                        <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Connected Platforms</CardTitle>
                  <Link href="/connections" className="text-xs text-[#4F46E5] hover:underline">Manage</Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2.5">
                  {CONNECTED_PLATFORMS.map(({ name, connected, username, color }) => (
                    <div key={name} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ backgroundColor: color }}>
                        {name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{name}</p>
                        {connected ? (
                          <p className="text-xs text-[var(--muted-foreground)]">@{username}</p>
                        ) : (
                          <p className="text-xs text-[var(--muted-foreground)]">Not connected</p>
                        )}
                      </div>
                      {connected ? (
                        <CheckCircle className="h-4 w-4 text-[#10B981] shrink-0" />
                      ) : (
                        <Link href="/connections">
                          <Button size="sm" variant="outline" className="h-7 text-xs px-2">Connect</Button>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
