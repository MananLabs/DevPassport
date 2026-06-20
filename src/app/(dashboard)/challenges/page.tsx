"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Trophy, Calendar, Users, Star, CheckCircle, Clock } from "lucide-react";

const ACTIVE_CHALLENGES = [
  {
    id: "1",
    title: "30 Days Coding Challenge",
    desc: "Solve at least one problem per day for 30 consecutive days. No skips allowed!",
    type: "CODING",
    color: "#4F46E5",
    icon: Zap,
    endDate: "Jun 30, 2025",
    participants: 12840,
    myProgress: 18,
    totalDays: 30,
    reward: { badge: "30-Day Warrior", points: 200 },
    joined: true,
  },
  {
    id: "2",
    title: "Open Source Month",
    desc: "Submit at least 10 merged pull requests to open source projects during June.",
    type: "OPEN_SOURCE",
    color: "#10B981",
    icon: Star,
    endDate: "Jun 30, 2025",
    participants: 4320,
    myProgress: 7,
    totalDays: 10,
    reward: { badge: "Open Source Champion", points: 300 },
    joined: true,
  },
  {
    id: "3",
    title: "Hackathon Sprint",
    desc: "Build and deploy a complete project within 48 hours. Show us what you've got!",
    type: "HACKATHON",
    color: "#F59E0B",
    icon: Trophy,
    endDate: "Jul 15, 2025",
    participants: 2100,
    myProgress: 0,
    totalDays: null,
    reward: { badge: "Sprint Builder", points: 400 },
    joined: false,
  },
  {
    id: "4",
    title: "Knowledge Sharing Week",
    desc: "Publish 3 technical articles or tutorials that help other developers.",
    type: "LEARNING",
    color: "#8B5CF6",
    icon: Users,
    endDate: "Jul 7, 2025",
    participants: 1580,
    myProgress: 0,
    totalDays: 3,
    reward: { badge: "Educator Badge", points: 150 },
    joined: false,
  },
];

const MY_COMPLETED = [
  { title: "February Coding Sprint", date: "Feb 2025", rank: 147, badge: "Sprint Master" },
  { title: "Advent of Code 2024", date: "Dec 2024", rank: 892, badge: "Code Artisan" },
];

const LEADERBOARD = [
  { rank: 1, name: "Priya Sharma", score: 980, country: "🇮🇳" },
  { rank: 2, name: "Marcus Chen", score: 965, country: "🇺🇸" },
  { rank: 3, name: "Yuki Tanaka", score: 952, country: "🇯🇵" },
  { rank: 48, name: "Alex Chen (You)", score: 847, country: "🇺🇸", isMe: true },
];

export default function ChallengesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Community Challenges</h1>
          <p className="text-[var(--muted-foreground)] text-sm mt-0.5">Compete, learn, and earn exclusive badges</p>
        </div>

        {/* Active challenges */}
        <div>
          <h2 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">Active Challenges</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ACTIVE_CHALLENGES.map((c, i) => {
              const Icon = c.icon;
              const progress = c.totalDays ? (c.myProgress / c.totalDays) * 100 : 0;

              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <Card className={`h-full transition-all duration-200 ${c.joined ? "border-[#4F46E5]/30" : "hover:border-[var(--border)]"}`}>
                    <CardContent className="p-5 flex flex-col h-full gap-3">
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${c.color}15` }}>
                          <Icon className="h-5 w-5" style={{ color: c.color }} />
                        </div>
                        <div className="flex items-center gap-2">
                          {c.joined && <Badge variant="primary" className="text-xs">Joined</Badge>}
                          <Badge variant="secondary" className="text-xs">{c.type.replace("_", " ")}</Badge>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-1">{c.title}</h3>
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{c.desc}</p>
                      </div>

                      {c.joined && c.totalDays && (
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="text-[var(--muted-foreground)]">Progress</span>
                            <span className="font-medium">{c.myProgress}/{c.totalDays}</span>
                          </div>
                          <div className="h-2 rounded-full bg-[var(--secondary)] overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{ width: `${progress}%`, background: c.color }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          Ends {c.endDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          {c.participants.toLocaleString()} joined
                        </div>
                      </div>

                      <div className="rounded-xl border border-[var(--border)] bg-[var(--secondary)] p-2.5">
                        <p className="text-xs text-[var(--muted-foreground)] mb-0.5">Reward</p>
                        <div className="flex items-center gap-2">
                          <Star className="h-3.5 w-3.5 text-[#F59E0B]" />
                          <span className="text-sm font-medium">{c.reward.badge}</span>
                          <Badge variant="success" className="ml-auto text-xs">+{c.reward.points} pts</Badge>
                        </div>
                      </div>

                      {!c.joined ? (
                        <Button size="sm" className="w-full">Join Challenge</Button>
                      ) : (
                        <Button size="sm" variant="outline" className="w-full">
                          <CheckCircle className="h-4 w-4 text-[#10B981]" />
                          In Progress
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Completed */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Completed Challenges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {MY_COMPLETED.map((c) => (
                <div key={c.title} className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3">
                  <CheckCircle className="h-5 w-5 text-[#10B981] shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{c.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-xs text-[var(--muted-foreground)]">{c.date}</p>
                      <Trophy className="h-3 w-3 text-[#F59E0B]" />
                      <span className="text-xs text-[var(--muted-foreground)]">Rank #{c.rank}</span>
                    </div>
                  </div>
                  <Badge variant="warning" className="text-xs">{c.badge}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Challenge leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">30-Day Challenge Leaderboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {LEADERBOARD.map((u) => (
                <div
                  key={u.name}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${u.isMe ? "bg-[#4F46E5]/10 border border-[#4F46E5]/30" : "hover:bg-[var(--secondary)]"} transition-colors`}
                >
                  <span className="text-sm font-bold text-[var(--muted-foreground)] w-6">#{u.rank}</span>
                  <span className="flex-1 text-sm font-medium">{u.name}</span>
                  <span className="text-sm">{u.country}</span>
                  <span className="font-bold text-[#4F46E5] text-sm">{u.score}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
