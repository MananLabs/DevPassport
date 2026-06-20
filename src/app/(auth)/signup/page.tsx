"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitBranch, Eye, EyeOff, ArrowRight, CheckCircle } from "lucide-react";

const STEPS = ["Account", "Profile", "Connections"];

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "", username: "", name: "", password: "",
    country: "", university: "", role: "",
  });

  const update = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) { setStep(s => s + 1); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center p-4">
      <div className="absolute top-1/4 left-1/3 h-64 w-64 rounded-full bg-[#4F46E5]/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F46E5]">
              <span className="text-white font-bold">D</span>
            </div>
            <span className="text-xl font-bold text-white">Dev<span className="text-[#4F46E5]">Passport</span></span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Create your DevPassport</h1>
          <p className="text-white/50 text-sm">Join 1M+ developers building verified reputations</p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium transition-all ${
                i < step ? "bg-[#10B981] text-white" :
                i === step ? "bg-[#4F46E5] text-white" :
                "bg-white/10 text-white/30"
              }`}>
                {i < step ? <CheckCircle className="h-4 w-4" /> : i + 1}
              </div>
              <span className={`text-xs ${i === step ? "text-white" : "text-white/30"}`}>{s}</span>
              {i < STEPS.length - 1 && (
                <div className={`w-8 h-px ${i < step ? "bg-[#10B981]" : "bg-white/10"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          {step === 0 && (
            <>
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all duration-150">
                  <GitBranch className="h-4 w-4" />
                  Sign up with GitHub
                </button>
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-transparent px-3 text-white/30">or with email</span>
                </div>
              </div>
              <form onSubmit={handleNext} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">Email</label>
                  <input
                    type="email" required value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#4F46E5] transition-all"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">Username</label>
                  <div className="flex items-center rounded-xl border border-white/10 bg-white/5 focus-within:border-[#4F46E5] transition-all overflow-hidden">
                    <span className="px-3 text-white/30 text-sm">devpassport.io/</span>
                    <input
                      type="text" required value={form.username}
                      onChange={(e) => update("username", e.target.value)}
                      placeholder="alexchen"
                      className="flex-1 bg-transparent py-3 pr-4 text-sm text-white placeholder:text-white/30 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"} required value={form.password}
                      onChange={(e) => update("password", e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-11 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#4F46E5] transition-all"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white mt-2">
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </>
          )}

          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              <p className="text-white/50 text-sm mb-4">Tell us a bit about yourself</p>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/70">Full Name</label>
                <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)}
                  placeholder="Alex Chen"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#4F46E5] transition-all" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/70">Country</label>
                <input type="text" value={form.country} onChange={(e) => update("country", e.target.value)}
                  placeholder="United States"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#4F46E5] transition-all" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/70">University (optional)</label>
                <input type="text" value={form.university} onChange={(e) => update("university", e.target.value)}
                  placeholder="MIT, Stanford, etc."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#4F46E5] transition-all" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/70">Current Role</label>
                <input type="text" value={form.role} onChange={(e) => update("role", e.target.value)}
                  placeholder="Senior Software Engineer"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#4F46E5] transition-all" />
              </div>
              <div className="flex gap-3 mt-2">
                <Button type="button" variant="outline" size="lg" className="flex-1 border-white/15 text-white hover:bg-white/10" onClick={() => setStep(0)}>
                  Back
                </Button>
                <Button type="submit" size="lg" className="flex-1 bg-[#4F46E5] hover:bg-[#4338CA] text-white">
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-4">
              <p className="text-white/50 text-sm mb-2">Connect your platforms to start calculating your score</p>
              <div className="space-y-2">
                {[
                  { name: "GitHub", color: "#24292E", key: "github", required: true },
                  { name: "LeetCode", color: "#FFA116", key: "leetcode" },
                  { name: "Codeforces", color: "#1F8DD6", key: "codeforces" },
                  { name: "HackerRank", color: "#00EA64", key: "hackerrank" },
                ].map(({ name, color, key, required }) => (
                  <div key={key} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-4 py-3">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: color }}>
                      {name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{name}</p>
                      {required && <p className="text-xs text-white/30">Recommended</p>}
                    </div>
                    <button type="button" className="text-xs text-[#818CF8] border border-[#4F46E5]/30 rounded-lg px-3 py-1.5 hover:bg-[#4F46E5]/10 transition-all">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/30 text-center">You can connect more platforms later in your dashboard</p>
              <div className="flex gap-3 mt-2">
                <Button type="button" variant="outline" size="lg" className="flex-1 border-white/15 text-white hover:bg-white/10" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit" size="lg" loading={loading} className="flex-1 bg-[#4F46E5] hover:bg-[#4338CA] text-white">
                  Create Profile
                </Button>
              </div>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-white/40 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[#818CF8] hover:text-white transition-colors">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}
