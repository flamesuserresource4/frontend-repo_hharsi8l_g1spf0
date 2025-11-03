import { Lock, Mail, CreditCard, Search, Users, FileCheck, BadgeCheck, Star, Bell, Ticket, HelpCircle } from "lucide-react";

function FeatureCard({ icon: Icon, title, items }) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-white/40" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  return (
    <section className="bg-neutral-950 py-16" id="features">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Everything you need for safe, shared subscriptions
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          From Thapar-only verification to admin-approved listings and integrated payments — Synapse is built for trust.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Lock}
            title="Account & Onboarding"
            items={[
              "Thapar-exclusive sign-up (@thapar.edu)",
              "Secure sign-in with hashed passwords (bcrypt)",
              "Forgot password with email reset link",
              "Manage profile & change password",
            ]}
          />

          <FeatureCard
            icon={Search}
            title="Marketplace & Discovery"
            items={[
              "Discover verified groups at a glance",
              "Search by service (Netflix, Spotify, Prime)",
              "Filter by price, category, availability",
              "Sort by price, recency, or slots",
            ]}
          />

          <FeatureCard
            icon={Users}
            title="For Owners"
            items={[
              "Create a group in minutes",
              "Auto price suggestions per slot",
              "Upload proof of ownership for validation",
              "Approve or reject member requests",
            ]}
          />

          <FeatureCard
            icon={CreditCard}
            title="For Joiners"
            items={[
              "One-click request to join",
              "Seamless, secure payments (Razorpay)",
              "Auto-activation after payment",
              "View payment history & active memberships",
            ]}
          />

          <FeatureCard
            icon={BadgeCheck}
            title="Trust & Security"
            items={[
              "Admin validation for each listing",
              "Two-way ratings after billing cycles",
              "Email alerts: approvals, payments, reminders",
              "Raise disputes with a guided workflow",
            ]}
          />

          <FeatureCard
            icon={HelpCircle}
            title="Help & Support"
            items={[
              "Dedicated FAQ and quick answers",
              "Contact form to reach support",
              "Transparent policies and community rules",
              "Status updates for ongoing tickets",
            ]}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 text-sm text-white/70 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center gap-2 text-white">
              <FileCheck className="h-4 w-4 text-emerald-300" /> Admin-validated listings
            </div>
            Every new group is manually reviewed by an administrator before being visible to everyone.
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center gap-2 text-white">
              <Star className="h-4 w-4 text-yellow-300" /> Ratings that matter
            </div>
            Owners and members rate each other to build a visible reputation that promotes good behavior.
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center gap-2 text-white">
              <Bell className="h-4 w-4 text-indigo-300" /> Smart notifications
            </div>
            Email notifications keep everyone updated: requests, approvals, payments, reminders, and more.
          </div>
        </div>
      </div>
    </section>
  );
}
