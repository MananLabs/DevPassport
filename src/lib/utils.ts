import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

export function formatRank(rank: number): string {
  return `#${formatNumber(rank)}`;
}

export function getScoreColor(score: number): string {
  if (score >= 900) return "#10B981";
  if (score >= 750) return "#4F46E5";
  if (score >= 600) return "#F59E0B";
  if (score >= 400) return "#6B7280";
  return "#EF4444";
}

export function getScoreLabel(score: number): string {
  if (score >= 900) return "Elite";
  if (score >= 750) return "Expert";
  if (score >= 600) return "Proficient";
  if (score >= 400) return "Intermediate";
  return "Beginner";
}

export function getTrustBadge(score: number): { label: string; color: string } {
  if (score >= 90) return { label: "Elite Contributor", color: "#10B981" };
  if (score >= 75) return { label: "Highly Trusted", color: "#4F46E5" };
  if (score >= 60) return { label: "Verified Developer", color: "#14B8A6" };
  if (score >= 40) return { label: "Trusted Member", color: "#F59E0B" };
  return { label: "Building Trust", color: "#6B7280" };
}

export function timeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 30) return date.toLocaleDateString();
  if (diffDays > 0) return `${diffDays}d ago`;
  if (diffHours > 0) return `${diffHours}h ago`;
  if (diffMins > 0) return `${diffMins}m ago`;
  return "just now";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
