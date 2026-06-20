"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { ScoreRing } from "@/components/ui/score-ring";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Globe,
  MapPin,
  GraduationCap,
  Briefcase,
  Link2,
  Share2,
  Download,
  Star,
  GitBranch,
  TrendingUp,
  CheckCircle,
  Award,
  ExternalLink,
} from "lucide-react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const DNA_DATA = [
  { subject: "Builder", score: 95 },
  { subject: "Problem Solver", score: 87 },
  { subject: "Researcher", score: 45 },
  { subject: "Leader", score: 70 },
  { subject: "Open Source", score: 88 },
  { subject: "Educator", score: 62 },
  { subject: "Entrepreneur", score: 78 },
];

const SCORE_HISTORY = [
  { month: "Jan", score: 620 },
  { month: "Mar", score: 702 },
  { month: "May", score: 768 },
  { month: "Jul", score: 821 },
  { month: "Aug", score: 847 },
];

const BADGES = [
  { name: "Elite Problem Solver", desc: "1000+ DSA Questions", color: "#4F46E5", rarity: "LEGENDARY" },
  { name: "Open Source Veteran", desc: "100+ Merged PRs", color: "#10B981", rarity: "EPIC" },
  { name: "Builder", desc: "10 Live Products", color: "#F59E0B", rarity: "RARE" },
  { name: "Contest Champion", desc: "Top 10 finish", color: "#8B5CF6", rarity: "EPIC" },
  { name: "Community Hero", desc: "100 answers accepted", color: "#EC4899", rarity: "RARE" },
  { name: "Early Adopter", desc: "Beta user", color: "#14B8A6", rarity: "COMMON" },
];

const PROJECTS = [
  {
    name: "OpenMetrics",
    desc: "Real-time metrics dashboard for distributed systems",
    tech: ["Go", "React", "PostgreSQL"],
    stars: 1240,
    forks: 89,
    url: "#",
  },
  {
    name: "AuthKit",
    desc: "Drop-in authentication for Next.js with 10+ providers",
    tech: ["TypeScript", "Next.js", "Prisma"],
    stars: 847,
    forks: 64,
    url: "#",
  },
  {
    name: "ML-Pipeline",
    desc: "Automated ML pipeline with experiment tracking",
    tech: ["Python", "FastAPI", "Docker"],
    stars: 521,
    forks: 43,
    url: "#",
  },
];

const ACHIEVEMENTS = [
  { type: "HACKATHON", title: "1st Place — HackMIT 2024", org: "MIT", date: "Oct 2024", verified: true },
  { type: "COMPETITION", title: "Codeforces Div. 1 — Expert Rating", org: "Codeforces", date: "Sep 2024", verified: true },
  { type: "CERTIFICATION", title: "AWS Solutions Architect Pro", org: "Amazon", date: "Aug 2024", verified: true },
  { type: "PUBLICATION", title: "Efficient Distributed Caching Strategies", org: "arXiv", date: "Jun 2024", verified: false },
];

const PLATFORMS = [
  { name: "GitHub", color: "#24292E", username: "alexchen", stats: "1,240 stars" },
  { name: "LeetCode", color: "#FFA116", username: "alex_chen", stats: "1,247 solved" },
  { name: "Codeforces", color: "#1F8DD6", username: "alexc", stats: "Rating 1847" },
  { name: "Dev.to", color: "#0A0A0A", username: "alexchen", stats: "89 articles" },
];

const RARITY_COLORS: Record<string, string> = {
  LEGENDARY: "#FFD700",
  EPIC: "#8B5CF6",
  RARE: "#3B82F6",
  COMMON: "#6B7280",
};

export default function PublicProfilePage({ params }: { params: { username: string } }) {
  const username = params.username;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar isAuthenticated={false} />

      {/* Hero header */}
      <div className="bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#14B8A6]/5 border-b border-[var(--border)] pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-[#4F46E5] to-[#6366F1] flex items-center justify-center text-4xl text-white font-bold shadow-xl">
                A
              </div>
              <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl bg-[#10B981] shadow-md">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">Alex Chen</h1>
                <Badge variant="success" className="text-xs">
                  <Shield className="h-3 w-3" />
                  Level 4 Verified
                </Badge>
                <Badge className="text-xs bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20">
                  Expert
                </Badge>
              </div>

              <p className="text-[var(--muted-foreground)] text-sm mb-3">@{username}</p>

              <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)] mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  United States 🇺🇸
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="h-3.5 w-3.5" />
                  MIT
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5" />
                  Senior Software Engineer @ Google
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5" />
                  <a href="#" className="hover:text-[#4F46E5] transition-colors">alexchen.dev</a>
                </div>
              </div>

              <p className="text-sm text-[var(--muted-foreground)] max-w-xl leading-relaxed">
                Building distributed systems and open source tools. Passionate about developer experience and performance engineering.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 shrink-0 flex-wrap">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Share2 className="h-3.5 w-3.5" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5">
                <Download className="h-3.5 w-3.5" />
                Resume
              </Button>
              <Button size="sm">Contact</Button>
            </div>
          </div>

          {/* Score strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Credit Score", value: "847", color: "#4F46E5", sub: "Expert" },
              { label: "Trust Score", value: "96%", color: "#10B981", sub: "Highly Trusted" },
              { label: "Global Rank", value: "#4,352", color: "#F59E0B", sub: "Top 0.4%" },
              { label: "Country Rank", value: "#218", color: "#8B5CF6", sub: "🇺🇸 USA" },
            ].map(({ label, value, color, sub }) => (
              <div key={label} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-center">
                <p className="text-xl font-bold" style={{ color }}>{value}</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{label}</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Score breakdown */}
            <Card>
              <CardHeader><CardTitle>Score Breakdown</CardTitle></CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <ScoreRing score={847} size={120} strokeWidth={8} animate />
                  <div className="flex-1 space-y-3">
                    {[
                      { label: "Problem Solving", score: 812, color: "#4F46E5" },
                      { label: "Engineering", score: 945, color: "#14B8A6" },
                      { label: "Open Source", score: 903, color: "#10B981" },
                      { label: "Projects", score: 788, color: "#F59E0B" },
                    ].map(({ label, score, color }) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="w-28 text-xs text-[var(--muted-foreground)] shrink-0">{label}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-[var(--secondary)] overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${(score / 1000) * 100}%`, background: color }} />
                        </div>
                        <span className="text-xs font-bold w-8 text-right" style={{ color }}>{score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Developer DNA */}
            <Card>
              <CardHeader><CardTitle>Developer DNA</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ResponsiveContainer width="100%" height={220}>
                    <RadarChart data={DNA_DATA}>
                      <PolarGrid stroke="var(--border)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} />
                      <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar dataKey="score" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.2} strokeWidth={2} />
                    </RadarChart>
                  </ResponsiveContainer>
                  <div className="space-y-2">
                    {DNA_DATA.sort((a, b) => b.score - a.score).map(({ subject, score }) => (
                      <div key={subject} className="flex items-center gap-2">
                        <div className="flex-1 flex items-center gap-2">
                          <div className="h-1.5 flex-1 rounded-full bg-[var(--secondary)] overflow-hidden">
                            <div className="h-full rounded-full bg-[#4F46E5]" style={{ width: `${score}%` }} />
                          </div>
                        </div>
                        <span className="w-24 text-xs text-[var(--muted-foreground)]">{subject}</span>
                        <span className="text-xs font-bold text-[#4F46E5] w-8 text-right">{score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Projects</CardTitle>
                  <Badge variant="secondary">{PROJECTS.length} projects</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {PROJECTS.map((p) => (
                  <div key={p.name} className="rounded-xl border border-[var(--border)] p-4 hover:border-[#4F46E5]/30 transition-all group">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold group-hover:text-[#4F46E5] transition-colors">{p.name}</h3>
                      <a href={p.url} className="text-[var(--muted-foreground)] hover:text-[#4F46E5]">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-[#F59E0B]" />
                        {p.stars.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch className="h-3.5 w-3.5" />
                        {p.forks}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader><CardTitle>Achievements</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.title} className="flex items-start gap-3 rounded-xl border border-[var(--border)] p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F46E5]/10 shrink-0">
                      <Award className="h-4 w-4 text-[#4F46E5]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-sm">{a.title}</span>
                        {a.verified && (
                          <Badge variant="success" className="text-xs">
                            <CheckCircle className="h-3 w-3" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{a.org} · {a.date}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs shrink-0">{a.type}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Side column */}
          <div className="space-y-5">
            {/* Score trend */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Score Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={120}>
                  <AreaChart data={SCORE_HISTORY}>
                    <defs>
                      <linearGradient id="pubScoreGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="score" stroke="#4F46E5" strokeWidth={2} fill="url(#pubScoreGrad)" dot={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 9, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <YAxis domain={[580, 880]} hide />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">Badges</CardTitle>
                  <span className="text-xs text-[var(--muted-foreground)]">{BADGES.length} earned</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {BADGES.map(({ name, desc, color, rarity }) => (
                    <div
                      key={name}
                      className="rounded-xl border p-2.5 text-center"
                      style={{ borderColor: `${RARITY_COLORS[rarity]}40`, background: `${RARITY_COLORS[rarity]}08` }}
                    >
                      <div className="text-xl mb-1" style={{ color }}>⭐</div>
                      <p className="text-xs font-semibold leading-tight">{name}</p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{desc}</p>
                      <Badge className="mt-1 text-xs" style={{ background: `${RARITY_COLORS[rarity]}20`, color: RARITY_COLORS[rarity] }}>
                        {rarity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Connected platforms */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Connected Platforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {PLATFORMS.map(({ name, color, username: uname, stats }) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: color }}>
                      {name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">@{uname} · {stats}</p>
                    </div>
                    <CheckCircle className="h-4 w-4 text-[#10B981] shrink-0" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tech stack */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "Go", "Python", "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "K8s", "AWS", "FastAPI"].map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
