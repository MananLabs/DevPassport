"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Globe, GraduationCap, Code2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type Scope = "global" | "country" | "university" | "technology";
type Category = "overall" | "problem_solving" | "open_source" | "projects" | "trust";

export default function LeaderboardPage() {
  const [scope, setScope] = useState<Scope>("global");
  const [category, setCategory] = useState<Category>("overall");

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Global Leaderboard</h1>
          <p className="text-[var(--muted-foreground)] text-sm mt-0.5">Top developers ranked by merit score</p>
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
                    {s === "country" && <span>🌍</span>}
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

        {/* Empty state */}
        <Card>
          <CardContent className="p-0">
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--secondary)]">
                <Users className="h-8 w-8 text-[var(--border)]" />
              </div>
              <div>
                <p className="font-semibold text-[var(--muted-foreground)]">Leaderboard is empty</p>
                <p className="text-sm text-[var(--muted-foreground)] mt-1 max-w-xs">
                  Rankings will populate as developers connect their accounts and earn scores
                </p>
              </div>
              <Button size="sm" variant="outline" onClick={() => window.location.href = "/connections"}>
                Connect your accounts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
