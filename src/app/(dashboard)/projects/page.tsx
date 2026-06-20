"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FolderOpen, Star, GitBranch, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  name: string;
  desc: string;
  github: string;
  live: string;
  tech: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", desc: "", github: "", live: "", tech: "" });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setProjects((p) => [
      ...p,
      {
        id: Date.now().toString(),
        name: form.name,
        desc: form.desc,
        github: form.github,
        live: form.live,
        tech: form.tech,
      },
    ]);
    setForm({ name: "", desc: "", github: "", live: "", tech: "" });
    setShowAdd(false);
  };

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
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="border-[#4F46E5]/30">
              <CardHeader><CardTitle className="text-base">Add New Project</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleAdd} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Project Name *</label>
                    <input
                      required
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
                    <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Description</label>
                    <textarea
                      value={form.desc}
                      onChange={(e) => setForm(f => ({ ...f, desc: e.target.value }))}
                      placeholder="What does this project do?"
                      rows={3}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2 flex gap-3">
                    <Button type="submit" className="gap-1.5"><Plus className="h-4 w-4" />Add Project</Button>
                    <Button type="button" variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Projects or empty state */}
        {projects.length === 0 ? (
          <Card>
            <CardContent className="p-0">
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--secondary)]">
                  <FolderOpen className="h-8 w-8 text-[var(--border)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--muted-foreground)]">No projects yet</p>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">Add your first project to showcase your work</p>
                </div>
                <Button size="sm" onClick={() => setShowAdd(true)} className="gap-1.5">
                  <Plus className="h-4 w-4" /> Add Project
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((p) => (
              <Card key={p.id} className="p-5">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-1">{p.name}</h3>
                  {p.desc && <p className="text-sm text-[var(--muted-foreground)] mb-3">{p.desc}</p>}
                  {p.tech && (
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.split(",").map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">{t.trim()}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
