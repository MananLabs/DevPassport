import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;

  // Demo profile data
  return NextResponse.json({
    username,
    name: "Alex Chen",
    bio: "Building distributed systems and open source tools.",
    country: "US",
    university: "MIT",
    role: "Senior Software Engineer",
    company: "Google",
    avatarUrl: null,
    score: {
      overall: 847,
      problemSolving: 812,
      engineering: 945,
      openSource: 903,
      projects: 788,
    },
    trustScore: 96,
    globalRank: 4352,
    countryRank: 218,
    verificationLevel: 4,
    accounts: [
      { platform: "GITHUB", username: "alexchen", connected: true },
      { platform: "LEETCODE", username: "alex_chen", connected: true },
      { platform: "CODEFORCES", username: "alexc", connected: true },
    ],
    badges: 12,
    projects: 4,
    achievements: 5,
    joinedAt: "2024-01-15T00:00:00Z",
  });
}
