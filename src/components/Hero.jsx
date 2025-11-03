import { Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
            Share subscriptions. Build trust. Save together.
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Synapse — Thapar's trusted marketplace for subscription sharing
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-white/70">
            Create or join verified groups for Netflix, Spotify, Prime Video and more. Secure sign-in with
            Thapar email, ratings-driven reputation, and integrated payments — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#discover" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-white/90">
              <Rocket className="h-4 w-4" />
              Explore groups
            </a>
            <a href="#owners" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              List your subscription
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/60">
            <span>Thapar-only email verification</span>
            <span className="opacity-40">•</span>
            <span>Secure payments</span>
            <span className="opacity-40">•</span>
            <span>Admin-validated listings</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-16 -z-0 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="relative z-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Netflix Family", price: "₹120 / mo", slots: "3 of 5 filled" },
                { title: "Spotify Duo", price: "₹89 / mo", slots: "1 of 2 filled" },
                { title: "Prime Video", price: "₹70 / mo", slots: "4 of 6 filled" },
                { title: "YouTube Premium", price: "₹60 / mo", slots: "2 of 5 filled" },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-8 rounded-lg bg-white/10" />
                    <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                      Verified
                    </span>
                  </div>
                  <div className="mt-3 text-sm font-medium text-white">{c.title}</div>
                  <div className="mt-1 text-xs text-white/60">{c.slots}</div>
                  <div className="mt-3 text-sm text-white/90">{c.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
