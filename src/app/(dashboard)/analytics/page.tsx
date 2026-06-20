"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";

const SCORE_HISTORY = [
  { month: "Jan", score: 620, rank: 8200 },
  { month: "Feb", score: 658, rank: 7100 },
  { month: "Mar", score: 702, rank: 6300 },
  { month: "Apr", score: 735, rank: 5800 },
  { month: "May", score: 768, rank: 5200 },
  { month: "Jun", score: 799, rank: 4900 },
  { month: "Jul", score: 821, rank: 4600 },
  { month: "Aug", score: 847, rank: 4352 },
];

const WEEKLY_ACTIVITY = [
  { day: "Mon", contributions: 12, problems: 3 },
  { day: "Tue", contributions: 8, problems: 5 },
  { day: "Wed", contributions: 19, problems: 2 },
  { day: "Thu", contributions: 6, problems: 8 },
  { day: "Fri", contributions: 14, problems: 4 },
  { day: "Sat", contributions: 21, problems: 7 },
  { day: "Sun", contributions: 9, problems: 1 },
];

const DNA_DATA = [
  { subject: "Builder", score: 95 },
  { subject: "Problem Solver", score: 87 },
  { subject: "Researcher", score: 45 },
  { subject: "Leader", score: 70 },
  { subject: "Open Source", score: 88 },
  { subject: "Educator", score: 62 },
  { subject: "Entrepreneur", score: 78 },
];

const SKILL_GROWTH = [
  { skill: "TypeScript", prev: 65, curr: 82 },
  { skill: "React", prev: 78, curr: 88 },
  { skill: "Node.js", prev: 70, curr: 79 },
  { skill: "Python", prev: 55, curr: 68 },
  { skill: "Go", prev: 30, curr: 52 },
];

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string }[]; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 shadow-lg text-sm">
        <p className="text-[var(--muted-foreground)] text-xs mb-1">{label}</p>
        {payload.map((p) => (
          <p key={p.name} className="font-bold text-[#4F46E5]">{p.name}: {p.value}</p>
        ))}
      </div>
    );
  }
  return null;
}

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-[var(--muted-foreground)] text-sm mt-0.5">Track your developer growth over time</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Score This Month", value: "+48", sub: "vs +32 last month", up: true },
            { label: "Rank Improvement", value: "-248", sub: "moved up 248 spots", up: true },
            { label: "Contributions", value: "89", sub: "this week", up: true },
            { label: "Problems Solved", value: "30", sub: "this week", up: false },
          ].map(({ label, value, sub, up }) => (
            <Card key={label} className="p-5">
              <p className="text-xs text-[var(--muted-foreground)] mb-1">{label}</p>
              <p className="text-2xl font-bold text-[var(--foreground)]">{value}</p>
              <div className="flex items-center gap-1 mt-1">
                {up ? (
                  <TrendingUp className="h-3 w-3 text-[#10B981]" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-[#F59E0B]" />
                )}
                <span className="text-xs text-[var(--muted-foreground)]">{sub}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Score + Rank charts */}
        <div className="grid lg:grid-cols-2 gap-5">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Credit Score History</CardTitle>
                <Badge variant="success">+227 YTD</Badge>
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
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                  <YAxis domain={[580, 880]} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="score" name="Score" stroke="#4F46E5" strokeWidth={2.5} fill="url(#scoreGrad)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Global Rank History</CardTitle>
                <Badge variant="success">Top 0.4%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={SCORE_HISTORY}>
                  <defs>
                    <linearGradient id="rankGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                  <YAxis reversed domain={[4000, 8500]} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `#${(v/1000).toFixed(0)}K`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="rank" name="Rank" stroke="#14B8A6" strokeWidth={2.5} fill="url(#rankGrad)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Activity + DNA */}
        <div className="grid lg:grid-cols-2 gap-5">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Weekly Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={WEEKLY_ACTIVITY}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="contributions" name="Contributions" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="problems" name="Problems" fill="#14B8A6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Developer DNA Radar</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <RadarChart data={DNA_DATA}>
                  <PolarGrid stroke="var(--border)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar dataKey="score" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.2} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Skill growth */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Skill Growth (Last 90 Days)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {SKILL_GROWTH.map(({ skill, prev, curr }) => {
                const growth = curr - prev;
                return (
                  <div key={skill} className="flex items-center gap-4">
                    <span className="w-24 text-sm font-medium shrink-0">{skill}</span>
                    <div className="flex-1">
                      <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-[var(--secondary)]">
                        <div className="h-full rounded-l-full bg-[#4F46E5]/30" style={{ width: `${prev}%` }} />
                        <div className="h-full bg-[#10B981]" style={{ width: `${growth}%` }} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm font-bold">{curr}%</span>
                      <Badge variant="success" className="text-xs">+{growth}%</Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
