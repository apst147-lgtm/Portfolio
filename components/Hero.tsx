import { portfolio } from "@/data/portfolio";

const services = ["คลินิก", "อสังหาฯ", "งานแต่ง", "ADS Motion", "Personal Brand"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 overflow-hidden hero-gradient">

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neutral-100 rounded-full blur-3xl opacity-60 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-neutral-200 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }} />

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 border border-neutral-200 bg-white/80 backdrop-blur-sm text-neutral-500 text-xs tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Available for projects
      </div>

      {/* Name */}
      <h1 className="relative z-10 text-6xl md:text-8xl font-light text-neutral-900 leading-none mb-4 tracking-tight">
        {portfolio.name}
      </h1>

      {/* Tagline */}
      <p className="relative z-10 text-xl md:text-2xl text-neutral-400 font-light mb-4">
        {portfolio.tagline}
      </p>

      {/* Services ticker */}
      <div className="relative z-10 flex items-center gap-3 mb-12 flex-wrap justify-center">
        {services.map((s, i) => (
          <span key={s} className="flex items-center gap-3 text-xs text-neutral-400 tracking-widest uppercase">
            {s}
            {i < services.length - 1 && <span className="w-1 h-1 rounded-full bg-neutral-300" />}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm tracking-widest uppercase px-10 py-4 hover:bg-neutral-700 transition-all duration-300 group"
        >
          ดูผลงาน
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href={portfolio.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 text-sm tracking-widest uppercase px-10 py-4 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
        >
          ติดต่องาน
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-neutral-300">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-neutral-300 to-transparent" />
      </div>
    </section>
  );
}
