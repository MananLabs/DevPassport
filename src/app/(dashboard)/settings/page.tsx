"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Camera, Download, Trash2 } from "lucide-react";

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [profilePublic, setProfilePublic] = useState(true);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
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
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-[var(--secondary)] flex items-center justify-center text-[var(--muted-foreground)]">
                  <Camera className="h-6 w-6" />
                </div>
                <button className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--background)] bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors">
                  <Camera className="h-3.5 w-3.5" />
                </button>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--muted-foreground)]">Upload a photo</p>
                <p className="text-xs text-[var(--muted-foreground)]">PNG, JPG up to 2MB</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Full Name", placeholder: "Your full name" },
                { label: "Username", placeholder: "your-username" },
                { label: "Current Role", placeholder: "Software Engineer" },
                { label: "Company", placeholder: "Company name" },
                { label: "Country", placeholder: "United States" },
                { label: "University", placeholder: "University (optional)" },
              ].map(({ label, placeholder }) => (
                <div key={label}>
                  <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">{label}</label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">Bio</label>
                <textarea
                  placeholder="Tell us about yourself..."
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
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block text-[var(--muted-foreground)]">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Leave blank to keep current"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 pr-11 text-sm outline-none focus:border-[#4F46E5] transition-all"
                />
                <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button variant="outline">Update Security</Button>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card>
          <CardHeader><CardTitle className="text-base">Privacy</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Public Profile", desc: "Anyone can view your DevPassport profile", value: profilePublic, set: setProfilePublic },
              { label: "Recruiter Visibility", desc: "Allow recruiters to find and contact you", value: true, set: () => {} },
            ].map(({ label, desc, value, set }) => (
              <div key={label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{desc}</p>
                </div>
                <button
                  onClick={() => set(!value)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${value ? "bg-[#4F46E5]" : "bg-[var(--secondary)] border border-[var(--border)]"}`}
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
            ].map(({ label, desc, value, set }) => (
              <div key={label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{desc}</p>
                </div>
                <button
                  onClick={() => set(!value)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${value ? "bg-[#4F46E5]" : "bg-[var(--secondary)] border border-[var(--border)]"}`}
                >
                  <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${value ? "translate-x-5" : "translate-x-0.5"}`} />
                </button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Danger zone */}
        <Card className="border-red-200 dark:border-red-900/30">
          <CardHeader><CardTitle className="text-base text-red-600 dark:text-red-400">Danger Zone</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-[var(--border)] p-4">
              <div>
                <p className="text-sm font-medium">Export My Data</p>
                <p className="text-xs text-[var(--muted-foreground)]">Download all your data as JSON</p>
              </div>
              <Button size="sm" variant="outline" className="gap-1.5">
                <Download className="h-3.5 w-3.5" />Export
              </Button>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 p-4">
              <div>
                <p className="text-sm font-medium text-red-600 dark:text-red-400">Delete Account</p>
                <p className="text-xs text-red-500/70">This action is irreversible</p>
              </div>
              <Button size="sm" variant="destructive" className="gap-1.5">
                <Trash2 className="h-3.5 w-3.5" />Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
