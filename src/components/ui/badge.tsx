import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "destructive" | "outline" | "primary";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[#4F46E5] text-white",
    secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)]",
    success: "bg-[#10B981]/15 text-[#10B981]",
    warning: "bg-[#F59E0B]/15 text-[#F59E0B]",
    destructive: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400",
    outline: "border border-[var(--border)] text-[var(--foreground)]",
    primary: "bg-[#4F46E5]/10 text-[#4F46E5]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
