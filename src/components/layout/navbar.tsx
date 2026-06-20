"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Moon,
  Menu,
  X,
  Trophy,
  BarChart2,
  Users,
  Zap,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isAuthenticated?: boolean;
  username?: string;
  avatarUrl?: string;
}

export function Navbar({ isAuthenticated = false, username, avatarUrl }: NavbarProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
    { href: "/features", label: "Features", icon: Zap },
    { href: "/for-recruiters", label: "For Recruiters", icon: Users },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-[#4F46E5] shadow-lg group-hover:shadow-[#4F46E5]/40 transition-shadow duration-300">
            <span className="text-white font-bold text-sm">D</span>
            <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#14B8A6]" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Dev<span className="text-[#4F46E5]">Passport</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-all duration-150"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-all duration-150"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {isAuthenticated ? (
            <Link href="/dashboard">
              <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 hover:border-[#4F46E5]/50 transition-all duration-150">
                {avatarUrl ? (
                  <img src={avatarUrl} alt={username} className="h-6 w-6 rounded-full" />
                ) : (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4F46E5] text-xs text-white font-bold">
                    {username?.[0]?.toUpperCase()}
                  </div>
                )}
                <span className="text-sm font-medium">{username}</span>
                <ChevronDown className="h-3.5 w-3.5 text-[var(--muted-foreground)]" />
              </div>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">Sign in</Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Get My Score</Button>
              </Link>
            </>
          )}

          {/* Mobile menu button */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
                onClick={() => setMobileOpen(false)}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
