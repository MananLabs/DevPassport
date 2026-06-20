"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Link2,
  TrendingUp,
  Trophy,
  Shield,
  Globe,
  Award,
  ArrowRight,
  BarChart2,
} from "lucide-react";

function EmptyScoreRing() {
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={140} height={140} viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="60" fill="none" stroke="var(--secondary)" strokeWidth="10" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-[var(--muted-foreground)]">—</span>
        <span className="text-xs text-[var(--muted-foreground)] mt-0.5">No score yet</span>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-[var(--muted-foreground)] text-sm mt-0.5">
              Connect your developer accounts to calculate your score
            </p>
          </div>
          <Link href="/connections">
            <Button size="sm" className="gap-1.5">
              <Link2 className="h-3.5 w-3.5" />
              Connect Accounts
            </Button>
          </Link>
        </div>

        {/* Score cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card className="text-center p-6">
            <CardContent className="p-0 flex flex-col items-center gap-4">
              <EmptyScoreRing />
              <div>
                <p className="text-sm font-medium text-[var(--muted-foreground)]">Developer Credit Score</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">Connect accounts to calculate</p>
              </div>
            </CardContent>
          </Card>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {[
              { label: "Trust Score", icon: Shield, color: "#14B8A6" },
              { label: "Global Rank", icon: Globe, color: "#F59E0B" },
              { label: "Country Rank", icon: Trophy, color: "#8B5CF6" },
              { label: "Badges Earned", icon: Award, color: "#EC4899" },
            ].map(({ label, icon: Icon, color }) => (
              <Card key={label} className="p-5">
                <CardContent className="p-0">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg mb-3" style={{ backgroundColor: `${color}15` }}>
                    <Icon className="h-4 w-4" style={{ color }} />
                  </div>
                  <p className="text-2xl font-bold text-[var(--muted-foreground)]">—</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Empty chart state */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Score Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-48 gap-3 text-center">
              <BarChart2 className="h-10 w-10 text-[var(--border)]" />
              <div>
                <p className="text-sm font-medium text-[var(--muted-foreground)]">No score history yet</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">Your score chart will appear here after you connect accounts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category scores empty */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Category Breakdown</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Problem Solving", "Engineering", "Open Source", "Projects", "Collaboration", "Knowledge Sharing"].map((label) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-[var(--muted-foreground)]">{label}</span>
                      <span className="text-sm text-[var(--muted-foreground)] ml-2">—</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[var(--secondary)]" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom grid */}
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center h-32 gap-2 text-center">
                <TrendingUp className="h-8 w-8 text-[var(--border)]" />
                <p className="text-sm text-[var(--muted-foreground)]">No activity yet</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Connected Platforms</CardTitle>
                <Link href="/connections" className="text-xs text-[#4F46E5] hover:underline">Manage</Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center h-32 gap-3 text-center">
                <Link2 className="h-8 w-8 text-[var(--border)]" />
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">No platforms connected</p>
                  <Link href="/connections">
                    <Button size="sm" variant="link" className="h-auto p-0 text-xs mt-1">
                      Connect now <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
