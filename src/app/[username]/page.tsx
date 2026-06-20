"use client";

import { Navbar } from "@/components/layout/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield, MapPin, GraduationCap, Briefcase, Globe,
  Share2, Download, Award, FolderOpen, UserX,
} from "lucide-react";
import Link from "next/link";

export default function PublicProfilePage({ params }: { params: { username: string } }) {
  const username = params.username;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar isAuthenticated={false} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#14B8A6]/5 border-b border-[var(--border)] pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar placeholder */}
            <div className="h-24 w-24 rounded-3xl bg-[var(--secondary)] border border-[var(--border)] flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-[var(--muted-foreground)]">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">@{username}</h1>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)] mb-3">
                <span className="flex items-center gap-1.5 text-[var(--muted-foreground)]/50">
                  <MapPin className="h-3.5 w-3.5" />—
                </span>
                <span className="flex items-center gap-1.5 text-[var(--muted-foreground)]/50">
                  <GraduationCap className="h-3.5 w-3.5" />—
                </span>
                <span className="flex items-center gap-1.5 text-[var(--muted-foreground)]/50">
                  <Briefcase className="h-3.5 w-3.5" />—
                </span>
              </div>
            </div>

            <div className="flex gap-2 shrink-0 flex-wrap">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Share2 className="h-3.5 w-3.5" />Share
              </Button>
            </div>
          </div>

          {/* Score strip — no data */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Credit Score", color: "#4F46E5" },
              { label: "Trust Score", color: "#10B981" },
              { label: "Global Rank", color: "#F59E0B" },
              { label: "Country Rank", color: "#8B5CF6" },
            ].map(({ label, color }) => (
              <div key={label} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-center">
                <p className="text-xl font-bold text-[var(--muted-foreground)]">—</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Score breakdown */}
            <Card>
              <CardHeader><CardTitle>Score Breakdown</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                  <Shield className="h-10 w-10 text-[var(--border)]" />
                  <p className="text-sm text-[var(--muted-foreground)]">No score data yet</p>
                  <p className="text-xs text-[var(--muted-foreground)]">Connect platform accounts to generate a score</p>
                </div>
              </CardContent>
            </Card>

            {/* DNA */}
            <Card>
              <CardHeader><CardTitle>Developer DNA</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                  <div className="h-10 w-10 text-[var(--border)] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10">
                      <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">DNA not generated yet</p>
                  <p className="text-xs text-[var(--muted-foreground)]">Available after connecting multiple platforms</p>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Projects</CardTitle>
                  <Badge variant="secondary">0 projects</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                  <FolderOpen className="h-10 w-10 text-[var(--border)]" />
                  <p className="text-sm text-[var(--muted-foreground)]">No projects showcased yet</p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader><CardTitle>Achievements</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                  <Award className="h-10 w-10 text-[var(--border)]" />
                  <p className="text-sm text-[var(--muted-foreground)]">No achievements added yet</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side column */}
          <div className="space-y-5">
            {/* Score growth */}
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-sm">Score Growth</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-8 gap-2 text-center">
                  <p className="text-xs text-[var(--muted-foreground)]">No history yet</p>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">Badges</CardTitle>
                  <span className="text-xs text-[var(--muted-foreground)]">0 earned</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-8 gap-2 text-center">
                  <p className="text-xs text-[var(--muted-foreground)]">No badges earned yet</p>
                </div>
              </CardContent>
            </Card>

            {/* Connected platforms */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Connected Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-8 gap-2 text-center">
                  <p className="text-xs text-[var(--muted-foreground)]">No platforms connected</p>
                </div>
              </CardContent>
            </Card>

            {/* Tech stack */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-8 gap-2 text-center">
                  <p className="text-xs text-[var(--muted-foreground)]">No tech stack listed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
