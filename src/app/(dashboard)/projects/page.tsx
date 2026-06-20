"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Star, GitBranch, Users, ExternalLink, GitFork, Eye, Pencil, Trash2 } from "lucide-react";

const PROJECTS = [
  {
    id: "1",
    name: "OpenMetrics",
    desc: "Real-time metrics dashboard for distributed systems with automatic anomaly detection",
    githubUrl: "https://github.com",
    liveUrl: "https://openmetrics.dev",
    tech: ["Go", "React", "PostgreSQL", "Redis", "Docker"],
    stars: 1240,
    forks: 89,
    contributors: 12,
    featured: true,
    status: "active",
  },
  {
    id: "2",
    name: "AuthKit",
    desc: "Drop-in authentication for Next.js with 10+ providers, sessions, and MFA out of the box",
    githubUrl: "https://github.com",
    liveUrl: "https://authkit.dev",
    tech: ["TypeScript", "Next.js", "Prisma", "JWT"],
    stars: 847,
    forks: 64,
    contributors: 8,
    featured: true,
    status: "active",
  },
  {
    id: "3",
    name: "ML-Pipeline",
    desc: "Automated ML pipeline with experiment tracking, hyperparameter tuning and model serving",
    githubUrl: "https://github.com",
    liveUrl: null,
    tech: ["Python", "FastAPI", "Docker", "MLflow"],
    stars: 521,
    forks: 43,
    contributors: 5,
    featured: false,
    status: "active",
  },
  {
    id: "4",
    name: "DevCache",
    desc: "Smart caching library with automatic invalidation strategies",
    githubUrl: "https://github.com",
    liveUrl: null,
    tech: ["TypeScript", "Redis"],
    stars: 234,
    forks: 18,
    contributors: 3,
    featured: false,
    status: "archived",
  },
];

export default function ProjectsPage() {
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", desc: "", github: "", live: "", tech: "" });

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="text-[var(--muted-foreground)] text-sm mt-0.5">Showcase your work and boost your score</p>
          </div>
          <Button onClick={() => setShowAdd(true)} className="gap-1.5">
            <Plus className="h-4 w-4" />
            Add Project
          </Button>
        </div>

        {/* Add form */}
        {showAdd && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-[#4F46E5]/30">
              <CardHeader>
                <CardTitle className="text-base">Add New Project</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Project Name *</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="My Awesome Project"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">GitHub URL</label>
                    <input
                      value={form.github}
                      onChange={(e) => setForm(f => ({ ...f, github: e.target.value }))}
                      placeholder="https://github.com/..."
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Live URL</label>
                    <input
                      value={form.live}
                      onChange={(e) => setForm(f => ({ ...f, live: e.target.value }))}
                      placeholder="https://myproject.com"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Tech Stack</label>
                    <input
                      value={form.tech}
                      onChange={(e) => setForm(f => ({ ...f, tech: e.target.value }))}
                      placeholder="React, Node.js, PostgreSQL"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Description *</label>
                    <textarea
                      value={form.desc}
                      onChange={(e) => setForm(f => ({ ...f, desc: e.target.value }))}
                      placeholder="What does this project do?"
                      rows={3}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all resize-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button className="gap-1.5">
                    <Plus className="h-4 w-4" />
                    Add Project
                  </Button>
                  <Button variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total Projects", value: PROJECTS.length, color: "#4F46E5" },
            { label: "Total Stars", value: "2,842", color: "#F59E0B" },
            { label: "Score Impact", value: "+188 pts", color: "#10B981" },
          ].map(({ label, value, color }) => (
            <Card key={label} className="p-4 text-center">
              <p className="text-2xl font-bold" style={{ color }}>{value}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{label}</p>
            </Card>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Card className={`h-full group hover:border-[#4F46E5]/30 transition-all duration-200 ${p.featured ? "border-[#4F46E5]/20" : ""}`}>
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold group-hover:text-[#4F46E5] transition-colors">{p.name}</h3>
                      {p.featured && <Badge variant="primary" className="text-xs">Featured</Badge>}
                      {p.status === "archived" && <Badge variant="secondary" className="text-xs">Archived</Badge>}
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-[var(--secondary)] text-[var(--muted-foreground)]">
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-red-100 text-[var(--muted-foreground)] hover:text-red-500">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--muted-foreground)] mb-3 flex-1 leading-relaxed">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.slice(0, 4).map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                    {p.tech.length > 4 && (
                      <Badge variant="secondary" className="text-xs">+{p.tech.length - 4}</Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-xs text-[var(--muted-foreground)]">
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-[#F59E0B]" />
                        {p.stars.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch className="h-3.5 w-3.5" />
                        {p.forks}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {p.contributors}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {p.githubUrl && (
                        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-[var(--secondary)] text-[var(--muted-foreground)]">
                          <GitBranch className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-[var(--secondary)] text-[var(--muted-foreground)]">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
