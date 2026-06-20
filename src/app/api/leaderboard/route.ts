import { NextRequest, NextResponse } from "next/server";

const DEMO_LEADERS = Array.from({ length: 50 }, (_, i) => ({
  rank: i + 1,
  userId: `user_${i}`,
  name: ["Sakura Yamamoto", "Priya Sharma", "Marcus Chen", "Lena Müller", "Ahmed Hassan", "Sofia Costa", "Yuki Tanaka", "Ivan Petrov"][i % 8],
  username: `dev_${i + 1}`,
  country: ["JP", "IN", "US", "DE", "EG", "BR", "JP", "RU"][i % 8],
  score: Math.max(500, 990 - i * 10 + Math.floor(Math.random() * 5)),
  trustScore: Math.max(60, 98 - Math.floor(i * 0.5)),
  badge: i < 3 ? "Elite Verified" : i < 10 ? "Highly Trusted" : "Verified",
}));

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const scope = searchParams.get("scope") || "global";
  const category = searchParams.get("category") || "overall";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  const start = (page - 1) * limit;
  const entries = DEMO_LEADERS.slice(start, start + limit);

  return NextResponse.json({
    scope,
    category,
    page,
    total: DEMO_LEADERS.length,
    entries,
  });
}
