import { NextRequest, NextResponse } from "next/server";
import {
  calculateProblemSolvingScore,
  calculateEngineeringScore,
  calculateOpenSourceScore,
  calculateProjectsScore,
  calculateKnowledgeSharingScore,
  calculateOverallScore,
  calculateTrustScore,
  calculateDeveloperDNA,
} from "@/lib/scoring";

export async function POST(request: NextRequest) {
  try {
    const metrics = await request.json();

    const problemSolving = calculateProblemSolvingScore(metrics);
    const engineering = calculateEngineeringScore(metrics);
    const openSource = calculateOpenSourceScore(metrics);
    const projects = calculateProjectsScore(metrics);
    const knowledgeSharing = calculateKnowledgeSharingScore(metrics);

    const overallScore = calculateOverallScore({
      problemSolving,
      engineering,
      projects,
      openSource,
      collaboration: Math.round((openSource + engineering) / 3),
      knowledgeSharing,
      learningVelocity: Math.round(problemSolving * 0.5),
      professional: Math.round(projects * 0.4),
    });

    const trustScore = calculateTrustScore({
      accountAgeDays: metrics.accountAgeDays || 0,
      connectedPlatforms: metrics.connectedPlatforms || 0,
      emailVerified: metrics.emailVerified || false,
      githubVerified: metrics.githubVerified || false,
      activityConsistencyScore: metrics.activityConsistencyScore || 0,
    });

    const dna = calculateDeveloperDNA(metrics);

    return NextResponse.json({
      overall: overallScore,
      categories: { problemSolving, engineering, openSource, projects, knowledgeSharing },
      trustScore,
      developerDNA: dna,
    });
  } catch {
    return NextResponse.json({ error: "Score calculation failed" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "userId required" }, { status: 400 });
  }

  return NextResponse.json({ error: "Database not configured" }, { status: 501 });
}
