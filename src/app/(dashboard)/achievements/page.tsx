"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Award } from "lucide-react";

const TYPE_LABELS: Record<string, string> = {
  HACKATHON: "Hackathon",
  COMPETITION: "Competition",
  CERTIFICATION: "Certification",
  PUBLICATION: "Publication",
  AWARD: "Award",
  CONFERENCE: "Conference",
  OTHER: "Other",
};

interface Achievement {
  id: string;
  type: string;
  title: string;
  org: string;
  date: string;
  desc: string;
}

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [filter, setFilter] = useState("ALL");
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ type: "HACKATHON", title: "", org: "", date: "", desc: "" });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setAchievements((a) => [...a, { id: Date.now().toString(), ...form }]);
    setForm({ type: "HACKATHON", title: "", org: "", date: "", desc: "" });
    setShowAdd(false);
  };

  const types = ["ALL", ...Object.keys(TYPE_LABELS)];
  const filtered = filter === "ALL" ? achievements : achievements.filter((a) => a.type === filter);

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
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-[var(--muted-foreground)]">{achievements.length || "—"}</p>
            <p className="text-xs text-[var(--muted-foreground)]">Total Achievements</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-[var(--muted-foreground)]">—</p>
            <p className="text-xs text-[var(--muted-foreground)]">Score Impact</p>
          </Card>
        </div>

        {/* Add form */}
        {showAdd && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="border-[#4F46E5]/30">
              <CardHeader><CardTitle className="text-base">Add Achievement</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleAdd} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Type</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm(f => ({ ...f, type: e.target.value }))}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
                    >
                      {Object.entries(TYPE_LABELS).map(([k, v]) => (
                        <option key={k} value={k}>{v}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Title *</label>
                    <input
                      required
                      value={form.title}
                      onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))}
                      placeholder="Achievement title"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Organization</label>
                    <input
                      value={form.org}
                      onChange={(e) => setForm(f => ({ ...f, org: e.target.value }))}
                      placeholder="MIT, AWS, Google, etc."
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Date</label>
                    <input
                      type="month"
                      value={form.date}
                      onChange={(e) => setForm(f => ({ ...f, date: e.target.value }))}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Description</label>
                    <textarea
                      value={form.desc}
                      onChange={(e) => setForm(f => ({ ...f, desc: e.target.value }))}
                      placeholder="Brief description..."
                      rows={2}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2 flex gap-3">
                    <Button type="submit" className="gap-1.5"><Plus className="h-4 w-4" />Add</Button>
                    <Button type="button" variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
                  </div>
                </form>
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
            </button>
          ))}
        </div>

        {/* List or empty */}
        {filtered.length === 0 ? (
          <Card>
            <CardContent className="p-0">
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--secondary)]">
                  <Award className="h-8 w-8 text-[var(--border)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--muted-foreground)]">No achievements yet</p>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">Add hackathons, certifications, awards and more</p>
                </div>
                <Button size="sm" onClick={() => setShowAdd(true)} className="gap-1.5">
                  <Plus className="h-4 w-4" /> Add Achievement
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filtered.map((a) => (
              <Card key={a.id} className="p-5">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F46E5]/10 shrink-0">
                      <Award className="h-5 w-5 text-[#4F46E5]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold">{a.title}</span>
                        <Badge variant="secondary" className="text-xs">{TYPE_LABELS[a.type]}</Badge>
                      </div>
                      {(a.org || a.date) && (
                        <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                          {[a.org, a.date].filter(Boolean).join(" · ")}
                        </p>
                      )}
                      {a.desc && <p className="text-sm text-[var(--muted-foreground)] mt-1">{a.desc}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
