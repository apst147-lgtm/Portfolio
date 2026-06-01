import { portfolio } from "@/data/portfolio";

const TICKER = ["คลินิก", "อสังหาริมทรัพย์", "งานแต่ง", "ADS Motion", "Personal Brand", "Reels & Shorts", "Color Grading", "Motion Graphics"];

export default function Hero() {
  const ticker = [...TICKER, ...TICKER]; // doubled for seamless loop

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] overflow-hidden hero-noise">

      {/* Ambient blobs */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-white/[0.04] blur-3xl animate-float-slow pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10 w-full">

        {/* Status badge */}
        <div className="flex items-center gap-2 mb-10">
          <span className="flex items-center gap-2 border border-white/10 text-white/50 text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for projects
          </span>
        </div>

        {/* Name — large display */}
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-extralight text-white leading-[0.9] tracking-tight mb-6">
          {portfolio.name}
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px bg-white/20 flex-1 max-w-xs" />
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase shrink-0">
            {portfolio.tagline}
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#work"
            className="group inline-flex items-center gap-3 bg-white text-black text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-neutral-200 transition-colors duration-300">
            ดูผลงาน
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href={portfolio.lineUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/20 text-white/70 text-xs tracking-[0.2em] uppercase px-10 py-4 hover:border-white hover:text-white transition-all duration-300">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            แอดไลน์
          </a>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 mt-auto border-t border-white/10 py-5 overflow-hidden">
        <div className="flex items-center gap-0 animate-marquee whitespace-nowrap">
          {ticker.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 text-xs text-white/30 tracking-[0.25em] uppercase">
              {item}
              <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-20 right-6 hidden md:flex flex-col items-center gap-2 rotate-90 text-white/20">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-8 h-px bg-white/20" />
      </div>
    </section>
  );
}
