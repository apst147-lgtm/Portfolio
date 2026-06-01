import { portfolio } from "@/data/portfolio";

const skills = [
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "CapCut / Mobile Edit",
  "Motion Graphics",
  "Color Grading",
  "Reels / Shorts",
  "Sound Design",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-2">About</p>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-8">เกี่ยวกับเรา</h2>
            <p className="text-neutral-600 leading-relaxed mb-6 font-light">{portfolio.bio}</p>
            <a
              href={portfolio.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-900 border-b border-neutral-900 pb-0.5 hover:gap-4 transition-all duration-200"
            >
              ติดต่องาน
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">Tools & Skills</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-neutral-700">
                  <span className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
