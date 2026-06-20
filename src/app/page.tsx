"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { HeroCard } from "@/components/landing/hero-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Shield,
  Code2,
  Star,
  Users,
  Zap,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
  GitBranch,
  TrendingUp,
  BarChart2,
} from "lucide-react";

const PLATFORM_LOGOS = [
  { name: "GitHub", bg: "#24292E" },
  { name: "LeetCode", bg: "#FFA116" },
  { name: "Codeforces", bg: "#1F8DD6" },
  { name: "HackerRank", bg: "#00EA64" },
  { name: "Kaggle", bg: "#20BEFF" },
  { name: "CodeChef", bg: "#5B4638" },
  { name: "AtCoder", bg: "#955FFF" },
  { name: "Dev.to", bg: "#0A0A0A" },
  { name: "Medium", bg: "#1A1A1A" },
  { name: "GitLab", bg: "#FC6D26" },
];

const FEATURES = [
  {
    icon: Trophy,
    title: "Developer Credit Score",
    desc: "A single 0-1000 score aggregating your entire developer footprint from 10+ platforms.",
    color: "#4F46E5",
  },
  {
    icon: Shield,
    title: "Trust Score Engine",
    desc: "Separate 0-100 trust score measuring account authenticity, consistency and verification.",
    color: "#14B8A6",
  },
  {
    icon: Code2,
    title: "Developer DNA",
    desc: "Radar chart personality profile: Builder, Problem Solver, Researcher, Leader & more.",
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Global Leaderboards",
    desc: "Rank worldwide, by country, university, or technology stack.",
    color: "#F59E0B",
  },
  {
    icon: Award,
    title: "Verified Badges",
    desc: "Earn badges like Elite Problem Solver, Open Source Veteran, and Builder.",
    color: "#8B5CF6",
  },
  {
    icon: Users,
    title: "Recruiter Dashboard",
    desc: "Premium search for recruiters to find, compare, and shortlist top developers.",
    color: "#EC4899",
  },
];

const STATS = [
  { value: "10+", label: "Connected Platforms" },
  { value: "1M+", label: "Developer Profiles" },
  { value: "15+", label: "Score Categories" },
  { value: "180+", label: "Countries" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Connect Your Accounts",
    desc: "Link GitHub, LeetCode, Codeforces, HackerRank, Kaggle, and 5+ more platforms in under 2 minutes.",
  },
  {
    step: "02",
    title: "Score Is Calculated",
    desc: "Our engine aggregates data across all platforms and computes your Developer Credit Score using 50+ signals.",
  },
  {
    step: "03",
    title: "Share Your Passport",
    desc: "Get your unique devpassport.io/username URL. Share it with recruiters, on GitHub, or anywhere.",
  },
];

function PlatformScroll() {
  return (
    <div className="relative overflow-hidden py-6">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#0B0F1A] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#0B0F1A] to-transparent pointer-events-none" />
      <div
        className="flex gap-4 w-max"
        style={{ animation: "platformScroll 30s linear infinite" }}
      >
        {[...PLATFORM_LOGOS, ...PLATFORM_LOGOS].map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 backdrop-blur-sm"
            style={{ background: `${p.bg}22` }}
          >
            <div
              className="h-5 w-5 rounded-md text-white font-bold text-xs flex items-center justify-center"
              style={{ backgroundColor: p.bg }}
            >
              {p.name[0]}
            </div>
            <span className="text-white/60 text-sm font-medium whitespace-nowrap">{p.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes platformScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#4F46E5]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#14B8A6]/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/10 px-4 py-1.5 text-sm text-[#818CF8]">
                <Zap className="h-3.5 w-3.5" />
                <span>The FICO Score for Software Engineers</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                The Credit Score{" "}
                <span className="gradient-text">for Developers</span>
              </h1>

              <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
                Connect your developer ecosystem. Build your reputation. Verify your skills.
                Show the world what you&apos;ve built.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg px-8">
                    Get My Score
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/leaderboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 hover:border-white/30"
                  >
                    <Trophy className="h-4 w-4 mr-2" />
                    View Leaderboard
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 flex-wrap">
                {[
                  { icon: CheckCircle, text: "Free forever" },
                  { icon: Shield, text: "Privacy-first" },
                  { icon: GitBranch, text: "10+ platforms" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-sm text-white/50">
                    <Icon className="h-4 w-4 text-[#10B981]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <HeroCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform scroll */}
      <section className="border-t border-white/5 py-2">
        <p className="text-center text-white/30 text-xs mb-4 uppercase tracking-widest">
          Aggregating data from
        </p>
        <PlatformScroll />
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ value, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/8 bg-white/3 p-6 text-center backdrop-blur-sm"
              >
                <p className="text-4xl font-bold gradient-text mb-1">{value}</p>
                <p className="text-white/50 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#4F46E5]/10 text-[#818CF8] border border-[#4F46E5]/20 mb-4">
              Platform Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Everything in one place</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              We aggregate, verify, and score your entire developer identity across the ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-white/15 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/20 mb-4">
              How It Works
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Up and running in minutes</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#4F46E5]/30 bg-[#4F46E5]/10 text-2xl font-bold text-[#818CF8]">
                  {step}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Score breakdown */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl border border-white/8 bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#14B8A6]/10 p-8 md:p-12 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-[#4F46E5]/10 text-[#818CF8] border border-[#4F46E5]/20 mb-4">
                  Score Breakdown
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Transparent. Verifiable. Fair.
                </h2>
                <p className="text-white/50 mb-8 leading-relaxed">
                  Every point in your score is traceable to real contributions.
                  No black boxes. No fake metrics. Just real engineering merit.
                </p>
                <Link href="/signup">
                  <Button className="gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white">
                    Calculate My Score
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Problem Solving", score: 812, color: "#4F46E5" },
                  { label: "Engineering Quality", score: 945, color: "#14B8A6" },
                  { label: "Open Source Impact", score: 903, color: "#10B981" },
                  { label: "Product Building", score: 788, color: "#F59E0B" },
                  { label: "Collaboration", score: 760, color: "#8B5CF6" },
                  { label: "Knowledge Sharing", score: 695, color: "#EC4899" },
                ].map(({ label, score, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-4"
                  >
                    <span className="w-36 text-sm text-white/60 text-right shrink-0">{label}</span>
                    <div className="flex-1 h-2 rounded-full bg-white/8 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(score / 1000) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    <span className="w-12 text-sm font-bold tabular-nums shrink-0" style={{ color }}>
                      {score}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Join developers who own{" "}
              <span className="gradient-text">their reputation</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Stop letting your skills be invisible. Build a verified developer profile
              that speaks louder than any resume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-10">
                  Get My Score — It&apos;s Free
                </Button>
              </Link>
              <Link href="/leaderboard">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Explore Leaderboard
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-white/30 text-sm">
              No credit card required · Free forever · 2 minute setup
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#4F46E5]">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold">Dev<span className="text-[#4F46E5]">Passport</span></span>
            </div>
            <p className="text-white/30 text-sm">
              © 2025 DevPassport. The Universal Reputation Network for Developers.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
