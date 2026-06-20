"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, RefreshCw, Link2Off, ExternalLink, Clock } from "lucide-react";

const PLATFORMS = [
  {
    name: "GitHub",
    bg: "#24292E",
    icon: "GH",
    connected: true,
    username: "alexchen",
    lastSync: "2 hours ago",
    stats: { repos: 47, stars: 1240, contributions: 2847 },
    scoreImpact: "+340 pts",
    category: "Engineering",
  },
  {
    name: "LeetCode",
    bg: "#FFA116",
    icon: "LC",
    connected: true,
    username: "alex_chen",
    lastSync: "1 day ago",
    stats: { solved: 1247, contests: 89, rank: 12450 },
    scoreImpact: "+280 pts",
    category: "Problem Solving",
  },
  {
    name: "Codeforces",
    bg: "#1F8DD6",
    icon: "CF",
    connected: true,
    username: "alexc",
    lastSync: "3 days ago",
    stats: { rating: 1847, contests: 143, rank: "Expert" },
    scoreImpact: "+190 pts",
    category: "Problem Solving",
  },
  {
    name: "HackerRank",
    bg: "#00EA64",
    icon: "HR",
    connected: false,
    username: "",
    lastSync: null,
    stats: null,
    scoreImpact: "+up to 150 pts",
    category: "Problem Solving",
  },
  {
    name: "Kaggle",
    bg: "#20BEFF",
    icon: "KG",
    connected: false,
    username: "",
    lastSync: null,
    stats: null,
    scoreImpact: "+up to 200 pts",
    category: "ML/Data Science",
  },
  {
    name: "CodeChef",
    bg: "#5B4638",
    icon: "CC",
    connected: false,
    username: "",
    lastSync: null,
    stats: null,
    scoreImpact: "+up to 120 pts",
    category: "Problem Solving",
  },
  {
    name: "AtCoder",
    bg: "#955FFF",
    icon: "AC",
    connected: false,
    username: "",
    lastSync: null,
    stats: null,
    scoreImpact: "+up to 130 pts",
    category: "Problem Solving",
  },
  {
    name: "Dev.to",
    bg: "#0A0A0A",
    icon: "DV",
    connected: false,
    username: "",
    lastSync: null,
    stats: null,
    scoreImpact: "+up to 80 pts",
    category: "Knowledge Sharing",
  },
  {
    name: "Medium",
    bg: "#00AB6C",
    icon: "MD",
    connected: false,
    username: "",
    lastSync: null,
    stats: null,
    scoreImpact: "+up to 70 pts",
    category: "Knowledge Sharing",
  },
  {
    name: "GitLab",
    bg: "#FC6D26",
    icon: "GL",
    connected: false,
    username: "",
    lastSync: null,
    stats: null,
    scoreImpact: "+up to 200 pts",
    category: "Engineering",
  },
];

export default function ConnectionsPage() {
  const [syncing, setSyncing] = useState<string | null>(null);

  const handleSync = async (name: string) => {
    setSyncing(name);
    await new Promise((r) => setTimeout(r, 1500));
    setSyncing(null);
  };

  const connected = PLATFORMS.filter((p) => p.connected);
  const disconnected = PLATFORMS.filter((p) => !p.connected);

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Connected Accounts</h1>
          <p className="text-[var(--muted-foreground)] text-sm mt-0.5">
            Connect more platforms to increase your Developer Credit Score
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Connected", value: connected.length, color: "#10B981" },
            { label: "Available", value: disconnected.length, color: "#F59E0B" },
            { label: "Score Impact", value: "+810 pts", color: "#4F46E5" },
          ].map(({ label, value, color }) => (
            <Card key={label} className="p-4 text-center">
              <p className="text-2xl font-bold" style={{ color }}>{value}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{label}</p>
            </Card>
          ))}
        </div>

        {/* Connected platforms */}
        <div>
          <h2 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">
            Connected ({connected.length})
          </h2>
          <div className="space-y-3">
            {connected.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card className="p-5">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-sm"
                        style={{ backgroundColor: p.bg }}>
                        {p.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-semibold">{p.name}</span>
                          <Badge variant="success" className="text-xs">
                            <CheckCircle className="h-3 w-3" />
                            Connected
                          </Badge>
                          <Badge variant="secondary" className="text-xs">{p.category}</Badge>
                        </div>
                        <p className="text-sm text-[var(--muted-foreground)]">@{p.username}</p>

                        {p.stats && (
                          <div className="flex gap-4 mt-2 flex-wrap">
                            {Object.entries(p.stats).map(([key, val]) => (
                              <div key={key}>
                                <span className="text-sm font-semibold">{val.toLocaleString()}</span>
                                <span className="text-xs text-[var(--muted-foreground)] ml-1">{key}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-3 mt-2">
                          <Clock className="h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                          <span className="text-xs text-[var(--muted-foreground)]">Last sync: {p.lastSync}</span>
                          <Badge variant="success" className="text-xs">{p.scoreImpact}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleSync(p.name)}
                          loading={syncing === p.name}
                        >
                          <RefreshCw className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--muted-foreground)] hover:text-red-500">
                          <Link2Off className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Unconnected */}
        <div>
          <h2 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">
            Available to Connect ({disconnected.length})
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {disconnected.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card className="p-5 border-dashed hover:border-[#4F46E5]/40 transition-all duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0 opacity-70"
                        style={{ backgroundColor: p.bg }}>
                        {p.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{p.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-[var(--muted-foreground)]">{p.category}</span>
                          <Badge variant="warning" className="text-xs">{p.scoreImpact}</Badge>
                        </div>
                      </div>
                      <Button size="sm" className="shrink-0">
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
      </div>
    </DashboardLayout>
  );
}
