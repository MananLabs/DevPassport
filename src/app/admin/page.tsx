"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Trophy,
  Award,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Ban,
  Search,
  BarChart2,
  Settings,
  Flag,
  Database,
  Activity,
  LayoutDashboard,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
} from "recharts";

const SIGNUPS = [
  { day: "Mon", users: 420 },
  { day: "Tue", users: 380 },
  { day: "Wed", users: 540 },
  { day: "Thu", users: 620 },
  { day: "Fri", users: 490 },
  { day: "Sat", users: 310 },
  { day: "Sun", users: 280 },
];

const PENDING_VERIFICATIONS = [
  { user: "priya_codes", type: "Achievement", title: "HackIndia Winner 2024", submitted: "2h ago" },
  { user: "dev_sam", type: "Achievement", title: "AWS Certification", submitted: "5h ago" },
  { user: "techbro42", type: "Account", title: "Suspicious GitHub link", submitted: "1d ago" },
  { user: "ml_wizard", type: "Achievement", title: "Published Research Paper", submitted: "2d ago" },
];

const REPORTS = [
  { user: "spam_dev", reason: "Fake contributions", reporter: "alexchen", status: "pending" },
  { user: "fake_score", reason: "Manipulated LeetCode data", reporter: "priya_s", status: "pending" },
  { user: "copy_cat", reason: "Plagiarized projects", reporter: "mchen", status: "resolved" },
];

const NAV = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/scores", label: "Scores", icon: Trophy },
  { href: "/admin/reports", label: "Reports", icon: Flag },
  { href: "/admin/badges", label: "Badges", icon: Award },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminPage() {
  const [activeNav, setActiveNav] = useState("/admin");

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--background)]">
      {/* Sidebar */}
      <aside className="w-56 border-r border-[var(--border)] bg-[var(--card)] flex flex-col">
        <div className="flex h-16 items-center gap-2 border-b border-[var(--border)] px-5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4F46E5]">
            <span className="text-white font-bold text-xs">D</span>
          </div>
          <div>
            <span className="font-bold text-sm">DevPassport</span>
            <Badge variant="destructive" className="ml-1.5 text-xs">Admin</Badge>
          </div>
        </div>
        <nav className="flex-1 px-3 py-3">
          {NAV.map(({ href, label, icon: Icon }) => (
            <button
              key={href}
              onClick={() => setActiveNav(href)}
              className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium mb-0.5 transition-all text-left ${
                activeNav === href
                  ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-[var(--border)]">
          <Link href="/dashboard" className="text-xs text-[var(--muted-foreground)] hover:text-[#4F46E5]">← Back to App</Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-10 flex h-16 items-center border-b border-[var(--border)] bg-[var(--card)]/90 backdrop-blur px-6">
          <h1 className="font-bold text-lg">Admin Panel</h1>
          <div className="ml-auto flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input
                placeholder="Search users..."
                className="rounded-xl border border-[var(--border)] bg-[var(--secondary)] pl-9 pr-4 py-2 text-sm outline-none focus:border-[#4F46E5] w-56"
              />
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6 max-w-6xl">
          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Users", value: "1,284,920", change: "+4.2%", color: "#4F46E5", icon: Users },
              { label: "Active Today", value: "48,291", change: "+12.1%", color: "#10B981", icon: Activity },
              { label: "Avg Score", value: "524", change: "+8 pts", color: "#F59E0B", icon: Trophy },
              { label: "Pending Reviews", value: "47", change: "12 urgent", color: "#EF4444", icon: AlertTriangle },
            ].map(({ label, value, change, color, icon: Icon }) => (
              <Card key={label} className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `${color}15` }}>
                    <Icon className="h-4.5 w-4.5" style={{ color }} />
                  </div>
                </div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{label}</p>
                <p className="text-xs mt-0.5" style={{ color }}>{change}</p>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-5">
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-sm">Weekly Signups</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={SIGNUPS}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="day" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <Bar dataKey="users" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-sm">Platform Distribution</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3 mt-2">
                  {[
                    { name: "GitHub", pct: 89, color: "#24292E" },
                    { name: "LeetCode", pct: 67, color: "#FFA116" },
                    { name: "Codeforces", pct: 42, color: "#1F8DD6" },
                    { name: "HackerRank", pct: 38, color: "#00EA64" },
                    { name: "Kaggle", pct: 23, color: "#20BEFF" },
                  ].map(({ name, pct, color }) => (
                    <div key={name} className="flex items-center gap-3">
                      <span className="w-24 text-xs text-[var(--muted-foreground)]">{name}</span>
                      <div className="flex-1 h-2 rounded-full bg-[var(--secondary)] overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                      </div>
                      <span className="text-xs font-medium w-8 text-right">{pct}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pending verifications */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">Pending Verifications</CardTitle>
                <Badge variant="warning">{PENDING_VERIFICATIONS.length} pending</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-[var(--border)]">
                {PENDING_VERIFICATIONS.map((v) => (
                  <div key={v.user + v.title} className="flex items-center gap-4 py-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--secondary)] text-sm font-bold">
                      {v.user[0].toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{v.title}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">@{v.user} · {v.type} · {v.submitted}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                      <Button size="sm" className="h-7 px-2 text-xs bg-[#10B981] hover:bg-[#059669] text-white">
                        <CheckCircle className="h-3.5 w-3.5" />
                      </Button>
                      <Button size="sm" variant="destructive" className="h-7 px-2 text-xs">
                        <XCircle className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reports */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">User Reports</CardTitle>
                <Badge variant="destructive">{REPORTS.filter(r => r.status === "pending").length} open</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-[var(--border)]">
                {REPORTS.map((r) => (
                  <div key={r.user} className="flex items-center gap-4 py-3">
                    <Flag className={`h-4 w-4 shrink-0 ${r.status === "pending" ? "text-red-500" : "text-[var(--muted-foreground)]"}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">@{r.user}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{r.reason} · Reported by @{r.reporter}</p>
                    </div>
                    <Badge variant={r.status === "pending" ? "destructive" : "success"} className="text-xs capitalize">
                      {r.status}
                    </Badge>
                    {r.status === "pending" && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-7 px-2 text-xs">Review</Button>
                        <Button size="sm" variant="destructive" className="h-7 px-2 text-xs">
                          <Ban className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
