"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, TrendingUp, Activity, RadarIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function EmptyChart({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-48 gap-3 text-center">
      <Icon className="h-10 w-10 text-[var(--border)]" />
      <div>
        <p className="text-sm font-medium text-[var(--muted-foreground)]">{title}</p>
        <p className="text-xs text-[var(--muted-foreground)] mt-1">{desc}</p>
      </div>
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Analytics</h1>
            <p className="text-[var(--muted-foreground)] text-sm mt-0.5">Track your developer growth over time</p>
          </div>
          <Link href="/connections">
            <Button size="sm" variant="outline">Connect accounts to unlock</Button>
          </Link>
        </div>

        {/* KPI placeholders */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Score This Month",
            "Rank Improvement",
            "Contributions",
            "Problems Solved",
          ].map((label) => (
            <Card key={label} className="p-5">
              <p className="text-xs text-[var(--muted-foreground)] mb-1">{label}</p>
              <p className="text-2xl font-bold text-[var(--muted-foreground)]">—</p>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-5">
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Credit Score History</CardTitle></CardHeader>
            <CardContent>
              <EmptyChart
                icon={TrendingUp}
                title="No history yet"
                desc="Your score chart will appear here after connecting accounts"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Global Rank History</CardTitle></CardHeader>
            <CardContent>
              <EmptyChart
                icon={BarChart2}
                title="No rank history yet"
                desc="Rank tracking begins once your score is calculated"
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Weekly Activity</CardTitle></CardHeader>
            <CardContent>
              <EmptyChart
                icon={Activity}
                title="No activity data"
                desc="Activity syncs automatically after connecting GitHub or LeetCode"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Developer DNA Radar</CardTitle></CardHeader>
            <CardContent>
              <EmptyChart
                icon={RadarIcon}
                title="DNA not calculated"
                desc="Connect multiple platforms to generate your developer personality profile"
              />
            </CardContent>
          </Card>
        </div>

        {/* Skill growth */}
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base">Skill Growth</CardTitle></CardHeader>
          <CardContent>
            <EmptyChart
              icon={TrendingUp}
              title="No skill data yet"
              desc="Skill growth tracking will appear as you sync your platform accounts"
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
