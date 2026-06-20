"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users, Trophy, Activity, AlertTriangle,
  Search, BarChart2, Settings, Flag,
  LayoutDashboard, Award,
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/scores", label: "Scores", icon: Trophy },
  { href: "/admin/reports", label: "Reports", icon: Flag },
  { href: "/admin/badges", label: "Badges", icon: Award },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

function EmptyTable({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-2 text-center">
      <p className="text-sm text-[var(--muted-foreground)]">{message}</p>
    </div>
  );
}

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
          <div className="ml-auto">
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
              { label: "Total Users", icon: Users, color: "#4F46E5" },
              { label: "Active Today", icon: Activity, color: "#10B981" },
              { label: "Avg Score", icon: Trophy, color: "#F59E0B" },
              { label: "Pending Reviews", icon: AlertTriangle, color: "#EF4444" },
            ].map(({ label, icon: Icon, color }) => (
              <Card key={label} className="p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg mb-3" style={{ backgroundColor: `${color}15` }}>
                  <Icon className="h-4 w-4" style={{ color }} />
                </div>
                <p className="text-2xl font-bold text-[var(--muted-foreground)]">—</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{label}</p>
              </Card>
            ))}
          </div>

          {/* Charts empty */}
          <div className="grid lg:grid-cols-2 gap-5">
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-sm">Weekly Signups</CardTitle></CardHeader>
              <CardContent>
                <EmptyTable message="No signup data yet" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-sm">Platform Distribution</CardTitle></CardHeader>
              <CardContent>
                <EmptyTable message="No connected accounts yet" />
              </CardContent>
            </Card>
          </div>

          {/* Pending verifications */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">Pending Verifications</CardTitle>
                <Badge variant="secondary">0 pending</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <EmptyTable message="No pending verifications" />
            </CardContent>
          </Card>

          {/* Reports */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">User Reports</CardTitle>
                <Badge variant="secondary">0 open</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <EmptyTable message="No reports filed" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
