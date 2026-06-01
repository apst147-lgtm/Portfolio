import { portfolio } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-neutral-100 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400 tracking-wide">
        <span className="font-medium text-neutral-600">{portfolio.name}</span>
        <span>© {year} — All rights reserved</span>
      </div>
    </footer>
  );
}
