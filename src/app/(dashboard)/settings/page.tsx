"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Eye, EyeOff, Bell, Globe, Download, Trash2, CheckCircle, Camera } from "lucide-react";

export default function SettingsPage() {
  const [profilePublic, setProfilePublic] = useState(true);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [showEmail, setShowEmail] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setSaving(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-[var(--muted-foreground)] text-sm mt-0.5">Manage your account preferences</p>
        </div>

        {/* Profile */}
        <Card>
          <CardHeader><CardTitle className="text-base">Profile Information</CardTitle></CardHeader>
          <CardContent className="space-y-5">
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#6366F1] flex items-center justify-center text-2xl text-white font-bold">
                  A
                </div>
                <button className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--background)] bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors">
                  <Camera className="h-3.5 w-3.5" />
                </button>
              </div>
              <div>
                <p className="font-medium">Alex Chen</p>
                <p className="text-sm text-[var(--muted-foreground)]">@alexchen</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Full Name", value: "Alex Chen", type: "text" },
                { label: "Username", value: "alexchen", type: "text" },
                { label: "Current Role", value: "Senior Software Engineer", type: "text" },
                { label: "Company", value: "Google", type: "text" },
                { label: "Country", value: "United States", type: "text" },
                { label: "University", value: "MIT", type: "text" },
              ].map(({ label, value, type }) => (
                <div key={label}>
                  <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">{label}</label>
                  <input
                    type={type}
                    defaultValue={value}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Bio</label>
                <textarea
                  defaultValue="Building distributed systems and open source tools. Passionate about developer experience."
                  rows={3}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all resize-none"
                />
              </div>
            </div>

            <Button onClick={handleSave} loading={saving}>Save Profile</Button>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader><CardTitle className="text-base">Security</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Email</label>
              <div className="relative">
                <input
                  type={showEmail ? "text" : "password"}
                  defaultValue="alex@example.com"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 pr-10 text-sm outline-none focus:border-[#4F46E5] transition-all"
                />
                <button onClick={() => setShowEmail(!showEmail)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]">
                  {showEmail ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">New Password</label>
              <input type="password" placeholder="Leave blank to keep current" className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all" />
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[#10B981]/30 bg-[#10B981]/5 p-3">
              <CheckCircle className="h-5 w-5 text-[#10B981]" />
              <div>
                <p className="text-sm font-medium">Two-Factor Authentication</p>
                <p className="text-xs text-[var(--muted-foreground)]">Enabled via GitHub</p>
              </div>
              <Badge variant="success" className="ml-auto text-xs">Active</Badge>
            </div>
            <Button variant="outline">Update Security</Button>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card>
          <CardHeader><CardTitle className="text-base">Privacy</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Public Profile", desc: "Anyone can view your devpassport.io/alexchen profile", value: profilePublic, set: setProfilePublic },
              { label: "Show Email", desc: "Display your email on your public profile", value: false, set: () => {} },
              { label: "Recruiter Visibility", desc: "Allow recruiters to find and contact you", value: true, set: () => {} },
            ].map(({ label, desc, value, set }) => (
              <div key={label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{desc}</p>
                </div>
                <button
                  onClick={() => set(!value)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${value ? "bg-[#4F46E5]" : "bg-[var(--secondary)]"}`}
                >
                  <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${value ? "translate-x-5" : "translate-x-0.5"}`} />
                </button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader><CardTitle className="text-base">Notifications</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Email Notifications", desc: "Badge unlocks, rank changes", value: emailNotifs, set: setEmailNotifs },
              { label: "Weekly Report", desc: "Score summary every Monday", value: weeklyReport, set: setWeeklyReport },
              { label: "Recruiter Contacts", desc: "When a recruiter contacts you", value: true, set: () => {} },
            ].map(({ label, desc, value, set }) => (
              <div key={label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{desc}</p>
                </div>
                <button
                  onClick={() => set(!value)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${value ? "bg-[#4F46E5]" : "bg-[var(--secondary)]"}`}
                >
                  <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${value ? "translate-x-5" : "translate-x-0.5"}`} />
                </button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Data */}
        <Card className="border-red-200 dark:border-red-900/30">
          <CardHeader><CardTitle className="text-base text-red-600 dark:text-red-400">Danger Zone</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-[var(--border)] p-4">
              <div>
                <p className="text-sm font-medium">Export My Data</p>
                <p className="text-xs text-[var(--muted-foreground)]">Download all your data as JSON</p>
              </div>
              <Button size="sm" variant="outline" className="gap-1.5">
                <Download className="h-3.5 w-3.5" />
                Export
              </Button>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 p-4">
              <div>
                <p className="text-sm font-medium text-red-600 dark:text-red-400">Delete Account</p>
                <p className="text-xs text-red-500/70">This action is irreversible</p>
              </div>
              <Button size="sm" variant="destructive" className="gap-1.5">
                <Trash2 className="h-3.5 w-3.5" />
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
