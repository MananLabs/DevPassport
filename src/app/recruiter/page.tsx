"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, BookmarkPlus } from "lucide-react";

export default function RecruiterPage() {
  const [search, setSearch] = useState("");
  const [minScore, setMinScore] = useState(600);
  const [country, setCountry] = useState("All");
  const [view, setView] = useState<"search" | "shortlist">("search");

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--background)]">
      {/* Sidebar filters */}
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
            <Button size="sm" variant={view === "search" ? "default" : "outline"} onClick={() => setView("search")} className="gap-1.5">
              <Search className="h-3.5 w-3.5" />Search
            </Button>
            <Button size="sm" variant={view === "shortlist" ? "default" : "outline"} onClick={() => setView("shortlist")} className="gap-1.5">
              <BookmarkPlus className="h-3.5 w-3.5" />Shortlist (0)
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <Card>
            <CardContent className="p-0">
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--secondary)]">
                  <Users className="h-8 w-8 text-[var(--border)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--muted-foreground)]">No developers found</p>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1 max-w-xs">
                    Developer profiles will appear here once users join and connect their accounts
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
