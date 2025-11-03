import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-semibold text-white">Synapse</div>
            <p className="mt-1 text-sm text-white/60">Thapar-exclusive marketplace for sharing subscriptions.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
              href="#support"
            >
              <Mail className="h-4 w-4" /> Contact Support
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
              href="https://github.com" target="_blank" rel="noreferrer"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Synapse. All rights reserved.</div>
      </div>
    </footer>
  );
}
