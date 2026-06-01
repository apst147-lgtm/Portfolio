import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] text-white/20 tracking-widest uppercase">
        <span>{portfolio.name}</span>
        <span>© {new Date().getFullYear()} — All rights reserved</span>
      </div>
    </footer>
  );
}
