"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScoreRing } from "@/components/ui/score-ring";
import {
  Search,
  Filter,
  Star,
  MapPin,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Heart,
  MessageCircle,
  Eye,
  Shield,
  TrendingUp,
  Users,
  LayoutDashboard,
  BookmarkPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const DEVELOPERS = [
  {
    id: "1",
    name: "Priya Sharma",
    username: "priya_codes",
    role: "ML Engineer",
    company: "DeepMind",
    country: "India 🇮🇳",
    university: "IIT Bombay",
    score: 981,
    trust: 97,
    globalRank: 2,
    tech: ["Python", "TensorFlow", "PyTorch", "Kubernetes", "Rust"],
    highlights: ["LeetCode 2800+", "100+ Research Citations", "Kaggle Master"],
    open: true,
  },
  {
    id: "2",
    name: "Alex Chen",
    username: "alexchen",
    role: "Senior SWE",
    company: "Google",
    country: "USA 🇺🇸",
    university: "MIT",
    score: 847,
    trust: 96,
    globalRank: 4352,
    tech: ["TypeScript", "Go", "React", "PostgreSQL", "Docker"],
    highlights: ["1,240 GitHub Stars", "Expert CF Rating", "Open Source Contrib"],
    open: false,
  },
  {
    id: "3",
    name: "Marcus Chen",
    username: "mchen_dev",
    role: "Staff Engineer",
    company: "Stripe",
    country: "USA 🇺🇸",
    university: "Stanford",
    score: 975,
    trust: 98,
    globalRank: 3,
    tech: ["Go", "Ruby", "React", "AWS", "Kafka"],
    highlights: ["500+ PRs merged", "15 Open Source libs", "System Design expert"],
    open: true,
  },
  {
    id: "4",
    name: "Yuki Tanaka",
    username: "yuki_t",
    role: "Backend Engineer",
    company: "Mercari",
    country: "Japan 🇯🇵",
    university: "Tokyo University",
    score: 952,
    trust: 94,
    globalRank: 7,
    tech: ["Go", "Microservices", "gRPC", "PostgreSQL", "Redis"],
    highlights: ["AtCoder Orange", "50+ OSS Contribs", "Speaker at GopherCon"],
    open: true,
  },
];

const SHORTLISTED = DEVELOPERS.filter((_, i) => i < 2);

export default function RecruiterPage() {
  const [search, setSearch] = useState("");
  const [minScore, setMinScore] = useState(600);
  const [country, setCountry] = useState("All");
  const [shortlisted, setShortlisted] = useState<string[]>([]);
  const [view, setView] = useState<"search" | "shortlist">("search");

  const toggle = (id: string) => setShortlisted((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
  const filtered = DEVELOPERS.filter((d) =>
    d.score >= minScore &&
    (country === "All" || d.country.includes(country)) &&
    (d.name.toLowerCase().includes(search.toLowerCase()) || d.tech.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--background)]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--card)] flex flex-col">
        <div className="flex h-16 items-center gap-2.5 border-b border-[var(--border)] px-5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4F46E5]">
            <span className="text-white font-bold text-xs">D</span>
          </div>
          <div>
            <span className="font-bold text-sm">DevPassport</span>
            <Badge className="ml-1.5 text-xs bg-[#14B8A6] text-white">Recruiter</Badge>
          </div>
        </div>

        {/* Filters */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
          <div>
            <label className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 block">Min Score</label>
            <input
              type="range" min={0} max={1000} value={minScore}
              onChange={(e) => setMinScore(Number(e.target.value))}
              className="w-full accent-[#4F46E5]"
            />
            <div className="flex justify-between text-xs text-[var(--muted-foreground)] mt-1">
              <span>0</span>
              <span className="font-bold text-[#4F46E5]">{minScore}</span>
              <span>1000</span>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 block">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-3 py-2 text-sm outline-none focus:border-[#4F46E5]"
            >
              {["All", "USA", "India", "Japan", "Germany", "UK", "Brazil"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 block">Tech Stack</label>
            <div className="flex flex-wrap gap-1.5">
              {["TypeScript", "Go", "Python", "React", "Rust"].map((t) => (
                <button key={t} className="rounded-lg border border-[var(--border)] px-2 py-1 text-xs hover:border-[#4F46E5] hover:text-[#4F46E5] transition-all">
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 block">Open to Work</label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-[#4F46E5]" defaultChecked />
              <span className="text-sm">Only open candidates</span>
            </label>
          </div>

          <div>
            <label className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 block">Min Trust Score</label>
            <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-3 py-2 text-sm outline-none focus:border-[#4F46E5]">
              <option>Any</option>
              <option>70+</option>
              <option>80+</option>
              <option>90+</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center gap-4 border-b border-[var(--border)] bg-[var(--card)] px-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, skill, technology..."
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] pl-9 pr-4 py-2 text-sm outline-none focus:border-[#4F46E5] transition-all"
            />
          </div>
          <div className="flex gap-2 ml-auto">
            <Button
              size="sm"
              variant={view === "search" ? "default" : "outline"}
              onClick={() => setView("search")}
              className="gap-1.5"
            >
              <Search className="h-3.5 w-3.5" />
              Search
            </Button>
            <Button
              size="sm"
              variant={view === "shortlist" ? "default" : "outline"}
              onClick={() => setView("shortlist")}
              className="gap-1.5"
            >
              <BookmarkPlus className="h-3.5 w-3.5" />
              Shortlist ({shortlisted.length})
            </Button>
          </div>
        </header>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-[var(--muted-foreground)]">
              {view === "search" ? `${filtered.length} developers found` : `${shortlisted.length} shortlisted`}
            </p>
          </div>

          {(view === "search" ? filtered : DEVELOPERS.filter((d) => shortlisted.includes(d.id))).map((dev, i) => (
            <motion.div
              key={dev.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Card className="p-5 hover:border-[#4F46E5]/30 transition-all duration-200">
                <CardContent className="p-0">
                  <div className="flex items-start gap-5">
                    {/* Avatar + score */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="relative">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#6366F1] flex items-center justify-center text-2xl text-white font-bold">
                          {dev.name[0]}
                        </div>
                        {dev.open && (
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#10B981] border-2 border-[var(--background)]" title="Open to work" />
                        )}
                      </div>
                      <ScoreRing score={dev.score} size={70} strokeWidth={5} showLabel={false} animate={false} />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <h3 className="font-semibold text-base">{dev.name}</h3>
                        <Badge variant="primary" className="text-xs">#{dev.globalRank.toLocaleString()}</Badge>
                        {dev.open && <Badge variant="success" className="text-xs">Open to Work</Badge>}
                      </div>

                      <div className="flex flex-wrap gap-3 text-xs text-[var(--muted-foreground)] mb-3">
                        <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{dev.role} @ {dev.company}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{dev.country}</span>
                        <span className="flex items-center gap-1"><GraduationCap className="h-3 w-3" />{dev.university}</span>
                        <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-[#10B981]" />Trust: {dev.trust}%</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {dev.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {dev.highlights.map((h) => (
                          <span key={h} className="text-xs text-[var(--muted-foreground)] bg-[var(--secondary)] rounded-lg px-2 py-1">
                            ⭐ {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 shrink-0">
                      <Link href={`/${dev.username}`}>
                        <Button size="sm" variant="outline" className="gap-1.5 w-full">
                          <Eye className="h-3.5 w-3.5" />
                          Profile
                        </Button>
                      </Link>
                      <Button size="sm" className="gap-1.5 w-full">
                        <MessageCircle className="h-3.5 w-3.5" />
                        Contact
                      </Button>
                      <button
                        onClick={() => toggle(dev.id)}
                        className={cn(
                          "flex items-center justify-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-medium transition-all",
                          shortlisted.includes(dev.id)
                            ? "border-red-400 text-red-400 bg-red-50 dark:bg-red-900/20"
                            : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-red-300 hover:text-red-400"
                        )}
                      >
                        <Heart className={cn("h-3.5 w-3.5", shortlisted.includes(dev.id) && "fill-current")} />
                        {shortlisted.includes(dev.id) ? "Saved" : "Save"}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
