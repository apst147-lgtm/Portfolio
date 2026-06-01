import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 bg-white">
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">
        Available for projects
      </p>
      <h1 className="text-5xl md:text-7xl font-light text-neutral-900 leading-tight mb-6 tracking-tight">
        {portfolio.name}
      </h1>
      <p className="text-lg md:text-xl text-neutral-500 font-light mb-10 max-w-md">
        {portfolio.tagline}
      </p>
      <a
        href="#work"
        className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border border-neutral-900 text-neutral-900 px-8 py-3 hover:bg-neutral-900 hover:text-white transition-all duration-300"
      >
        View Work
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-neutral-300">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-neutral-300 to-transparent" />
      </div>
    </section>
  );
}
