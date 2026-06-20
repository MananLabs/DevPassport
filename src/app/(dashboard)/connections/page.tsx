"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PLATFORMS = [
  { name: "GitHub", bg: "#24292E", icon: "GH", category: "Engineering", scoreImpact: "High" },
  { name: "GitLab", bg: "#FC6D26", icon: "GL", category: "Engineering", scoreImpact: "High" },
  { name: "LeetCode", bg: "#FFA116", icon: "LC", category: "Problem Solving", scoreImpact: "High" },
  { name: "Codeforces", bg: "#1F8DD6", icon: "CF", category: "Problem Solving", scoreImpact: "High" },
  { name: "HackerRank", bg: "#00EA64", icon: "HR", category: "Problem Solving", scoreImpact: "Medium" },
  { name: "CodeChef", bg: "#5B4638", icon: "CC", category: "Problem Solving", scoreImpact: "Medium" },
  { name: "AtCoder", bg: "#955FFF", icon: "AC", category: "Problem Solving", scoreImpact: "Medium" },
  { name: "Kaggle", bg: "#20BEFF", icon: "KG", category: "ML / Data Science", scoreImpact: "High" },
  { name: "Dev.to", bg: "#0A0A0A", icon: "DV", category: "Knowledge Sharing", scoreImpact: "Medium" },
  { name: "Medium", bg: "#00AB6C", icon: "MD", category: "Knowledge Sharing", scoreImpact: "Medium" },
];

export default function ConnectionsPage() {
  const [connecting, setConnecting] = useState<string | null>(null);

  const handleConnect = async (name: string) => {
    setConnecting(name);
    await new Promise((r) => setTimeout(r, 1000));
    setConnecting(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Connected Accounts</h1>
          <p className="text-[var(--muted-foreground)] text-sm mt-0.5">
            Connect your developer platforms to calculate your score
          </p>
        </div>

        {/* Status summary */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-[var(--muted-foreground)]">0</p>
            <p className="text-xs text-[var(--muted-foreground)]">Connected</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-[#F59E0B]">{PLATFORMS.length}</p>
            <p className="text-xs text-[var(--muted-foreground)]">Available</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-[var(--muted-foreground)]">—</p>
            <p className="text-xs text-[var(--muted-foreground)]">Score Impact</p>
          </Card>
        </div>

        {/* Platform grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {PLATFORMS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Card className="p-5 border-dashed hover:border-[#4F46E5]/40 hover:bg-[#4F46E5]/3 transition-all duration-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ backgroundColor: p.bg }}
                    >
                      {p.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">{p.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-[var(--muted-foreground)]">{p.category}</span>
                        <Badge
                          variant={p.scoreImpact === "High" ? "primary" : "secondary"}
                          className="text-xs"
                        >
                          {p.scoreImpact} impact
                        </Badge>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="shrink-0"
                      loading={connecting === p.name}
                      onClick={() => handleConnect(p.name)}
                    >
                      Connect
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
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
