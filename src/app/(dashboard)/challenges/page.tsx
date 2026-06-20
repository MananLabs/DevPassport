"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

export default function ChallengesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Community Challenges</h1>
          <p className="text-[var(--muted-foreground)] text-sm mt-0.5">Compete, learn, and earn exclusive badges</p>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--secondary)]">
                <Zap className="h-8 w-8 text-[var(--border)]" />
              </div>
              <div>
                <p className="font-semibold text-[var(--muted-foreground)]">No active challenges</p>
                <p className="text-sm text-[var(--muted-foreground)] mt-1 max-w-xs">
                  Community challenges will appear here once they are launched
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
