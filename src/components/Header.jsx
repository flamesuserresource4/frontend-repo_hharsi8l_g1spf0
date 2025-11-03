import { Shield, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-white">Synapse</span>
          <span className="ml-2 rounded-full bg-white/5 px-2 py-0.5 text-xs text-white/70">Thapar-only</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#discover" className="text-sm text-white/80 transition hover:text-white">Discover</a>
          <a href="#owners" className="text-sm text-white/80 transition hover:text-white">For Owners</a>
          <a href="#joiners" className="text-sm text-white/80 transition hover:text-white">For Members</a>
          <a href="#trust" className="text-sm text-white/80 transition hover:text-white">Trust & Security</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 md:flex">
            <Search className="h-4 w-4" />
            Search
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
