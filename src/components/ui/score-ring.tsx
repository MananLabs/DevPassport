"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { getScoreColor, getScoreLabel } from "@/lib/utils";

interface ScoreRingProps {
  score: number;
  maxScore?: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  showScore?: boolean;
  className?: string;
  animate?: boolean;
}

export function ScoreRing({
  score,
  maxScore = 1000,
  size = 160,
  strokeWidth = 10,
  showLabel = true,
  showScore = true,
  className,
  animate = true,
}: ScoreRingProps) {
  const [displayScore, setDisplayScore] = useState(animate ? 0 : score);
  const [dashOffset, setDashOffset] = useState(0);
  const animatedRef = useRef(false);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = score / maxScore;
  const targetOffset = circumference * (1 - percentage);
  const color = getScoreColor(score);
  const label = getScoreLabel(score);

  useEffect(() => {
    if (!animate || animatedRef.current) return;
    animatedRef.current = true;

    let startTime: number | null = null;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayScore(Math.round(eased * score));
      setDashOffset(circumference - eased * (circumference - targetOffset));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [score, animate, circumference, targetOffset]);

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-[var(--secondary)]"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={animate ? dashOffset : targetOffset}
          strokeLinecap="round"
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {showScore && (
          <span className="text-3xl font-bold tabular-nums" style={{ color }}>
            {displayScore}
          </span>
        )}
        {showLabel && (
          <span className="text-xs font-medium text-[var(--muted-foreground)] mt-0.5">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
