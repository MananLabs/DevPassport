"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Award, CheckCircle, Trophy, BookOpen, Star, Zap, Pencil } from "lucide-react";

const ACHIEVEMENTS = [
  {
    type: "HACKATHON",
    icon: Trophy,
    color: "#F59E0B",
    title: "1st Place — HackMIT 2024",
    org: "MIT",
    date: "Oct 2024",
    desc: "Built an AI-powered code review tool in 48 hours",
    verified: true,
    points: 120,
  },
  {
    type: "COMPETITION",
    icon: Star,
    color: "#4F46E5",
    title: "Codeforces Expert Rating (1847)",
    org: "Codeforces",
    date: "Sep 2024",
    desc: "Achieved Expert status through 143 rated contests",
    verified: true,
    points: 95,
  },
  {
    type: "CERTIFICATION",
    icon: Award,
    color: "#10B981",
    title: "AWS Solutions Architect Professional",
    org: "Amazon Web Services",
    date: "Aug 2024",
    desc: "Advanced certification for cloud architecture",
    verified: true,
    points: 80,
  },
  {
    type: "PUBLICATION",
    icon: BookOpen,
    color: "#8B5CF6",
    title: "Efficient Distributed Caching Strategies",
    org: "arXiv",
    date: "Jun 2024",
    desc: "Research paper on cache invalidation in microservices",
    verified: false,
    points: 60,
  },
  {
    type: "AWARD",
    icon: Zap,
    color: "#EC4899",
    title: "Google Open Source Award 2023",
    org: "Google",
    date: "Dec 2023",
    desc: "Recognized for contributions to the Kubernetes ecosystem",
    verified: true,
    points: 150,
  },
];

const TYPE_LABELS: Record<string, string> = {
  HACKATHON: "Hackathon",
  COMPETITION: "Competition",
  CERTIFICATION: "Certification",
  PUBLICATION: "Publication",
  AWARD: "Award",
};

export default function AchievementsPage() {
  const [filter, setFilter] = useState("ALL");
  const [showAdd, setShowAdd] = useState(false);

  const types = ["ALL", ...Object.keys(TYPE_LABELS)];
  const filtered = filter === "ALL" ? ACHIEVEMENTS : ACHIEVEMENTS.filter((a) => a.type === filter);
  const totalPoints = ACHIEVEMENTS.reduce((s, a) => s + a.points, 0);
  const verified = ACHIEVEMENTS.filter((a) => a.verified).length;

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Achievements</h1>
            <p className="text-[var(--muted-foreground)] text-sm mt-0.5">Hackathons, certifications, publications & awards</p>
          </div>
          <Button onClick={() => setShowAdd(true)} className="gap-1.5">
            <Plus className="h-4 w-4" />
            Add Achievement
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-[#4F46E5]">{ACHIEVEMENTS.length}</p>
            <p className="text-xs text-[var(--muted-foreground)]">Total Achievements</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-[#10B981]">{verified}</p>
            <p className="text-xs text-[var(--muted-foreground)]">Verified</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-[#F59E0B]">+{totalPoints}</p>
            <p className="text-xs text-[var(--muted-foreground)]">Score Impact</p>
          </Card>
        </div>

        {/* Add form */}
        {showAdd && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="border-[#4F46E5]/30">
              <CardHeader><CardTitle className="text-base">Add Achievement</CardTitle></CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Type</label>
                    <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all">
                      {Object.entries(TYPE_LABELS).map(([k, v]) => (
                        <option key={k} value={k}>{v}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Title *</label>
                    <input placeholder="Achievement title" className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Organization</label>
                    <input placeholder="MIT, AWS, Google, etc." className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Date</label>
                    <input type="month" className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Description</label>
                    <textarea placeholder="Brief description..." rows={2} className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all resize-none" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Verification URL (optional)</label>
                    <input placeholder="Link to certificate or proof" className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all" />
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button className="gap-1.5"><Plus className="h-4 w-4" />Add</Button>
                  <Button variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                filter === t
                  ? "bg-[#4F46E5] text-white"
                  : "bg-[var(--secondary)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {t === "ALL" ? "All" : TYPE_LABELS[t]}
              <span className="ml-1.5 text-xs opacity-60">
                {t === "ALL" ? ACHIEVEMENTS.length : ACHIEVEMENTS.filter(a => a.type === t).length}
              </span>
            </button>
          ))}
        </div>

        {/* Achievement list */}
        <div className="space-y-3">
          {filtered.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card className="p-5 group hover:border-[#4F46E5]/30 transition-all duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
                        style={{ backgroundColor: `${a.color}15` }}>
                        <Icon className="h-5 w-5" style={{ color: a.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <span className="font-semibold">{a.title}</span>
                          {a.verified ? (
                            <Badge variant="success" className="text-xs">
                              <CheckCircle className="h-3 w-3" />
                              Verified
                            </Badge>
                          ) : (
                            <Badge variant="warning" className="text-xs">Pending Review</Badge>
                          )}
                        </div>
                        <p className="text-sm text-[var(--muted-foreground)] mb-1">{a.org} · {a.date}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">{a.desc}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <Badge variant="primary" className="text-xs">+{a.points} pts</Badge>
                        <Badge variant="secondary" className="text-xs hidden sm:flex">{TYPE_LABELS[a.type]}</Badge>
                        <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-[var(--secondary)] text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 transition-opacity">
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
