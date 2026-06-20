"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Link2,
  Trophy,
  Award,
  FolderOpen,
  BarChart2,
  Zap,
  Settings,
  Sun,
  Moon,
  Menu,
  X,
  Bell,
  ChevronRight,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/connections", label: "Connections", icon: Link2 },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/challenges", label: "Challenges", icon: Zap },
  { href: "/settings", label: "Settings", icon: Settings },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  username?: string;
  score?: number;
}

export function DashboardLayout({ children, username = "alexchen", score = 847 }: DashboardLayoutProps) {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--background)]">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-60 flex-col border-r border-[var(--border)] bg-[var(--card)] transition-transform duration-300 lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-2.5 border-b border-[var(--border)] px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#4F46E5] shadow-sm">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="font-bold text-[var(--foreground)]">
            Dev<span className="text-[#4F46E5]">Passport</span>
          </span>
        </div>

        {/* User summary */}
        <div className="mx-3 mt-4 mb-2 rounded-xl border border-[var(--border)] bg-[var(--secondary)] p-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F46E5] text-white font-bold text-sm">
              {username[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[var(--foreground)] truncate">@{username}</p>
              <div className="flex items-center gap-1">
                <span className="text-xs text-[#4F46E5] font-bold">{score}</span>
                <span className="text-xs text-[var(--muted-foreground)]">· Expert</span>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-[var(--muted-foreground)] shrink-0" />
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-2">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 mb-0.5",
                  active
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
                )}
              >
                <Icon className={cn("h-4 w-4", active && "text-[#4F46E5]")} />
                {label}
                {active && (
                  <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] p-4">
          <Link
            href={`/${username}`}
            className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] hover:text-[#4F46E5] transition-colors"
          >
            <span className="truncate">devpassport.io/{username}</span>
            <ChevronRight className="h-3 w-3 shrink-0" />
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 items-center gap-4 border-b border-[var(--border)] bg-[var(--card)] px-4 sm:px-6">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[var(--secondary)] lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[var(--secondary)] text-[var(--muted-foreground)] relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#4F46E5]" />
            </button>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[var(--secondary)] text-[var(--muted-foreground)]"
            >
              {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
