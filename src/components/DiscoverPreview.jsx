import { Search, SlidersHorizontal, ChevronRight } from "lucide-react";

function Card({ title, price, slots, owner, rating }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:translate-y-[-2px] hover:bg-white/10">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-white/10" />
          <div>
            <h4 className="text-sm font-semibold text-white">{title}</h4>
            <p className="text-xs text-white/60">by {owner} • ⭐ {rating}</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">Verified</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-white/80">{slots}</div>
        <div className="text-sm font-semibold text-white">{price}</div>
      </div>
      <button className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-indigo-200">
        View details <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function DiscoverPreview() {
  const items = [
    { title: "Netflix Premium", price: "₹120 / slot", slots: "2 of 5 filled", owner: "Aarav", rating: 4.9 },
    { title: "Spotify Family", price: "₹89 / slot", slots: "4 of 6 filled", owner: "Kiara", rating: 4.8 },
    { title: "Prime Video", price: "₹70 / slot", slots: "1 of 4 filled", owner: "Kabir", rating: 4.7 },
    { title: "YouTube Premium", price: "₹60 / slot", slots: "3 of 5 filled", owner: "Ishita", rating: 4.9 },
  ];

  return (
    <section id="discover" className="bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Discover verified groups</h2>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <div className="flex w-full items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
              <Search className="h-4 w-4" />
              <input
                placeholder="Search services (e.g., Netflix, Spotify)"
                className="w-full bg-transparent outline-none placeholder:text-white/40"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Card key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
