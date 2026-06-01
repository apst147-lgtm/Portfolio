import { portfolio } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const TICKER = ["คลินิก", "อสังหาริมทรัพย์", "งานแต่ง", "ADS Motion", "Personal Brand", "Reels & Shorts", "Color Grading", "Motion Graphics"];

export default function Hero() {
  const ticker = [...TICKER, ...TICKER];

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] overflow-hidden hero-noise">
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-white/[0.04] blur-3xl animate-float-slow pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12 w-full">

        <div className="mb-10">
          <Badge variant="outline" className="rounded-full border-white/15 text-white/50 bg-transparent text-[10px] tracking-[0.2em] uppercase px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mr-2" />
            Available for projects
          </Badge>
        </div>

        <h1 className="text-[clamp(3rem,10vw,8rem)] font-extralight text-white leading-[0.9] tracking-tight mb-6">
          {portfolio.name}
        </h1>

        <div className="flex items-center gap-6 mb-10">
          <div className="h-px bg-white/15 w-32" />
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase">{portfolio.tagline}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#work" className={cn(buttonVariants({ variant: "secondary" }), "rounded-none tracking-[0.2em] uppercase text-xs px-10 py-6 bg-white text-black hover:bg-neutral-200 transition-colors gap-2")}>
            ดูผลงาน
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href={portfolio.lineUrl} target="_blank" rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "rounded-none tracking-[0.2em] uppercase text-xs px-10 py-6 border-white/20 bg-transparent text-white/70 hover:border-white hover:text-white hover:bg-transparent transition-all gap-2")}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            แอดไลน์
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-auto border-t border-white/[0.07] py-5 overflow-hidden">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {ticker.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5 text-[11px] text-white/25 tracking-[0.25em] uppercase">
              {item}<span className="w-1 h-1 rounded-full bg-white/15 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
